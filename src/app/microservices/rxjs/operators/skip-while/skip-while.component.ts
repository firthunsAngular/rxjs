import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {interval, skipWhile, Subscription, take} from "rxjs";

@Component({
  selector: 'app-skip-while',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './skip-while.component.html',
  styleUrl: './skip-while.component.css'
})
export class SkipWhileComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('skipWhile').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  numbersToShow: number[] = [];
  numbersArray = [2, 3, 6, 8, 4, 9, 10];
  subscription: Subscription | undefined;

  mostrarNumeros() {
    this.subscription = interval(1000)
      .pipe(
        take(this.numbersArray.length), // Limitar el número de emisiones al tamaño del array
        skipWhile((_, index) => this.numbersArray[index] < 5) // Omitir números menores a 5
      )
      .subscribe((index) => {
        this.numbersToShow.push(this.numbersArray[index]);
      });
  }

  detenerMostrarNumeros() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
