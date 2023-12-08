import {Routes} from "@angular/router";

import {MainRxjsComponent} from "./main-rxjs.component";
import {AnimationFramesComponent} from "./function/animation-frames/animation-frames.component";
import {AuditComponent} from "./function/audit/audit.component";


export const  RXJS_ROUTES: Routes = [
  //canActivate: [ AuthGuard ]
  {
    path: '',
    component: MainRxjsComponent,
    children: [
      { path: '', component: AnimationFramesComponent },
      { path: 'animationFrames', component: AnimationFramesComponent },
      { path: 'audit', component: AuditComponent },
    ],
  },
]
