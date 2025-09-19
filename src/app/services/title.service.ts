import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  /** Señal que guarda modifica el título del header de la aplicación */
  title = signal("Agenda");
}
