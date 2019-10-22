import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-declivity',
  templateUrl: './declivity.component.html',
  styleUrls: ['./declivity.component.scss']
})
export class DeclivityComponent implements OnInit {

  xValue: number = 0
  yValue: number = 0
  zValue: number = 0
  wValue: number = 0
  result: number

  settings = {
    accent: true,
    error: true,
    highlighted: false
  }

  constructor() { }

  ngOnInit() {}

  calculate() {
    this.result = +this.xValue + +this.yValue + +this.zValue + +this.wValue
  }

  reset() {
    this.xValue = 0
    this.yValue = 0
    this.zValue = 0
    this.wValue = 0
    this.result = undefined
  }

}
