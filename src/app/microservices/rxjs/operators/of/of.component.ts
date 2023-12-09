import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-of',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './of.component.html',
  styleUrl: './of.component.css'
})
export class OfComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('of').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
}
