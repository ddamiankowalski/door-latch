import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { SectionReference } from '../services/sectionreference.service';

@Component({
  selector: 'app-third-row',
  templateUrl: './third-row.component.html',
  styleUrls: ['./third-row.component.css']
})
export class ThirdRowComponent implements OnInit, AfterViewInit {
  @ViewChild('reference', { read: ElementRef, static: true }) reference!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.thirdRowVisible = this.isInViewport(this.myElement.nativeElement);
  }

  thirdRowVisible: boolean = false;

  constructor(private myElement: ElementRef, public sectionref: SectionReference) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sectionref.pushElement(this.reference.nativeElement, 'our work', 'center');
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 >= 0 &&
      rect.bottom - rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
