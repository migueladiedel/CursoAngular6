import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgioCoreModule, LoggerService, ERROR_LEVEL } from '../agio-core';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { AuthInterceptor, LoggingInterceptor } from './services/seguridad.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { PersonasVMService, PersonasDAOVMService } from './personas/personas-vm.service';
import { BLOG_COMPONENT } from './blog/blog.component';
import { BlogVMService } from './blog/blog-vm.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    PopUpComponent,
    CalculadoraComponent,
    DinamicosComponent,
    PERSONAS_COMPONENT, BLOG_COMPONENT, LoginComponent, PageNotFoundComponent, MenuComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),
    AgioCoreModule,
    NgbModule.forRoot(),
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: 4 },
    BlogVMService,
    {provide: PersonasVMService, useClass: PersonasDAOVMService},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
