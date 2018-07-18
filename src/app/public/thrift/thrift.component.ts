import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thrift',
  templateUrl: './thrift.component.html',
  styleUrls: ['./thrift.component.css']
})
export class ThriftComponent implements OnInit {
	
	imgCarteP: string = 'assets/images/visa-premier.jpg';
	imgCarteI: string ='assets/images/Visa_Infinite.jpg';
	imgsecurise: string ='assets/images/securise.png';
	imgparam: string ='assets/images/param.jpg';


  constructor() { }

  ngOnInit() {
  }

}
