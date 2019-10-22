import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bias',
  templateUrl: './bias.component.html',
  styleUrls: ['./bias.component.scss']
})
export class BiasComponent implements OnInit {

  color: string

  colorFromBias = 'fuchsia'

  constructor() { }

  ngOnInit() {
  }

}
