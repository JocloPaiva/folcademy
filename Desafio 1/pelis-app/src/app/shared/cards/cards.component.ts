import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/trending.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() dataOfMovie: IMovie = {} as IMovie

  constructor() {

  }
}
