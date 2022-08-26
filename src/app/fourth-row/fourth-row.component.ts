import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SectionReference } from '../services/sectionreference.service';

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
  @ViewChild('reference', { read: ElementRef, static: true }) reference!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.fourthRowVisible = this.isInViewport(this.myElement.nativeElement);
  }

  fourthRowVisible: boolean = false;

  constructor(private myElement: ElementRef, public sectionref: SectionReference) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sectionref.pushElement(this.reference.nativeElement, 'pricing', 'center');
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 >= 0 &&
      rect.bottom - rect.height / 2 + 250 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
