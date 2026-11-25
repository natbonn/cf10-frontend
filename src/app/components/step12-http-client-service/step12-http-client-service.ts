import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokeService } from '../../shared/services/joke.service';

@Component({
  imports: [CommonModule, MatButtonModule, MatCardModule],
  selector: 'app-step12-http-client-service',
  styleUrl: './step12-http-client-service.css',
  templateUrl: './step12-http-client-service.html',
})
export class Step12HttpClientService {
  jokeService = inject(JokeService);
  dadJoke?: string;
  chuckNorrisJoke?: string;

  dadJokeSignal = this.jokeService.dadJok;

  refreshDadJoke() {
    this.jokeService.getDadJoke().subscribe({
      next: (data) => {
        // console.log("DAD1>>",this.dadJoke, data.joke);
        // this.dadJoke = data.joke;
        this.dadJokeSignal.set(data.joke);
        this.dadJoke = this.dadJokeSignal()
        console.log("DAD1>>", this.dadJoke, data.joke, this.dadJokeSignal());
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  refreshChuckNorrisJoke() {
    this.jokeService.getChuckNorrisJoke()
      .subscribe((data) => {
        this.chuckNorrisJoke = data.value
        console.log("CHUCK>>", this.chuckNorrisJoke);
      })
  }

}