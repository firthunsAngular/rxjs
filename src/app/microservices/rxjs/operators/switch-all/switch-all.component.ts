import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {interval, map, Observable, of, switchAll, switchMap, timer} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-switch-all',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './switch-all.component.html',
  styleUrl: './switch-all.component.css'
})
export class SwitchAllComponent  implements OnInit, OnDestroy {
  result$: Observable<any> | undefined;

  constructor(protected dataservice: DataServiceService,
              private http: HttpClient) {
    this.dataservice.getInfoByTag('switchAll').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  getData() {
    // Crear un observable con los dos métodos de obtener datos
    const source$ = of( this.getData2(),this.getData1());

    // Aplicar switchAll para cambiar entre los flujos de datos
    this.result$ = source$.pipe(switchAll());
  }


  // Método para obtener datos del primer endpoint
  getData1(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/2');
  }

  // Método para obtener datos del segundo endpoint
  getData2(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
