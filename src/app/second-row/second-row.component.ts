import { HostListener, Component, OnInit, ElementRef } from '@angular/core';

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
      text: 'The rule is the simpler the better',
      icon: 'design_services'
    },
    {
      name: 'Great communication',
      text: 'Communication is the key to success',
      icon: 'wifi_tethering'
    },
    {
      name: 'Adequate pricing',
      text: 'Because overpriced services are the worst',
      icon: 'trending_down'
    },
  ]
  constructor(private myElement: ElementRef) { }

  ngOnInit(): void {
  }

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top + rect.height / 2 >= 0 + 250 &&
      rect.bottom - rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

}
