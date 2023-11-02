import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoComponent } from './compartido/compartido.component';


@NgModule({
  declarations: [
    CompartidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompartidoComponent
  ]
})
export class SharedModule { }
