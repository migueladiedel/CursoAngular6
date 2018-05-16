import {Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

export const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'inicio', redirectTo: '/' },
   { path: 'demo', component: DemoComponent },
   { path: 'dechisme/de/calcular', component: CalculadoraComponent },
  // { path: 'oldPath', redirectTo: '/newPath' },
  // { path: 'path', component: MyComponent3, data: { message: 'Custom' } },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

