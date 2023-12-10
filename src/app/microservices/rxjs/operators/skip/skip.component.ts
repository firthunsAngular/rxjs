import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {interval, skip} from "rxjs";

@Component({
  selector: 'app-skip',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './skip.component.html',
  styleUrl: './skip.component.css'
})
export class SkipComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('skip').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }
  skippedValues: number[] = [];

  startSkipping() {
    const source = interval(1000); // Emite un valor cada segundo
    const skipCount = 3; // Salta los primeros 3 valores

    source.pipe(
      skip(skipCount) // Salta los primeros valores según el skipCount
    ).subscribe(value => {
      this.skippedValues.push(value); // Añade los valores saltados al array
    });
  }
}
