import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presenting',
  templateUrl: './presenting.component.html',
  styleUrls: ['./presenting.component.scss']
})
export class PresentingComponent implements OnInit {
imgpresentation: string = 'assets/images/presentation.png';
imggif: string = 'assets/images/money.gif';
  constructor() { }

  ngOnInit() {
  }

}
