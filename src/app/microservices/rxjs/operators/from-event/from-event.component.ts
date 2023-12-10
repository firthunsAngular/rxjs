import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {DataServiceService} from "../../function/services/data-service.service";
import {CommonModule} from "@angular/common";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-from-event',
  standalone: true,
    imports: [
      CommonModule,
        CardComponent,
        ModalComponent
    ],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent implements OnInit,AfterViewInit , OnDestroy {

  @ViewChild('btn') button!: ElementRef;
  showMessage = false;
  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('fromEvent').subscribe();
  }

  ngOnInit(): void {  }

  ngOnDestroy(): void { }

  ngAfterViewInit() {
    // Escucha el evento click del botón usando fromEvent
    fromEvent(this.button.nativeElement, 'click').subscribe(() => {
      // Cuando se hace clic en el botón, muestra el mensaje
      this.showMessage = true;

      // Después de 2 segundos, oculta el mensaje
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    });
  }
}
