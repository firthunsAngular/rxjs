import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {from, reduce} from "rxjs";

@Component({
  selector: 'app-reduce',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './reduce.component.html',
  styleUrl: './reduce.component.css'
})
export class ReduceComponent  implements OnInit, OnDestroy {


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('reduce').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  resultado: any;

  startReduce() {
    // Suponiendo que tienes una lista de números como datos de ejemplo
    const numbers = from([1, 2, 3, 4, 5]);

    numbers.pipe(
      reduce((acc, curr) => acc + curr, 0) // La función suma los números
    ).subscribe({
    next: (result) => {
      this.resultado = result; // Asigna el resultado para mostrarlo en el template
    },
    error: (error) => {
      console.error('Error:', error);
    }
    } );
  }
}
