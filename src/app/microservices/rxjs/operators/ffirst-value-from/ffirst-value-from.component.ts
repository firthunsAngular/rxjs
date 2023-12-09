import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {firstValueFrom, interval, take} from "rxjs";

@Component({
  selector: 'app-ffirst-value-from',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './ffirst-value-from.component.html',
  styleUrl: './ffirst-value-from.component.css'
})
export class FfirstValueFromComponent implements OnInit, OnDestroy {

  valorMostrado: number | undefined;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('firstValueFrom').subscribe();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void { }
// Supongamos que tienes un observable que emite valores cada segundo
  observableEjemplo$ = interval(1000).pipe(take(5)); // Emite 0, 1, 2, 3, 4

  async obtenerPrimerValor() {
    this.valorMostrado = await firstValueFrom(this.observableEjemplo$);
  }
}
