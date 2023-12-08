import { Injectable } from '@angular/core';
import {delay, Observable, of, Subject} from "rxjs";

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

  getDataOne(): Observable<string> {
    return of('Datos de la fuente uno').pipe(delay(2000));
  }

  getDataTwo(): Observable<string> {
    return of('Datos de la fuente dos').pipe(delay(2000));
  }
}
