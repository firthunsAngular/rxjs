import {Routes} from "@angular/router";
import {MicroservicesComponent} from "./microservices.component";
import {MainRxjsComponent} from "./rxjs/main-rxjs.component";


export const MICROSERVICES_ROUTES: Routes = [

  {
    path: '',component: MicroservicesComponent,
    children:[
      {path: '',component: MainRxjsComponent}
    ]

  }
  ];
