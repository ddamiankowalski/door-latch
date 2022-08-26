import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SectionReference } from '../services/sectionreference.service';

@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.css']
})
export class MainTextComponent implements OnInit {
  @ViewChild('reference', { read: ElementRef, static: true }) reference!: ElementRef;

  constructor(public sectionref: SectionReference) { }

  ngOnInit(): void {
  }
}
