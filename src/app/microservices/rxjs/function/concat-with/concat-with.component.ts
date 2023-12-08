import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";

@Component({
  selector: 'app-concat-with',
  standalone: true,
  imports: [
    AsyncPipe,
    CardComponent,
    ModalComponent,
    NgForOf
  ],
  templateUrl: './concat-with.component.html',
  styleUrl: './concat-with.component.css'
})
export class ConcatWithComponent implements OnInit{

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('concatWith').subscribe();
  }

  ngOnInit(): void {
  }
}
