import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataServiceService} from "../../function/services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {map, Subject} from "rxjs";

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [
    CardComponent,
    ModalComponent
  ],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('observable').subscribe();



  }
  ngOnDestroy(): void {
  }

  texto = 'Texto original';
  private cambioTextoSubject = new Subject<void>();

  cambiarTexto() {
    this.cambioTextoSubject.next();
  }

  ngOnInit() {
    this.cambioTextoSubject
      .pipe(
        map(() => 'Texto cambiado')
      )
      .subscribe((nuevoTexto) => {
        this.texto = nuevoTexto;
      });
  }

}
