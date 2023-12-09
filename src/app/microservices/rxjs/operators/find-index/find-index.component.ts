import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {findIndex, Observable, of} from "rxjs";

interface Item {
  id: number;
  name: string;
}
@Component({
  selector: 'app-find-index',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './find-index.component.html',
  styleUrl: './find-index.component.css'
})
export class FindIndexComponent  implements OnInit, OnDestroy {
  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  foundItem: Item | undefined;
  foundIndex: number | undefined;

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('findIndex').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  findItem(): void {
    const itemIdToFind = 2; // ID del elemento a buscar
    const source$: Observable<Item[]> = of(this.items);

    source$
      .pipe(
        findIndex((items: Item[]) =>
          items.some((item) => item.id === itemIdToFind)
        )
      )
      .subscribe((index: number) => {
        if (index !== -1) {
          this.foundIndex = index;
          this.foundItem = this.items[index];
        } else {
          this.foundIndex = undefined;
          this.foundItem = undefined;
        }
      });
  }
}
