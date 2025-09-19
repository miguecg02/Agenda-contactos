import { Component, effect, inject, input, resource, ResourceRef } from '@angular/core';
import { Group } from '../../interfaces/group';
import { GroupsService } from '../../services/groups.service';
import { SnackBarService } from '../../services/snack-bar.service';

import { ContactsTableComponent } from "../../components/contacts-table/contacts-table.component";
import { TitleService } from '../../services/title.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Dialog } from '@angular/cdk/dialog';
import { GroupNewEditComponent } from '../../components/dialogs/group-new-edit/group-new-edit.component';
import { DeleteComponent } from '../../components/dialogs/delete/delete.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-details',
  imports: [ContactsTableComponent, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './group-details.component.html',
  styleUrl: './group-details.component.scss'
})
export class GroupDetailsComponent{

  id = input.required<number>()
  snackBarService = inject(SnackBarService)
  groupsService = inject(GroupsService);
  titleService = inject(TitleService);
  dialog = inject(MatDialog);
  router = inject(Router);

  /** Datos del grupo actual */
  group:ResourceRef<Group | undefined> = resource({
    params: ()=>  ({groupId: this.id()}),
    loader: async({params})=> {
      const res = await this.groupsService.getById(params.groupId)
      if(res.success && res.data) return res.data;
      this.snackBarService.openSnackbarError(res.message);
      return
    },
  })

  /** Cambia el título cuando cambian los datos del grupo */
  changeTitle = effect(()=> {
    if(this.group.hasValue()) this.titleService.title.set(this.group.value()!.name)
  })

  /** Abre modal de editar grupo */
  openEditDialog(){
      this.dialog.open(GroupNewEditComponent,{data:this.group.value()});
    }
    
  /** Abre modal de eliminar grupo */
  openDeleteDialog(){
    this.dialog.open(DeleteComponent,{data:{resource:"grupo"}}).afterClosed().subscribe(res => {
      if(res) {
        this.groupsService.deleteGroup(this.group.value()!.id);
        this.router.navigate(["/"])
      }
    })
  }
}
