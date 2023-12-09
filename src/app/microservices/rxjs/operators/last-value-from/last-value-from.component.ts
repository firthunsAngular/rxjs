import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-last-value-from',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './last-value-from.component.html',
  styleUrl: './last-value-from.component.css'
})
export class LastValueFromComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('lastValueFrom').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
}
