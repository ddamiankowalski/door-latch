import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { iif } from 'rxjs';

@Component({
  selector: 'app-third-left',
  templateUrl: './third-left.component.html',
  styleUrls: ['./third-left.component.css'],
  animations: [
    trigger('scrollToMenu', [
      state('true', style({
      })),
      state('false', style({
        transform: 'translateX(-20%)',
        opacity: 0,
      })),
      transition('true => false', [
        animate('0.4s {{delay}}ms ease-in-out')
      ]),
      transition('false => true', [
        animate('0.4s {{delay}}ms ease-in-out')
      ])
    ])
  ]
})
export class ThirdLeftComponent implements OnInit {
  @Input() isVisible: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.isVisible ? this.classname = 'show' : this.classname = 'hide';
    
    if(this.isVisible == false) {
      clearInterval(this.slideInterval)
    } else {
      this.slideInterval = setInterval(() => {
        this.currentIndex >= 2 ? this.currentIndex = 0 : this.currentIndex++;
        this.addPrefix();
      }, 8000);
    }
  }

  prefix: string = 'bg';
  current: string = this.prefix + '.jpg';
  bgSize: string = '150%';
  currentIndex: number = 0;
  classname: string = '';

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  slideInterval: any = {};

  constructor() {}

  ngOnInit(): void {
    this.classname = 'hide';
  }

  next() {
    this.currentIndex >= 2 ? this.currentIndex = 0 : this.currentIndex++;
    this.addPrefix();
    clearInterval(this.slideInterval);
    this.slideInterval = setInterval(() => {
      this.currentIndex >= 2 ? this.currentIndex = 0 : this.currentIndex++;
      this.addPrefix();
    }, 8000);
  }

  prev() {
    this.currentIndex == 0 ? this.currentIndex = 2 : this.currentIndex--;
    this.addPrefix();
    clearInterval(this.slideInterval);
    this.slideInterval = setInterval(() => {
      this.currentIndex >= 2 ? this.currentIndex = 0 : this.currentIndex++;
      this.addPrefix();
    }, 8000);
  }

  addPrefix() {
    if(this.currentIndex == 0) {
      this.prefix = 'bg';
    } else {
      this.prefix = 'bg' + this.currentIndex.toString();
    }
    this.classname = 'hide';
    setTimeout(() => {
      this.current = this.prefix + '.jpg';
    }, 1000)
  }

  showImage() {
    this.classname = 'show';
  }
}
