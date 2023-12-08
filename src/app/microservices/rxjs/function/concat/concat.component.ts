import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {concat, of} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-concat',
  standalone: true,
  imports: [
    CardComponent,
    ModalComponent,
    NgForOf
  ],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.css'
})
export class ConcatComponent implements OnInit{
  combinedData: string[] = [];
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('concat').subscribe();
  }

  ngOnInit(): void {
    const dataSourceOne = this.dataservice.getDataOne();
    const dataSourceTwo = this.dataservice.getDataTwo();

    // Utilizando el operador concat de RxJS
    concat(dataSourceOne, dataSourceTwo).subscribe((data) => {
      this.combinedData.push(data);
    });
  }
}
