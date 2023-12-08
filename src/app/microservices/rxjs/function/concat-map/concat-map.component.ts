import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {concatMap, delay, from, Observable, of, toArray} from "rxjs";
import {AsyncPipe, CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.css'
})
export class ConcatMapComponent  implements OnInit{
  userInformation$: Observable<any>;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('concatMap').subscribe();
    this.userInformation$ = this.getUsersInformation();
  }

  ngOnInit(): void {

  }
  getUsersInformation(): Observable<any[]> {
    const userIds = [1, 2, 3]; // IDs de usuarios a solicitar

    return from(userIds).pipe(
      concatMap(userId => this.dataservice.getInfo(userId)),
      toArray()
    );
  }
}
