import { Component } from '@angular/core';

interface movies_series { 
  id: number,
  name: string,
  description: string,
  image: string,
  rating: number,
  category: string,
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  selectedCategory: string = 'Todos';
  botonSeleccionado: number | null = null;

  arrayInfoCards: movies_series[] = [
    {
      id: 1,
      name: 'Black Widow',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/BlackWidow.jpg',
      rating: 6.8,
      category: 'peliculas',
    },
    {
      id: 2,
      name: 'Shang Chi',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/ShangChi.jpeg',
      rating: 6.8,
      category: 'peliculas',
    },
    {
      id: 3,
      name: 'Loki',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/Loki.jpg',
      rating: 6.8,
      category: 'peliculas',
    },
    {
      id: 4,
      name: 'How I Met Your Mother',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/HIMYM.jpg',
      rating: 6.8,
      category: 'series',
    },
    {
      id: 5,
      name: 'Money Heist',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/MoneyHeist.png',
      rating: 6.8,
      category: 'series',
    },
    {
      id: 6,
      name: 'Friends',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/Friends.jpg',
      rating: 6.8,
      category: 'series',
    },
    {
      id: 7,
      name: 'The Big Bang Theory',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/BigBangTheory.jpg',
      rating: 6.8,
      category: 'series',
    },
    {
      id: 8,
      name: 'Two And a Half Men',
      description: 'pelicula de marvel',
      image: '../../../assets/Image/TwoAndMen.jpg',
      rating: 6.8,
      category: 'series',
    }
  ]

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }

  seleccionarBoton(boton: number) {
    this.botonSeleccionado = boton;
  }
}
