import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {mergeMap, Observable} from "rxjs";

@Component({
  selector: 'app-merge-map',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.css'
})
export class MergeMapComponent  implements OnInit, OnDestroy {

  mergedData: any;


  constructor(protected dataservice: DataServiceService,
              private http: HttpClient) {
    this.dataservice.getInfoByTag('mergeMap').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
  getData() {
    const request1$: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    const request2$: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/comments/1');

    request1$
      .pipe(
        mergeMap((result1) =>
          request2$.pipe(
            mergeMap((result2) => {
              return new Observable((observer) => {
                this.mergedData = { result1, result2 };
                observer.next(this.mergedData);
                observer.complete();
              });
            })
          )
        )
      )
      .subscribe();
  }

}
