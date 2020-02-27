import { Component, OnInit } from '@angular/core';
import { JokeApiService } from '../../services/joke-api.service';
import { Observable, ReplaySubject } from 'rxjs';
import anime from '../../../../node_modules/animejs/lib/anime.min.js';

@Component({
  selector: 'app-joke',
  // templateUrl: './joke.component.html',
  template: `
    <div class="jokeContainer">
      <div class="buttonContainer" ><button (click)='onFirstClick()'
        (mouseover) = 'onMouseOver($event)'
        (mouseleave) = 'onMouseLeave($event)'
        >GET A JOKE!</button></div>
      <h3 >{{progJoke | async}}</h3>
    </div>
  `,
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit {
  buttonClicked: boolean = false;
  progJoke = new ReplaySubject();
  animationTimeline: any;
  tl: any;

  constructor(private joke: JokeApiService) { }

  ngOnInit() {
    this.animationTimeline = anime.timeline()
    .add({
      targets: 'div button',
      duration: 2500,
      opacity: [0, 1],
      easing: 'easeInQuad'
    })
  }

  onMouseOver(eventInfo) {
    console.log(eventInfo);
    this.tl = anime({
      targets: 'div button',
      scale: [1, 1.01],
      easing: 'easeInOutSine',
      direction: 'alternate',
      boxShadow: [
        `
          0 24.7px 2.2px rgba(0, 0, 0, 0.031),
          0 22.3px 5.3px rgba(0, 0, 0, 0.05),
          0 15.9px 10px rgba(0, 0, 0, 0.06),
          0 11.7px 17.9px rgba(0, 0, 0, 0.065),
          0 17.5px 33.4px rgba(0, 0, 0, 0.068),
          0 100px 80px rgba(0, 0, 0, 0.07)
        `,
        `
          0 47.3px 25.3px rgba(0, 0, 0, 0.107),
          0 56.7px 37.5px rgba(0, 0, 0, 0.106),
          0 57.2px 43.2px rgba(0, 0, 0, 0.099),
          0 55.1px 46.5px rgba(0, 0, 0, 0.09),
          0 55.5px 52.4px rgba(0, 0, 0, 0.08),
          0 100px 80px rgba(0, 0, 0, 0.07)
        `
      ],
      duration: 4000 * .1,
      loop: true
    })
  }

  onMouseLeave(event) {
    console.log('mouse gone');
    this.tl.reset();
  }

  onFirstClick() {
    const key = 'joke';
    this.buttonClicked = true;
    const jokePromise = new Promise((resolve, reject) => {
      resolve('success')

      reject('ERROR TRY AGAIN')

    })
    jokePromise.then((message) => {
      console.log(message);
      const a = this.joke.retrieveDefault().subscribe((value) => {
        this.progJoke.next(value[key]);
        console.log(value[key]);
        const an = anime.timeline({
          targets: 'div',
          easing: 'linear',
          duration: 500,
        })
        an.add({
          targets: 'div h3',
          easing: 'easeInQuad',
          duration: 1000,
          translateY: [1500, 0],
        })
      }, (error) => {
        console.log(error)
      })
    })
  }


}
