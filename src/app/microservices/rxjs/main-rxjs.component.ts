import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-main-rxjs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main-rxjs.component.html',
  styleUrls: ['./main-rxjs.component.scss']
})
export class MainRxjsComponent  {

}
