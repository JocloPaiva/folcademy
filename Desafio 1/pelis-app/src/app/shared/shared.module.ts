import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoComponent } from './compartido/compartido.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    CompartidoComponent,
    CardsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompartidoComponent,
    CardsComponent
  ]
})
export class SharedModule { }
