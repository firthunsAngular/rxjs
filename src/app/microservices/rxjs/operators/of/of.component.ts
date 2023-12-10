import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {filter, fromEvent, interval, map, Subscription} from "rxjs";

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './of.component.html',
  styleUrl: './of.component.css'
})
export class OfComponent  implements OnInit, OnDestroy {

  result: number | undefined;
  numbers: number[] = [];

  numbers2: number[] = [];
  mouseMoveSubscription: Subscription | undefined;

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('of').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void {

    this.unsubscribeMouseMove(); // Nos aseguramos de desuscribirnos cuando el componente se destruye
  }

  startProcess() {
    interval(1000)
      .pipe(
        map((value) => value * 2) // Utilizamos el operador map para multiplicar el valor por 2
      )
      .subscribe((value) => {
        this.result = value; // Actualizamos el valor en cada iteración
      });
  }

  startProcess2() {
    this.unsubscribeMouseMove(); // Nos aseguramos de desuscribirnos antes de suscribirnos nuevamente

    this.mouseMoveSubscription = fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        filter((event: MouseEvent) => event.clientY > window.innerHeight / 2)
      )
      .subscribe(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        this.numbers2.push(randomNumber);
      });
  }
  clearNumbers() {
    this.numbers2 = [];
  }

  private unsubscribeMouseMove() {
    if (this.mouseMoveSubscription) {
      this.mouseMoveSubscription.unsubscribe();
      this.mouseMoveSubscription = undefined; // Limpiamos la suscripción para evitar referencias antiguas
    }
  }
}
