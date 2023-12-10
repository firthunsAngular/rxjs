import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {map, Observable, scan, startWith, Subject} from "rxjs";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit, OnDestroy {

  private incrementador = new Subject<void>();
  contador$: Observable<number>;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('map').subscribe();

    this.contador$ = this.incrementador.pipe(
      startWith(null), // Empezar con un valor inicial (null)
      scan((acc) => acc + 1, 0) // Acumular los incrementos
    );
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  increment() {
    this.incrementador.next();
  }
}
