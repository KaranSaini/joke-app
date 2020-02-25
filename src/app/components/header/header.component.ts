import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import anime from '../../../../node_modules/animejs/lib/anime.min.js';
import { pluck } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  template:
  `
    <div id="headerText" class="container" #container>
      <span>P</span>
      <span>R</span>
      <span>O</span>
      <span>G</span>
      <span>R</span>
      <span>A</span>
      <span>M</span>
      <span>M</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
      <span> &nbsp; </span>
      <span>H</span>
      <span>U</span>
      <span>M</span>
      <span>O</span>
      <span>R</span>
    </div>
  `,
  styles: [ 
    '.container { display: flex; justify-content: center }' ,
    '.container span { font-size: calc(1em + 2vw); color: #dae1e7 }'
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild("container", { static: true }) container: ElementRef;

  constructor() {  }

  ngOnInit() {
    console.log()
    let tl = anime.timeline()
      .add({
        targets: this.container.nativeElement,
        duration: 3000,
        easing: "spring(1, 60, 6, 1)",
        translateX: [-1000, 0],
      })
  }

  ngAfterViewInit() {
  }

}
