import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {Comment} from "@angular/compiler";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-take',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './take.component.html',
  styleUrl: './take.component.css'
})
export class TakeComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('take').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
}
