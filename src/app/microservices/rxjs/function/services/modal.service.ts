import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalOpenSubject: Subject<string> = new Subject<string>();

  constructor() { }

// Método para notificar cuando se abre un modal
  openModal(modalName: string) {
    // Lógica para abrir el modal...

    // Emite el nombre del modal abierto
    this.modalOpenSubject.next(modalName);
  }

  // Método para obtener un Observable de eventos de apertura del modal
  onModalOpen(): Observable<string> {
    return this.modalOpenSubject.asObservable();
  }
}
