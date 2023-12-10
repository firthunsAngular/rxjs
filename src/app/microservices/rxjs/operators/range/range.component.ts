import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {delay, range, take, timeout} from "rxjs";



@Component({
  selector: 'app-range',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,

  ],
  templateUrl: './range.component.html',
  styleUrl: './range.component.css'
})
export class RangeComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('range').subscribe();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
  counter = 0;
  startCounter() {
    // Usando el operador `range` para generar un flujo de números del 1 al 10
    range(1, 10)
      .pipe(
        // Tomar los valores uno a uno del flujo
        take(10),
      )
      .subscribe((num) => {
        console.log(num)
        // Incrementar el contador con cada número emitido por el observable
        this.counter = num;

      });
  }

}
