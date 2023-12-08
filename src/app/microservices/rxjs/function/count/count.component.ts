import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {map} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent  implements OnInit{
  numbers: number[] = [];
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('count').subscribe();
  }


  ngOnInit(): void {
    this.dataservice.getNumbers()
      .pipe(
        map(nums => nums.map(num => num * 2)) // Multiplicamos cada número por 2
      )
      .subscribe(mappedNumbers => {
        this.numbers = mappedNumbers;
      });
  }
}
