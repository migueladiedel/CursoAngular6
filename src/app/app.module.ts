import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgioCoreModule, LoggerService, ERROR_LEVEL } from '../agio-core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { PersonasVMService } from './personas/personas-vm.service';
import { BLOB_COMPONENT } from './blob/blob.component';
import { BlobVMService } from './blob/blob-vm.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    PopUpComponent,
    CalculadoraComponent,
    DinamicosComponent,
    PERSONAS_COMPONENT,
    BLOB_COMPONENT

  ],
  imports: [
    BrowserModule, FormsModule,
    AgioCoreModule,
  ],
  providers: [
    LoggerService,
    {provide: ERROR_LEVEL, useValue: 4 },
    PersonasVMService,
    BlobVMService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
