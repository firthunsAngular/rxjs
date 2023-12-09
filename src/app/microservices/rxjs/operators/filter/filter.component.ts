import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {BehaviorSubject, filter, Observable, of} from "rxjs";

@Component({
  selector: 'app-filter',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit, OnDestroy {

  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ];

  filteredItems: Item[]=[];

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('filter').subscribe();

  }

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  ngOnDestroy(): void { }

  filterItems() {
    this.filteredItems = this.items.filter((item: Item) => item.id > 2);
  }
}
interface Item {
  id: number;
  name: string;
}
