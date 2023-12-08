import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {combineLatest, combineLatestWith, interval, map} from "rxjs";

@Component({
  selector: 'app-combine-latest-with',
  standalone: true,
  imports: [
    CardComponent,
    ModalComponent
  ],
  templateUrl: './combine-latest-with.component.html',
  styleUrl: './combine-latest-with.component.css'
})
export class CombineLatestWithComponent  implements OnInit {
  valorCombineLatest: any;
  constructor(protected dataservice: DataServiceService) {}
  ngOnInit() {
    const observable1$ = interval(1000); // Emite un valor cada segundo
    const observable2$ = interval(2000); // Emite un valor cada dos segundos

    observable1$.pipe(
      combineLatestWith(observable2$),
      map(([valor1, valor2]) => `Valor 1: ${valor1}, Valor 2: ${valor2}`)
    ).subscribe(resultado => {
      this.valorCombineLatest = resultado; // Asigna el resultado al valor a mostrar en el template
    });
  }

}
