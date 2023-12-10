import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {interval, map, mapTo, merge, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-merge',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.css'
})
export class MergeComponent  implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  result: string[] = [];
  isMerging = false;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('merge').subscribe();

  }

  ngOnInit(): void {  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



  startMerge() {
    this.isMerging = true;

    const observable1$ = interval(1000).pipe(map(() => 'A'), takeUntil(this.destroy$));
    const observable2$ = interval(1500).pipe(map(() => 'B'), takeUntil(this.destroy$));

    const merged$ = merge(observable1$, observable2$);

    merged$.subscribe({
      next: value => {
        this.result.push(value);
      },
      complete: () => {
        this.isMerging = false;
      },
    });
  }
}
