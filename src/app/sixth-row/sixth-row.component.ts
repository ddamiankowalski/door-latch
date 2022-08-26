import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SectionReference } from '../services/sectionreference.service';

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
export class SixthRowComponent implements OnInit, AfterViewInit {
  @ViewChild('reference', { read: ElementRef, static: true }) reference!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.sixthRowVisible = this.isInViewport(this.myElement.nativeElement);
  }

  sixthRowVisible: boolean = false;

  constructor(private myElement: ElementRef, public sectionref: SectionReference) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sectionref.pushElement(this.reference.nativeElement, 'contact', 'center');
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 >= 0 &&
      rect.bottom - rect.height / 2 + 100 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

}
