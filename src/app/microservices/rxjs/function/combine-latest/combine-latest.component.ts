import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {combineLatest, interval, map, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [
    CardComponent,
    ModalComponent
  ],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent implements OnInit, OnDestroy {
  contador: number = 0;
  backgroundColor: string = 'white';
  private destroy$: Subject<void> = new Subject<void>();
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('combineLatest').subscribe();
    // Observable del contador que emite valores cada segundo
    const contador$ = interval(1000);

    // Observable de colores que emite colores cada 3 segundos
    const colores$ = interval(3000).pipe(
      takeUntil(this.destroy$),
      // Emite colores aleatorios
      map(() => this.getRandomColor())
    );

    // Combinar los dos observables y actualizar el color de fondo y el contador
    combineLatest([contador$, colores$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([contador, color]) => {
        this.contador = contador;
        this.backgroundColor = color;
      });
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Función para generar colores aleatorios en formato hexadecimal
  private getRandomColor(): string {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
  }
}
