import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {interval, lastValueFrom, } from "rxjs";


@Component({
  selector: 'app-last-value-from',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,

  ],
  templateUrl: './last-value-from.component.html',
  styleUrl: './last-value-from.component.css'
})
export class LastValueFromComponent  implements OnInit, OnDestroy {

  lastValue: number | undefined;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('lastValueFrom').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  async obtenerUltimoValor() {
    const observable = interval(1000); // Emite un valor cada segundo

    try {
      this.lastValue = await lastValueFrom(observable);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
