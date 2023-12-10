import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {from, groupBy, mergeMap, toArray} from "rxjs";



interface Person {
  name: string;
  age: number;
}
@Component({
  selector: 'app-group-by',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './group-by.component.html',
  styleUrl: './group-by.component.css'
})
export class GroupByComponent implements OnInit, OnDestroy {

  people: Person[] = [
    { name: 'Juan', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Pedro', age: 25 },
    { name: 'Luisa', age: 30 },

  ];

  groupedPeople: { key: number; items: Person[] }[] = [];



  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('groupBy').subscribe();


  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  groupByAge() {
    from(this.people)
      .pipe(
        groupBy((person: Person) => person.age),
        mergeMap((group) => group.pipe(toArray()))
      )
      .subscribe((grouped) => {
        this.groupedPeople = [];

        grouped.forEach((group) => {

          console.log(group)

        });
      });
  }

}
