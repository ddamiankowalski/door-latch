import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SectionReference } from '../services/sectionreference.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('reference', { read: ElementRef, static: true }) reference!: ElementRef;

  constructor(public sectionref: SectionReference) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sectionref.pushElement(this.reference.nativeElement, 'home', 'end');
  }

}
