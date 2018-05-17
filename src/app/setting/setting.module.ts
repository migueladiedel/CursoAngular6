import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CambiaPasswordComponent } from './cambia-password/cambia-password.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ProfileComponent, CambiaPasswordComponent, DatosPersonalesComponent]
})
export class SettingModule { }
