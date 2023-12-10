import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {BehaviorSubject} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [
    CardComponent,
    ModalComponent,
    AsyncPipe
  ],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent  implements OnInit, OnDestroy {

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('behaviorSubject').subscribe();



  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  contador$ = new BehaviorSubject<number>(5);
  mensaje$ = new BehaviorSubject<string>('Mensaje inicial');


  increment() {
    this.contador$.next(this.contador$.value + 1);
  }

  cambiarMensaje() {
    this.mensaje$.next('Nuevo mensaje');
  }
}
