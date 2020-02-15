import { Component, OnInit } from '@angular/core';
import { JokeApiService } from '../../services/joke-api.service';
import { Observable, ReplaySubject } from 'rxjs';
import anime from '../../../../node_modules/animejs/lib/anime.min.js';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  buttonClicked: boolean = false;
  progJoke = new ReplaySubject();

  constructor(private joke: JokeApiService) { }

  ngOnInit() {
    let animationTimeline = anime.timeline()
    .add({
      targets: 'div h2',
      opacity: [0, 1],
      duration: 2000,
      easing: 'linear'
    })
    .add({
      targets: 'div button',
      duration: 3000,
      opacity: [0, 1],
      easing: 'linear'
    })
  }

  onFirstClick() {
    this.buttonClicked = true;
    let a = this.joke.retrieveDefault().subscribe((value) => {
      this.progJoke.next(value);
    })
  }

}
