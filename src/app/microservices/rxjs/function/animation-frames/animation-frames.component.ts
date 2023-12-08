import {Component, OnDestroy, OnInit} from '@angular/core';
import {animationFrames, Subscription} from "rxjs";
import {CommonModule} from "@angular/common";
import {DataServiceService} from "../services/data-service.service";
import {ModalComponent} from "../../components/modal/modal.component";

@Component({
  selector: 'app-animation-frames',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './animation-frames.component.html',
  styleUrl: './animation-frames.component.css'
})
export class AnimationFramesComponent  implements OnInit, OnDestroy{
  elementPosition = 0;
  containerHeight = 0;
  animationSubscription: Subscription | undefined;
  containerWidth = 0; // Ancho del contenedor padre
  elementWidth = 0; // Ancho del elemento animado

  backgroundColor = 'red';
  animationSubscription2: Subscription | undefined;
  //
  animationSubscription3: Subscription | undefined;
  posX = 0;
  posY = 0;
  containerWidth3 = 0;
  containerHeight3 = 0;
  elementWidth3 = 20; // Diámetro de la bola
  directionY = 1; // Dirección vertical
  directionX = 1;


  constructor(protected dataservice: DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.getInfoByTag('animationFrames').subscribe();
    // Obtener el ancho del contenedor y del elemento animado
    const container = document.querySelector('.card-body');
    const element = document.querySelector('.animated-element');
    this.containerWidth = container ? container.clientWidth : 0;
    this.elementWidth = element ? element.clientWidth : 0;

    const container3 = document.querySelector('.zigzag-container');
    this.containerWidth = container3 ? container3.clientWidth : 0;
    this.containerHeight = container3 ? container3.clientHeight : 0;
    this.containerWidth3 = container3 ? container3.clientWidth : 0;
    this.containerHeight3 = container3 ? container3.clientHeight : 0;

    this.startAnimation();
    this.startAnimation2();
    this.startAnimation3();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
    this.stopAnimation2();
    this.stopAnimation3();
  }

  startAnimation(): void {
    let direction = 1; // Variable para controlar la dirección del movimiento
    const limit = this.containerWidth - this.elementWidth; // Límite del contenedor

    this.animationSubscription = animationFrames().subscribe(() => {
      this.elementPosition += direction;

      if (this.elementPosition >= limit || this.elementPosition <= 0) {
        direction = -direction;
      }
    });
  }

  stopAnimation(): void {
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }

  startAnimation2(): void {
    let hue = 0;
    this.animationSubscription2 = animationFrames().subscribe(() => {
      hue = (hue + 1) % 360; // Cambia gradualmente el tono de color
      this.backgroundColor = `hsl(${hue}, 70%, 50%)`; // Usa HSL para variar el color
    });
  }

  stopAnimation2(): void {
    if (this.animationSubscription2) {
      this.animationSubscription2.unsubscribe();
    }
  }
  startAnimation3(): void {
    let directionX = 1;

    this.animationSubscription = animationFrames().subscribe(() => {
      this.posX += directionX;
      this.posY += this.directionY;

      // Cambiar la dirección vertical en los límites del contenedor
      if (this.posY >= this.containerHeight3 - this.elementWidth3 || this.posY <= 0) {
        this.directionY = -this.directionY;
      }

      if (this.posX >= this.containerWidth3 - this.elementWidth3 || this.posX <= 0) {
        directionX = -directionX;
      }
    });
  }

  stopAnimation3(): void {
    if (this.animationSubscription3) {
      this.animationSubscription3.unsubscribe();
    }
  }
}
