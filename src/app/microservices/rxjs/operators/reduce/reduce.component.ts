import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-reduce',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './reduce.component.html',
  styleUrl: './reduce.component.css'
})
export class ReduceComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('reduce').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
}
