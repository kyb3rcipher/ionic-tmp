import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.page.html',
  styleUrls: ['./exercise2.page.scss'],
  standalone: false,
})
export class Exercise2Page implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  userText:string = '';
}
