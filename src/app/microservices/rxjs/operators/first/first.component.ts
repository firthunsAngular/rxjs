import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {first, from} from "rxjs";

@Component({
  selector: 'app-first',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit, OnDestroy {
  numeros = [1, 3, 5, 2, 4, 6, 7, 8, 9];
  primerNumero: number | undefined;

  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('first').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  mostrarPrimerNumero() {
    const numerosObservable = from(this.numeros);
    numerosObservable.pipe(first(num => num % 2 === 0)).subscribe(
      {
       next: (numero) => {
      this.primerNumero = numero;
    },
   error: (error) => {
      console.error('Hubo un error:', error);
    }
      }
    );
  }
}
