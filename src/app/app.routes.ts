import { Routes } from '@angular/router';
import {MICROSERVICES_ROUTES} from "./microservices/microservices.index";

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./microservices/microservices.index').then((m) => m.MICROSERVICES_ROUTES), data: {animation: 'Home'} },
// ERROR PAGES
  // LOGIN

];

