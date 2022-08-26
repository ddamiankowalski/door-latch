import { Component, OnInit } from '@angular/core';
import { SectionReference } from '../services/sectionreference.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor(public sectionRef: SectionReference) { }

  menuList: any = [
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
