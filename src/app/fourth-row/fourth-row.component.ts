import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-fourth-row',
  templateUrl: './fourth-row.component.html',
  styleUrls: ['./fourth-row.component.css'],
  animations: [
    trigger('scrollTo', [
      state('true', style({
        opacity: 1,
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateY(20%)',
      })),
      transition('true => false', [
        animate('0.4s ease-in-out')
      ]),
      transition('false => true', [
        animate('0.4s {{delay}}ms ease-in-out')
      ])
    ])
  ]
})
export class FourthRowComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.fourthRowVisible = this.isInViewport(this.myElement.nativeElement);
  }

  fourthRowVisible: boolean = false;

  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 >= 0 &&
      rect.bottom - rect.height / 2 + 250 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
