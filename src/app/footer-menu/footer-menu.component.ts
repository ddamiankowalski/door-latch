import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.css']
})
export class FooterMenuComponent implements OnInit {
  items: any = [
    {name: 'Home'},
    {name: 'Contact'},
    {name: 'Our Work'},
    {name: 'Pricing'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
