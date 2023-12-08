import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {combineLatest, combineLatestAll, interval, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-combine-latest-all',
  standalone: true,
    imports: [
        CardComponent,
        ModalComponent
    ],
  templateUrl: './combine-latest-all.component.html',
  styleUrl: './combine-latest-all.component.css'
})
export class CombineLatestAllComponent  implements OnInit, OnDestroy{
  posX$: Observable<number> = new Observable<number>();
  posY$: Observable<number> = new Observable<number>();
  posX: number = 0;
  posY: number = 0;
  combinedSubscription: any;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('combineLatestAll').subscribe();
  }

  ngOnInit(): void {
    // Simulating position observables
    this.posX$ = interval(1000).pipe(map(() => Math.random() * 100));
    this.posY$ = interval(1500).pipe(map(() => Math.random() * 100));

    // Combining observables using combineLatest
    this.combinedSubscription = combineLatest([this.posX$, this.posY$]).subscribe(
      ([posX, posY]) => {
        this.posX = posX;
        this.posY = posY;
      }
    );
  }

  ngOnDestroy(): void {
    this.combinedSubscription.unsubscribe();
  }
}
