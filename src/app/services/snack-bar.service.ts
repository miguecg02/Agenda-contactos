import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  private _snackBar = inject(MatSnackBar);

  /** Abre un snackbar */
  openSnackbar(message:string,action:string = "",duration: number = 2500){
    this._snackBar.open(message,action,{duration});
  }
  
  /** Abre un snackbar con mensaje de error */
  openSnackbarError(message:string){
    this.openSnackbar(message, "⚠️");
  }

  /** Abre un snackbar con mensaje de éxito */
  openSnackbarSuccess(message:string){
    this.openSnackbar(message,"🎉");
  }

}
