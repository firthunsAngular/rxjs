import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {find, from, Observable, of} from "rxjs";

@Component({
  selector: 'app-find',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './find.component.html',
  styleUrl: './find.component.css'
})
export class FindComponent  implements OnInit, OnDestroy {

  data$: Observable<number[]>;
  foundNumber: number | undefined;

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('find').subscribe();

    this.data$ = of([1, 2, 3, 4, 5]);
    this.foundNumber = undefined;

  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  findNumber(): void {
    this.data$
      .pipe(
        find((numArray: number[]) => numArray.includes(3)) // Encuentra el número 3 en el array
      )
      .subscribe((result: number[] | undefined) => {
        if (result !== undefined && result.length > 0) {
          this.foundNumber = result[0]; // Asigna el primer número encontrado a foundNumber
        } else {
          this.foundNumber = undefined;
        }
      });
  }
}
