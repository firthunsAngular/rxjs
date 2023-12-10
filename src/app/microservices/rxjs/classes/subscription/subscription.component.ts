import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataServiceService} from "../../function/services/data-service.service";
import {CardComponent} from "../../components/card/card.component";
import {ModalComponent} from "../../components/modal/modal.component";
import {fromEvent, map} from "rxjs";

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    CardComponent,
    ModalComponent
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent   implements OnInit,AfterViewInit ,OnDestroy {

  @ViewChild('myButton') myButton!: ElementRef;

  mensaje: string = '';


  constructor(protected dataservice: DataServiceService) {
    this.dataservice.getInfoByTag('subscription').subscribe();



  }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const buttonClick$ = fromEvent(this.myButton.nativeElement, 'click');

    buttonClick$
      .pipe(
        map(() => '¡Haz presionado el botón!')
      )
      .subscribe((mensaje) => {
        this.mensaje = mensaje;
      });
  }
}
