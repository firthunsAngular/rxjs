import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../services/data-service.service";
import {elementAt, from} from "rxjs";

@Component({
  selector: 'app-element-at',
  standalone: true,
    imports: [
        CardComponent,
        ModalComponent
    ],
  templateUrl: './element-at.component.html',
  styleUrl: './element-at.component.css'
})
export class ElementAtComponent implements OnInit {
  elemento: string = '';
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('elementAt').subscribe();
  }

  ngOnInit(): void {
    this.dataservice.getDataelementAt().subscribe(data => {
      from(data)
        .pipe(elementAt(1)) // Obtener el elemento en la posición 2 (el índice es 0-based)
        .subscribe(result => {
          this.elemento = result; // Asignar el elemento obtenido para mostrarlo en el template
        });
    });
  }
}
