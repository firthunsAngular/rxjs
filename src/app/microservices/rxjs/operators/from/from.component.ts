import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {asyncScheduler, from, Observable, ObservedValueOf, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-from',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent  implements OnInit, OnDestroy {
  array = [10, 20, 30];
  result$: any;

  constructor(protected dataservice: DataServiceService,
              private http: HttpClient) {
    this.dataservice.getInfoByTag('from').subscribe();
  }

  ngOnInit(): void {
    const result = from(this.array);
    result.subscribe((value) => {
      console.log(value)
      this.result$.unshift(value);
    })
  }

  ngOnDestroy(): void { }



}
