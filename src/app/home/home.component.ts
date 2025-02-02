import { Component, inject } from '@angular/core';
import { MoviesService } from '../movies.service';
import { movie } from '../movie';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private moviesService = inject(MoviesService);

movies:movie[]=[]




  getmoviesdata(){
    this.moviesService.getmovies().subscribe({
      next:(data) => {
 this.movies = data.results
 console.log(data.results)
    },
    error: (error) => {
      console.log(error);
    }
      })
  }
  ngOnInit(): void {
this.getmoviesdata()
  
  }
}
