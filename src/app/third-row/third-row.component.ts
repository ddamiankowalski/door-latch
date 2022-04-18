import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-third-row',
  templateUrl: './third-row.component.html',
  styleUrls: ['./third-row.component.css']
})
export class ThirdRowComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.thirdRowVisible = this.isInViewport(this.myElement.nativeElement);
  }

  thirdRowVisible: boolean = false;

  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }


  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 >= 0 &&
      rect.bottom - rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
