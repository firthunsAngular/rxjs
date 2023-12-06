import { Component } from '@angular/core';
import {NavbarComponent} from "../layout/navbar/navbar.component";
import {SidebarComponent} from "../layout/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-microservices',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './microservices.component.html',
  styleUrl: './microservices.component.css'
})
export class MicroservicesComponent {

}
