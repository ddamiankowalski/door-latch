import { HostListener, Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-second-row',
  templateUrl: './second-row.component.html',
  styleUrls: ['./second-row.component.css']
})
export class SecondRowComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.secondRowVisible = this.isInViewport(this.myElement.nativeElement);
  }

  secondRowVisible: boolean = false;

  items: any = [
    {
      name: 'Simple designs',
      text: 'This is a simple text that allows you to visualise this component. Please change it later',
    },
    {
      name: 'Great communication',
      text: 'This is a simple text that allows you to visualise this component. Please change it later',
    },
    {
      name: 'Adequate pricing',
      text: 'This is a simple text that allows you to visualise this component. Please change it later',
    },
  ]
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
