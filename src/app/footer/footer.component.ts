import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyrights: string = '©2021-2022 Privacy - Terms';

  constructor() { }

  ngOnInit(): void {
  }

}
