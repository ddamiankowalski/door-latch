import { Component, OnInit } from '@angular/core';

import { MainContentComponent } from './main-content/main-content.component';
import { ResizeWindowService } from './services/resizewindow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.resize.screenType$.subscribe(x => console.log(x))
  }

  constructor(public resize: ResizeWindowService) {}
  title = 'door-latch';
}
