import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {CommonModule} from "@angular/common";
import {delayWhen, interval, take} from "rxjs";

@Component({
  selector: 'app-delay-when',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './delay-when.component.html',
  styleUrl: './delay-when.component.css'
})
export class DelayWhenComponent  implements OnInit{
  dataLoaded = false;
  data: any;


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('delayWhen').subscribe();
  }

  ngOnInit() {
    // Llamada al servicio para obtener datos con retraso
    const trigger = interval(5000).pipe(take(1));

    trigger.pipe(
      delayWhen(() => this.dataservice.fetchDatadelayWhen())
    ).subscribe((result) => {
      this.data = result;
      this.dataLoaded = true;
    });
  }
}
