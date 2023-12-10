import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {catchError, Observable, retry, Subject, takeUntil, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-retry',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './retry.component.html',
  styleUrl: './retry.component.css'
})
export class RetryComponent  implements OnInit, OnDestroy {

  data: any;
  errorMessage: string | undefined;
  destroyed$ = new Subject<void>();


  constructor(protected dataservice: DataServiceService,
              private http: HttpClient) {
    this.dataservice.getInfoByTag('retry').subscribe();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }


  fetchData() {
    this.fetchDataService()
      .pipe(
        retry(3),
        takeUntil(this.destroyed$)
      )
      .subscribe(
        (response: any) => {
          this.data = response;
          this.errorMessage = undefined;
        },
        (error: any) => {
          this.errorMessage = error;
          this.data = undefined;
        }
      );
  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  fetchDataService(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        return throwError('Error al obtener los datos');
      })
    );
  }
}
