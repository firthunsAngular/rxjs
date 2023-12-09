import {Component, OnInit} from '@angular/core';
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {defaultIfEmpty} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-default-empty',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    CardComponent
  ],
  templateUrl: './default-empty.component.html',
  styleUrl: './default-empty.component.css'
})
export class DefaultEmptyComponent implements OnInit{
  data: any[] = [];
  dataAvailable = false;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('defaultEmpty').subscribe();
  }

  ngOnInit(): void {
    this.dataservice.getDataDefaultEmpty()
      .pipe(
        defaultIfEmpty([]) // Si el observable está vacío, emite un array vacío
      )
      .subscribe((result) => {
        // Verifica si hay datos recibidos
        if (result.length > 0) {
          this.data = result; // Asigna los datos para mostrar en el template
          this.dataAvailable = true; // Establece la bandera para mostrar los datos
        }
      });
  }

}
