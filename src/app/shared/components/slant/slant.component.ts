import { Component, OnInit } from '@angular/core';

import {UserTe} from '../../interfaces/user'

@Component({
  selector: 'app-slant',
  templateUrl: './slant.component.html',
  styleUrls: ['./slant.component.scss']
})
export class SlantComponent implements OnInit {

  roles: string[] = ['', 'Гость', 'Модератор', 'Администратор']

  modelFew: UserTe = new UserTe(0, '', '', 0)

  constructor() { }

  ngOnInit() {
  }

}
