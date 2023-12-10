import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {catchError, delay, Observable, of, throwError, timeout} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-timeout',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './timeout.component.html',
  styleUrl: './timeout.component.css'
})
export class TimeoutComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService,
              private http: HttpClient) {
    this.dataservice.getInfoByTag('timeout').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  loading = false;
  data: any;
  error: string | undefined;

  fetchData(): void {
    this.loading = true;
    this.error = undefined;
    this.fetchDataWithTimeout().subscribe(
      (result) => {
        this.data = result;
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.error = error;
        this.loading = false;
      }
    );
  }

  fetchDataService(): Observable<string> {
    return of('Datos cargados').pipe(delay(3000));
  }
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  fetchDataWithTimeout(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      timeout(5000), // Simular un timeout de 5 segundos
      catchError((error) => {
        console.error('Error:', error);
        return throwError(()=>{
          return 'Se ha producido un error.'+ error
        });
      })
    );
  }
}
