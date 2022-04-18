import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-svg',
  templateUrl: './logo-svg.component.html',
  styleUrls: ['./logo-svg.component.css']
})
export class LogoSvgComponent implements OnInit {
  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
