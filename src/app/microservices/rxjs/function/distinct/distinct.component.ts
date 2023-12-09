import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {CommonModule} from "@angular/common";
import {DataServiceService} from "../services/data-service.service";


@Component({
  selector: 'app-distinct',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,
  ],
  templateUrl: './distinct.component.html',
  styleUrl: './distinct.component.css'
})
export class DistinctComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('distinct').subscribe();

  }

  ngOnInit(): void {

  }



  ngOnDestroy(): void {

  }
}
