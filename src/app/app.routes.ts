import {Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PersonasListComponent, PersonasViewComponent, PersonasEditComponent, PersonasAddComponent} from './personas/personas.component';
import { BlogListComponent, BlogAddComponent, BlogEditComponent, BlogViewComponent} from './blog/blog.component';
import { AuthGuard } from './services/seguridad.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'inicio', redirectTo: '/' },
  { path: 'demo', component: DemoComponent },
  { path: 'chisme/de/calcular', component: CalculadoraComponent },
  { path: 'personas', component: PersonasListComponent },
  { path: 'personas/add', component: PersonasAddComponent, canActivate: [AuthGuard] },
  { path: 'personas/:id/edit', component: PersonasEditComponent, canActivate: [AuthGuard] },
  { path: 'personas/:id', component: PersonasViewComponent },
  { path: 'personas/:id/:kk', component: PersonasViewComponent },
  { path: 'blog', children: [
      { path: '', component: BlogListComponent },
      { path: 'add', component: BlogAddComponent},
      { path: ':id/edit', component: BlogEditComponent},
      { path: ':id', component: BlogViewComponent},
      { path: ':id/:kk', component: BlogViewComponent},
    ]
  },
  { path: 'config', loadChildren: './setting/setting.module#SettingModule'},
  { path: '404.html', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

