import {Routes} from "@angular/router";

import {MainRxjsComponent} from "./main-rxjs.component";


export const  RXJS_ROUTES: Routes = [
  //canActivate: [ AuthGuard ]
  {
    path: '',
    component: MainRxjsComponent,
    children: [
      // { path: '', component: ListComponent },
      // { path: 'parking', component: ParkingCarComponent },
      // { path: 'form-store', component: FormStoreComponent },
    ],
  },
]
