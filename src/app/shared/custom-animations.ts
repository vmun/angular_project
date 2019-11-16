import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

export const customAnimations =
  trigger('customAnimations', [
    transition('* => *', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '60%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(200%)' }),
          animate('1s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform:   'translateX(0%)'}),
          animate('1s ease-in-out',
            style({ transform: 'translateX(-200%)' }))
        ], { optional: true }),
      ])
    ])
  ]);
