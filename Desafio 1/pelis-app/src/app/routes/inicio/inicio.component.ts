import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/trending.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isLoading: boolean = true 
  listFilms: IMovie[] = [] 
  listOriginalFilms: IMovie[] = []

  optionsTab: any[] = [ 
    {
      label: 'Todos',
      value: 'all',
    },
    {
      label: 'Peliculas',
      value: 'movie',
    },
    {
      label: 'Series',
      value: 'tv',
    },
  ]

  tabValue: any = {
    label: 'Todos',
    value: 'all'
  }

  constructor(private movieService: MovieService ) {

  }

  ngOnInit(): void {
    this.getTrending()
  }

  getTrending() { 
    this.movieService.getTrending().subscribe({
      next: (response) => {
        this.listFilms = response.results
        this.listOriginalFilms = response.results
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }

  getTabSelected(value: any) { 
    this.tabValue = value 
    this.filterFilms(this.tabValue.value)
  }

  searchFilm(value: string) { 
    if (!value.length) return this.filterFilms(this.tabValue.value)
    return this.listFilms = this.listFilms.filter((item: IMovie) => item.title ? item.title.toLowerCase().match(value.toLocaleLowerCase()) : item.name?.toLowerCase().match(value.toLocaleLowerCase()))
  }

  filterFilms(value: string) {
    if (value === 'all') return this.listFilms = this.listOriginalFilms
    else {
      return this.listFilms = this.listOriginalFilms.filter((item: IMovie) => item.media_type === value)
    }
  }
}