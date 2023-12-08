import {AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import {
  audit,

  interval, Observable, Subject, Subscription, takeUntil, tap,

} from "rxjs";

import {CommonModule} from "@angular/common";
import {ModalComponent} from "../../components/modal/modal.component";
import {RxjsStore} from "../../rxjs.store";
import {DataServiceService} from "../services/data-service.service";


@Component({
  selector: 'app-audit',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,

  ],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.css',
  providers: [
    RxjsStore
  ]
})
export class AuditComponent implements OnInit, OnDestroy {

  protected readonly store = inject(RxjsStore);
  showboolean = false;
  // Ejemplo 1: Auditoría de clics en un botón
  lastValue: number | undefined;
  showValue = false;
  message = '';
  private clickSubject = new Subject<void>();
  private unsubscribe$ = new Subject<void>();

  // Ejemplo 2: Auditoría de entrada en un campo de texto
  valores: number[] = [];

  // Ejemplo 3: Auditoría de emisiones en un intervalo
  @ViewChild('exampleModal') modal: ElementRef | undefined;

  infoRxjs: string = '';


  constructor(protected dataservice: DataServiceService) {

  }

  ngOnInit(): void {
  this.dataservice.getInfoByTag('audit').subscribe();
    this.ejemplo1();
    this.ejemplo2();
  }

  ejemplo1() {
    // Creamos un observable que emite valores cada 300ms
    const source = interval(300);

    source.pipe(
      audit(() => this.clickSubject),
      tap(value => {
        this.lastValue = value;
        this.showValue = true;
      }),
      takeUntil(this.unsubscribe$)
    ).subscribe();
  }

  emitValues(): void {
    this.clickSubject.next(); // Emite un evento cuando se hace clic en el botón
    this.message = 'Button clicked!';
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }

  ejemplo2() {
    // Suponiendo que tienes un servicio que emite valores con un intervalo de 500ms
    const valoresObservable: Observable<number> = interval(500);

    valoresObservable.pipe(
      // Aplicando el operador audit con una ventana de tiempo de 1500ms
      audit(() => interval(1500))
    ).subscribe((valor) => {
      this.valores.push(valor); // Agregar el valor al arreglo para mostrar en el template
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete(); // Desuscribirse para evitar fugas de memoria
  }





}
