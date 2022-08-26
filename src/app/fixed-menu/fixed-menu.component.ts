import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { SectionReference } from '../services/sectionreference.service';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrls: ['./fixed-menu.component.css'],
  animations: [
    trigger('slide', [
      state('true', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      state('false', style({
        opacity: 1,
        visibility: 'visible'
      })),
      transition('true <=> false', [
        animate('.3s')
      ])
    ])
  ]
})
export class FixedMenuComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(window.scrollY > 250) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }

  public isHidden: boolean = true;

  constructor(public sectionRef: SectionReference) { }

  ngOnInit(): void {
  }

  menuList: any = [
    {name: 'Home'},
    {name: 'Contact'},
    {name: 'Our Work'},
    {name: 'Pricing'}
  ]

  public navigateToSection(name: string) {
    this.sectionRef.elementArray.forEach(element => {
      if(element.name == name.toLowerCase()) {
        element.ref.scrollIntoView({behavior: 'smooth', block: element.block})
      }
    })
  }

}
