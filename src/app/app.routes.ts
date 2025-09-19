import { Routes } from '@angular/router';
import { onlyGuestGuard } from './guards/only-guest.guard';
import { onlyUserGuard } from './guards/only-user.guard';

/** Lista de rutas que nuestra aplicación conoce */
export const routes: Routes = [{
    path: "login",
    loadComponent: ()=> import("./pages/login/login.component").then(c => c.LoginComponent),
    canActivate: [onlyGuestGuard],
    title: "Agenda de contactos | Iniciar sesión"
  },
  {
    path: "register",
    loadComponent: ()=> import("./pages/register/register.component").then(c => c.RegisterComponent),
    canActivate: [onlyGuestGuard],
    title: "Agenda de contactos | Registarse"
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    loadComponent: ()=> import("./layouts/logged/logged.component").then(c => c.LoggedComponent),
    canActivate: [onlyUserGuard],
    children: [
      {
        path: "contacts",
        loadComponent: ()=> import("./pages/contacts/contacts.component").then(c => c.ContactsComponent),
        title: "Agenda de contactos"
      },
      {
        path: "contacts/new",
        loadComponent: ()=> import("./components/dialogs/contact-new-edit/contact-new-edit.component").then(c => c.ContactNewEditComponent),
        title: "Agenda de contactos | Agregar contacto"
      },
      {
        path: "contacts/:id",
        loadComponent: ()=> import("./pages/contact-info/contact-info.component").then(c => c.ContactInfoComponent),
        title: "Agenda de contactos | Detalle de contacto"
      },
      {
        path: "contacts/:id/edit",
        loadComponent: ()=> import("./components/dialogs/contact-new-edit/contact-new-edit.component").then(c => c.ContactNewEditComponent),
        title: "Agenda de contactos | Editar contacto"
      },{
        path: "groups/:id",
        loadComponent: ()=> import("./pages/group-details/group-details.component").then(c => c.GroupDetailsComponent),
        title: "Agenda de contactos | Detalle de grupo"
      },
    ]
  },
];
