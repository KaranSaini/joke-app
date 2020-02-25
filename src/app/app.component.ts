import { Component, AfterViewInit } from '@angular/core';
import anime from '../../node_modules/animejs/lib/anime.min.js';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
    <app-header></app-header>
    <app-joke></app-joke>
    <app-footer></app-footer>
</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit() {
    let tl = anime.timeline()
      .add({
        targets: 'div app-header',
        backgroundColor: '#1C4B82',
        duration: 2500,
        easing: 'linear',
      })
  }
}
