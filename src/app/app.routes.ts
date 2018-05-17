import {Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent} from './personas/personas.component';
import { BlobListComponent, BlobAddComponent, BlobEditComponent, BlobViewComponent} from './blog/blog.component';


export const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'inicio', redirectTo: '/' },
   { path: 'demo', component: DemoComponent },
   { path: 'chisme/de/calcular', component: CalculadoraComponent },
   { path: 'personas', component: PersonasListComponent },
   { path: 'personas/add', component: PersonasAddComponent },
   { path: 'personas/:id/edit', component: PersonasEditComponent },
   { path: 'personas/:id', component: PersonasViewComponent },
   { path: 'personas/:id/:kk', component: PersonasViewComponent },
   { path: 'blog', children: [
      { path: '', component: BlobListComponent },
      { path: 'add', component: BlobAddComponent },
      { path: ':id/edit', component: BlobEditComponent },
      { path: ':id', component: BlobViewComponent },
      { path: ':id/:kk', component: BlobViewComponent },
    ] },
  // { path: 'oldPath', redirectTo: '/newPath' },
  // { path: 'path', component: MyComponent3, data: { message: 'Custom' } },
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];

