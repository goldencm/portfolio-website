import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ],
})
export class NavComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  over(): void {
    this.visible = true;
  }

  out(): void {
    this.visible = false;
  }

}
