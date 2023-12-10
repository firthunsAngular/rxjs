import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {interval, sample} from "rxjs";

@Component({
  selector: 'app-sample',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('sample').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  showValue: number=0;

  start() {
    const source$ = interval(1000); // Emits a value every second
    const trigger$ = interval(3000); // Emits a value every three seconds

    source$.pipe(sample(trigger$)).subscribe((value) => {
      this.showValue = value;
    });
  }
}
