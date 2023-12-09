import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {CommonModule} from "@angular/common";
import {exhaustMap, Subject} from "rxjs";

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.css'
})
export class ExhaustMapComponent  implements OnInit, OnDestroy {

  response: string | undefined;
  private clickSubject = new Subject<number>();
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('exhaustMap').subscribe();

    this.clickSubject
      .pipe(
        exhaustMap((id) => this.dataservice.getDataexhaustMap(id))
      )
      .subscribe((data) => {
        this.response = data;
      });
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  onClick() {
    // Simular múltiples clics que generan solicitudes
    this.clickSubject.next(Math.floor(Math.random() * 100));
  }
}
