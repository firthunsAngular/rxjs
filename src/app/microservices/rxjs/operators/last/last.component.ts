import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";

import {HttpClient} from "@angular/common/http";
import {last, Observable} from "rxjs";

@Component({
  selector: 'app-last',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent

    ],
  templateUrl: './last.component.html',
  styleUrl: './last.component.css'
})
export class LastComponent  implements OnInit, OnDestroy {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  lastPost: any;
  constructor(protected dataservice: DataServiceService,
              private http: HttpClient) {
    this.dataservice.getInfoByTag('last').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getLastData(): void {
    this.getPosts()
      .pipe(last())
      .subscribe((data: any[]) => {
        this.lastPost = data[data.length - 1];
      });
  }
}
