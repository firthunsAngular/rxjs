import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-delay',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './delay.component.html',
  styleUrl: './delay.component.css'
})
export class DelayComponent  implements OnInit{
  data$!: Observable<string>;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('delay').subscribe();
    this.getDataWithDelay();
  }

  ngOnInit(): void {
  }
  getDataWithDelay(): void {
    this.data$ = this.dataservice.getDataDeal();
  }
}
