import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {map, Observable, race, timer} from "rxjs";

@Component({
  selector: 'app-race',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent  implements OnInit, OnDestroy {

  result: string= '';
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('race').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  startRace() {
    const observable1$: Observable<string> = timer(1000).pipe(map(() => 'Ganador: Observable 1'));
    const observable2$: Observable<string> = timer(2000).pipe(map(() => 'Ganador: Observable 2'));

    race(observable1$, observable2$).subscribe((winner) => {
      this.result = winner;
    });
  }
}
