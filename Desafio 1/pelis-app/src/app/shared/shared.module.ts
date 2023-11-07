import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoComponent } from './compartido/compartido.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { TabComponent } from './tab/tab.component';
import { TittleComponent } from './tittle/tittle.component';


@NgModule({
  declarations: [
    CompartidoComponent,
    CardsComponent,
    SearchComponent,
    TabComponent,
    TittleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompartidoComponent,
    CardsComponent,
    SearchComponent,
    TabComponent,
    TittleComponent,
  ]
})
export class SharedModule { }
