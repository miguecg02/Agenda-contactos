import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { GroupsService } from '../../services/groups.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { ContactNewEditComponent } from '../dialogs/contact-new-edit/contact-new-edit.component';
import { ContactsService } from '../../services/contacts.service';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-contact-summary',
  imports: [RouterModule,MatIconModule,MatChipsModule,MatButtonModule,MatTooltipModule],
  templateUrl: './contact-summary.component.html',
  styleUrl: './contact-summary.component.scss'
})
export class ContactSummaryComponent {
  contact = input.required<Contact>();
  groupsService = inject(GroupsService);
  router = inject(Router);
  readonly dialog = inject(MatDialog);
  contactService = inject(ContactsService);

  showEditDialog(e:Event){
    e.stopPropagation(); // Permite que el click que hice no afecte otros elementos clickeables que estén en la misma posición que este elemento.
    this.dialog.open(ContactNewEditComponent,{data:this.contact()})
  }

  showDeleteDialog(e:Event){
    e.stopPropagation(); // Permite que el click que hice no afecte otros elementos clickeables que estén en la misma posición que este elemento.
    this.dialog.open(DeleteComponent,{data:{resource:"contacto"}}).afterClosed().subscribe(res => {
      if(res) this.contactService.deleteContact(this.contact().id);
    })
  }
}
