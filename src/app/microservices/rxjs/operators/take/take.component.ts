import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {Comment} from "@angular/compiler";
import {CommonModule} from "@angular/common";
import {interval, Observable, take} from "rxjs";

@Component({
  selector: 'app-take',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './take.component.html',
  styleUrl: './take.component.css'
})
export class TakeComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('take').subscribe();

  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
  values$: Observable<number> = interval(1000); // Emite un valor cada segundo

  takenValues: number[] = [];

  takeValues(count: number) {
    this.values$
      .pipe(
        take(count) // Toma 'count' valores del flujo observable
      )
      .subscribe(
        value => {
          this.takenValues.push(value);
        },
        err => console.error(err),
        () => console.log('Se han tomado los valores')
      );
  }
}
