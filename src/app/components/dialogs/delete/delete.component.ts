import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteComponent>);
  readonly data = inject<{resource:string}>(MAT_DIALOG_DATA);
}
