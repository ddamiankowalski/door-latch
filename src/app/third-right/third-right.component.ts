import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-third-right',
  templateUrl: './third-right.component.html',
  styleUrls: ['./third-right.component.css'],
  animations: [
    trigger('scrollTo', [
      state('true', style({
        opacity: 1,
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateX(20%)',
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
export class ThirdRightComponent implements OnInit {
  @Input() isVisible: boolean = false;

  currentText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
