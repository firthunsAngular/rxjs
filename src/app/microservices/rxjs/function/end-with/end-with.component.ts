import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {CommonModule} from "@angular/common";
import {endWith, Observable, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-end-with',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './end-with.component.html',
  styleUrl: './end-with.component.css'
})
export class EndWithComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('endWith').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
}
