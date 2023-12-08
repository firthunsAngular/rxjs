import {Routes} from "@angular/router";
import {MicroservicesComponent} from "./microservices.component";
import {MainRxjsComponent} from "./rxjs/main-rxjs.component";
import {HomeComponent} from "./home/home.component";


export const MICROSERVICES_ROUTES: Routes = [

  {
    path: '',component: MicroservicesComponent,
    children:[
      { path: '', component: HomeComponent, title: 'Banco de Trabajo' },
      { path: 'home', component: HomeComponent, title: 'Banco de Trabajo' },
      {  path: 'rxjs',  title: 'RxJS',   loadChildren: () => import('./rxjs/rxjs.index').then((m) => m.RXJS_ROUTES)    },
    ]

  }
  ];
