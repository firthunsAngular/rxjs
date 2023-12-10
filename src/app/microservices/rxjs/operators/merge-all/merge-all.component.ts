import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {map, merge, mergeAll, mergeMap, Observable} from "rxjs";

@Component({
  selector: 'app-merge-all',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './merge-all.component.html',
  styleUrl: './merge-all.component.css'
})
export class MergeAllComponent  implements OnInit, OnDestroy {

  resultados: any[]=[];

  constructor(protected dataservice: DataServiceService,
              private http: HttpClient) {
    this.dataservice.getInfoByTag('mergeAll').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  getData() {
    const request1$ = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    const request2$ = this.http.get('https://jsonplaceholder.typicode.com/posts/2');

    merge(request1$, request2$).pipe(
      mergeMap((data: any) => {
        console.log('data', data);
        if (!this.resultados) {
          this.resultados = [];
        }
        this.resultados.push(data.title); // Suponiendo que el resultado tiene una propiedad 'title'
        return this.resultados;
      })
    ).subscribe({
    next: () => {},
    error: error => {
      console.error('Error al obtener datos', error);
    }
      }

    );
  }
}
