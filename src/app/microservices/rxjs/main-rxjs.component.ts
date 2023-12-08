import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-main-rxjs',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template:`
      <router-outlet></router-outlet>

  `


})
export class MainRxjsComponent  {

}
