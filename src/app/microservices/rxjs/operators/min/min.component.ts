import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {BehaviorSubject, from, interval, min, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-min',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './min.component.html',
  styleUrl: './min.component.css'
})
export class MinComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('min').subscribe();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {


  }

  numbers = [8, 3, 5, 1, 9, 2, -7, 4, 6]; // Tu array de números

  minValue: number | null = null;

  maxValue: number | undefined;

  findMin() {
    from(this.numbers)
      .pipe(min())
      .subscribe((minValue) => {
        this.minValue = minValue;
      });
  }
  findMax() {
    // Generar un array de números aleatorios entre 1 y 100
    this.numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

    const numbers$ = new BehaviorSubject<number[]>(this.numbers);

    numbers$.pipe().subscribe({
      next: (nums: number[]) => {
        this.maxValue = Math.max(...nums);
      }
    });
  }
}
