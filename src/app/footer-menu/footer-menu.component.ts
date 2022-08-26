import { Component, OnInit } from '@angular/core';
import { SectionReference } from '../services/sectionreference.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent implements OnInit {
  constructor(public sectionRef: SectionReference) { }

  items: any = [
    {name: 'Home'},
    {name: 'Contact'},
    {name: 'Our Work'},
    {name: 'Pricing'}
  ]

  ngOnInit(): void {
  }

  public navigateToSection(name: string) {
    this.sectionRef.elementArray.forEach(element => {
      if(element.name == name.toLowerCase()) {
        element.ref.scrollIntoView({behavior: 'smooth', block: element.block})
      }
    })
  }

}
