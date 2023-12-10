import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {ReplaySubject} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.css'
})
export class ReplaySubjectComponent   implements OnInit, OnDestroy {

  private replaySubject = new ReplaySubject<string>(3); // Tamaño del buffer de reproducción

  displayedData: string[] = [];

  emitData() {
    // Emite datos al ReplaySubject
    this.replaySubject.next('Dato 1');
    this.replaySubject.next('Dato 2');
    this.replaySubject.next('Dato 3');
  }


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('replaySubject').subscribe();
    // Suscripción al ReplaySubject para mostrar datos en el template
    this.replaySubject.subscribe(data => {
      this.displayedData.push(data);
    });



  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
