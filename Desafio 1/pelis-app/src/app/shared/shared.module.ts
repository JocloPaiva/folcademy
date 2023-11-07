import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoComponent } from './compartido/compartido.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { TabComponent } from './tab/tab.component';
import { TittleComponent } from './tittle/tittle.component';
import { TabPreviewComponent } from './tab-preview/tab-preview.component';


@NgModule({
  declarations: [
    CompartidoComponent,
    CardsComponent,
    SearchComponent,
    TabComponent,
    TittleComponent,
    TabPreviewComponent
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
    TabPreviewComponent
  ]
})
export class SharedModule { }
