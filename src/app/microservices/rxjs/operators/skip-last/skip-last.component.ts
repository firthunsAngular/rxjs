import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {BehaviorSubject, Observable, skipLast} from "rxjs";

@Component({
  selector: 'app-skip-last',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './skip-last.component.html',
  styleUrl: './skip-last.component.css'
})
export class SkipLastComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('skipLast').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  private itemsSubject = new BehaviorSubject<string[]>([
    'Elemento 1',
    'Elemento 2',
    'Elemento 3',
    'Elemento 4',
    'Elemento 5',
  ]);

  displayedItems$: Observable<string[]> = this.itemsSubject.asObservable();

  skipLastElements() {
    this.displayedItems$ = this.displayedItems$.pipe(
      skipLast(1) // Omitir el último elemento
    );
  }
}
