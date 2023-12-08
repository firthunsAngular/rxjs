import {Component, Input} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-card',
  standalone: true,
    imports: [
        ModalComponent
    ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string= '';
}
