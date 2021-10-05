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
    ]),
    trigger('time', [
      transition('* => *', [
        animate('250ms ease-in', style({'padding-left': ".4%"})),
        animate('250ms ease-in', style({'padding-left': "0"})),
        animate('250ms ease-in', style({'padding-left': ".4%"})),
        animate('250ms ease-in', style({'padding-left': "0"})),
        animate('250ms ease-in', style({'padding-left': ".4%"})),
        animate('250ms ease-in', style({'padding-left': "0"})),
      ])
    ])
  ],
})
export class NavComponent implements OnInit {

  visible = false;
  triggerAnim = false;
  viewed = false;


  constructor() {
    setInterval(()=>{
      this.triggerAnimation()
    },8000);
    
   }

  ngOnInit(): void {
  }

  over(): void {
    if (!this.viewed) {
      this.viewed = true;
    }
    this.visible = true;
  }

  out(): void {
    this.visible = false;
  }

  triggerAnimation() {
    if (!this.viewed) {
      this.triggerAnim = !this.triggerAnim; 
    }
       
  }

}
