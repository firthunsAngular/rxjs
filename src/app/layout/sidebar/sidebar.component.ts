import {Component, Renderer2, signal} from '@angular/core';
import {BaseLayoutComponent} from "../../core/base/base.layout.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {CommonModule, NgClass, NgFor, NgForOf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    HttpClientModule,
    NgClass,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent extends BaseLayoutComponent{

  constructor( private renderer2: Renderer2,  translate: TranslateService,  ) {
    super(renderer2, translate);
    console.log('SidebarComponent', this.sidebarMenuRxjs);
  }

  dinamicHashId(item: number):string {
    return `#collapse${item}`;
  }

  dinamicid(id: number):string {
    return `collapse${id}`
  }

}
