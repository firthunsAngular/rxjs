import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataServiceService} from "../../function/services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [
    CardComponent,
    ModalComponent
  ],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent   implements OnInit, OnDestroy {

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('subject').subscribe();



  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
