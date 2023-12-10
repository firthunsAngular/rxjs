import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {interval, skipUntil, Subject} from "rxjs";

@Component({
  selector: 'app-skip-until',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './skip-until.component.html',
  styleUrl: './skip-until.component.css'
})
export class SkipUntilComponent  implements OnInit, OnDestroy {

  numbersToShow: number[] = [];
  showNumbers: boolean = false;
  private trigger$ = new Subject<void>();
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('skipUntil').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  startGeneratingNumbers() {
    const numbersObservable = interval(1000);

    numbersObservable
      .pipe(skipUntil(this.trigger$))
      .subscribe((num) => {
        if (this.showNumbers) {
          this.numbersToShow.push(num);
        }
      });
  }


  triggerNumbers() {
    this.showNumbers = true;
    this.trigger$.next();
  }
}
