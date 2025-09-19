import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  /** Lista que contiene los items que se están cargando */
  loadList = signal<string[]>([])

  /** Señal que muestra si algo está siendo cargado */
  loading = computed<boolean>(()=> this.loadList().length ? true : false)
  
  /** Agrega un item a la lista de carga */
  addLoad(tipoCarga:string){
    if(this.loadList().includes(tipoCarga)) return;
    this.loadList.set([...this.loadList(),tipoCarga]);
  }

  /** Elimina un ítem a la lista de carga */
  deleteLoad(tipoCarga:string){
    this.loadList.set(this.loadList().filter(item => item !== tipoCarga));
  }

}
