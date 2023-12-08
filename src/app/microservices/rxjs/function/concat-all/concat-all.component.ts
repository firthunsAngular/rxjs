import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";

@Component({
  selector: 'app-concat-all',
  standalone: true,
    imports: [
        CardComponent,
        ModalComponent
    ],
  templateUrl: './concat-all.component.html',
  styleUrl: './concat-all.component.css'
})
export class ConcatAllComponent implements OnInit{

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('concatAll').subscribe();
  }

  ngOnInit(): void {
  }
}
