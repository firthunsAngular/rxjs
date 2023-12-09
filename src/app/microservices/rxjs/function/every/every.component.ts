import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {CommonModule} from "@angular/common";
import {map} from "rxjs";

@Component({
  selector: 'app-every',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './every.component.html',
  styleUrl: './every.component.css'
})
export class EveryComponent   implements OnInit, OnDestroy {
  allNumbersGreaterThanZero = false;

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('every').subscribe();

  }

  ngOnInit(): void {
    this.dataservice.getNumbersevery()
      .pipe(
        map(numbers => numbers.every(num => num > 2))
      )
      .subscribe(result => {
        this.allNumbersGreaterThanZero = result;
      });
  }





  ngOnDestroy(): void {

  }
}
