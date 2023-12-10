import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {delay, of, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-switch-map',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css'
})
export class SwitchMapComponent  implements OnInit, OnDestroy {

  data: any;
  private trigger$ = new Subject<number>();
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('switchMap').subscribe();

    this.trigger$
      .pipe(
        switchMap((id: number) => this.getData(id))
      )
      .subscribe((result) => {
        this.data = result;
      });
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  requestData() {
    const randomId = Math.floor(Math.random() * 10) + 1; // Simulando un ID aleatorio
    this.trigger$.next(randomId);
  }


  getData(id: number) {
    // Simulando una solicitud HTTP con delay
    return of(`Datos para el ID: ${id}`).pipe(delay(1000));
  }
}
