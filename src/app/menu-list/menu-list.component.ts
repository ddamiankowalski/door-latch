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

  public navigateToSection() {
    console.log(this.sectionRef.elementArray)
  }

}
