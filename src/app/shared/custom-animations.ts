import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

export const customAnimations2 =
  trigger('customAnimations2', [
    transition('* => *', [
      query(':enter, :leave',
        style({position: 'fixed', width: '60%'}),
        {optional: true}),
      group([
        query(':enter', [
          style({transform: 'translateX(200%)'}),
          animate('1s ease-in-out',
            style({transform: 'translateX(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({transform: 'translateX(0%)'}),
          animate('1s ease-in-out',
            style({transform: 'translateX(-200%)'}))
        ], {optional: true}),
      ])
    ])
  ]);
export const customAnimations =
  trigger('customAnimations', [
    transition('* => *', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({left: '100%'}))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
