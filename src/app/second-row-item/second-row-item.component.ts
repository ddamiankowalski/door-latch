import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-second-row-item',
  templateUrl: './second-row-item.component.html',
  styleUrls: ['./second-row-item.component.css'],
  animations: [
    trigger('scrollTo', [
      state('true', style({
        opacity: 1,
        transform: 'translateY(20%)',
      })),
      state('false', style({
        opacity: 0
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
export class SecondRowItemComponent implements OnInit {
  @Input() name: string = '';
  @Input() text: string = '';
  @Input() isVisible: boolean = false;
  @Input() index: number = 0;

  delayValue: number = 0;
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.delayValue = this.index * 200; 
  }

  get stateName() {
    return this.isVisible ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;  
  }
}
