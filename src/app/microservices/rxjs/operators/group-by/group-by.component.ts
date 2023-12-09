import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-group-by',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './group-by.component.html',
  styleUrl: './group-by.component.css'
})
export class GroupByComponent implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('groupBy').subscribe();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
