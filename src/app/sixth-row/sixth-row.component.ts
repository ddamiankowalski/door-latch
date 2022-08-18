import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-row',
  templateUrl: './sixth-row.component.html',
  styleUrls: ['./sixth-row.component.css'],
  animations: [
    trigger('scrollTo', [
      state('true', style({
        opacity: 1,
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateY(5%)'
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
export class SixthRowComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.sixthRowVisible = this.isInViewport(this.myElement.nativeElement);
  }

  sixthRowVisible: boolean = false;

  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 >= 0 &&
      rect.bottom - rect.height / 2 + 100 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

}
