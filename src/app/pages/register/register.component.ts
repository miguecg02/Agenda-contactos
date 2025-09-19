import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { RegisterData } from '../../interfaces/register';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, RouterModule,MatCardModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  authService = inject(AuthService);
  snackBarService = inject(SnackBarService)
  router = inject(Router);

  /** Intenta registrar al usuario en el back */
  async register(){
    const registerData : RegisterData = {
      firstName: this.form.value.firstName ?? '',
      lastName: this.form.value.lastName ?? '',
      password: this.form.value.password ?? '',
      email: this.form.value.email ?? ''
    }
    const register = await this.authService.register(registerData);
    if(!register.success){
      this.snackBarService.openSnackbarError(register.message);
    } else {
      this.snackBarService.openSnackbarSuccess(register.message);
      this.router.navigate(["/login"])
    }
  }

  /** Datos de formulario de registro */
  form = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(form: AbstractControl) {
    const password = form.value.password;
    const password2 = form.value.password2;
    if (password && password2 && password !== password2) {
      form.get('password2')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    return null;
  }
}
