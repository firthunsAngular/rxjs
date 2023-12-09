import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-timeout',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './timeout.component.html',
  styleUrl: './timeout.component.css'
})
export class TimeoutComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('timeout').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
}
