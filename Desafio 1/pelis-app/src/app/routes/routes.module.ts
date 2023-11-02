import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioComponent,
    PeliculasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InicioComponent,
    PeliculasComponent
  ]
})
export class RoutesModule { }
