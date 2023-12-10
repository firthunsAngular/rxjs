import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {map, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent  implements OnInit, OnDestroy {

  result: number | undefined;

  private numberSubject = new Subject<number>();
  number$: Observable<number> = this.numberSubject.asObservable();
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('pipe').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  applyMap() {
    // Simulación de un número que se emite al presionar el botón
    const numberToTransform = 5;

    this.number$
      .pipe(
        map((num) => num * 2) // El operador map multiplica el número por 2
      )
      .subscribe((result) => {
        this.result = result;
      });

    this.numberSubject.next(numberToTransform); // Emite el número al observable
  }
}
