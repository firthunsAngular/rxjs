import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {exhaustAll, tap} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-exhaust-all',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './exhaust-all.component.html',
  styleUrl: './exhaust-all.component.css'
})
export class ExhaustAllComponent   implements OnInit, OnDestroy {
  data: string | undefined;


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('exhaustAll').subscribe();

  }

  ngOnInit(): void {

  }

 ngOnDestroy(): void {

  }

  requestData() {
    const firstRequest = this.dataservice.getObservable2exhaustAll(1);
    const secondRequest = this.dataservice.getObservable2exhaustAll(2);

    firstRequest.pipe(
      tap((data) => {
        this.data = data;
      }),
      exhaustAll()
    ).subscribe();
    // Uncomment the below lines to see the effect of exhaustAll
    secondRequest.pipe(
      tap((data) => {
        this.data = data;
      }),
      exhaustAll()
    ).subscribe();
  }

}
