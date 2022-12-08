import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.css'],
  animations: [
    trigger('query', [
      transition(':enter', [
        style({ height: 0 }),
        group([
          animate(900, style({ height: '*' })),
          query(':enter', [
            style({ opacity: 0, transform: 'scale(0)' }),
            animate(4000, style({ opacity: 1, transform: 'scale(1)' })),
          ]),
          query('.hero', [
            style({ transform: 'translateX(-100%)' }),
            animate('.9s 500ms ease-in', style({ transform: 'translateX(0)' })),
          ]),
        ]),
        query('@animateMe', animateChild()),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        query('@animateMe', animateChild()),
        group([
          animate('500ms 500ms', style({ height: '0', padding: '0' })),
          query(':leave', [
            style({ opacity: 1, transform: 'scale(1)' }),
            animate('1s', style({ opacity: 0, transform: 'scale(0)' })),
          ]),
          query('.hero', [
            style({ transform: 'translateX(0)' }),
            animate('.7s ease-out', style({ transform: 'translateX(-100%)' })),
          ]),
        ]),
      ]),
    ]),
    trigger('animateMe', [
      transition(
        '* <=> *',
        animate(
          '500ms cubic-bezier(.68,-0.73,.26,2.65)',
          keyframes([
            style({ backgroundColor: 'transparent', color: '*', offset: 0 }),
            style({ backgroundColor: 'blue', color: 'white', offset: 0.9 }),
            style({ backgroundColor: 'transparent', color: '*', offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class WhereComponent implements OnInit {
  constructor() {}
  toggleDisabled = false;
  show = true;


  ngOnInit(): void {}
}
