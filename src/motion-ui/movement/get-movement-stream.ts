import { getRx, withHistory } from '../../libs/common/rxjs';
import { getMotionUnitStream } from '../motion-unit';
import { checkHoldAndEntering } from './internal/hold';
import { isQuickReverse } from './internal/reverse';
import { MovementTypes } from './types';

export type Movement = {
  type: MovementTypes;
  // [first, last]
  sid?: number[];
};

export const getMovementStream = () => {
  const { Observable } = getRx();
  const { map } = getRx().operators;
  const movementCount = 10;

  return new Observable<Movement>((subscriber) => {
    getMotionUnitStream()
      .pipe(
        withHistory(movementCount),
        map((items) => {
          const movements = items.map((m) => m.data);
          const sid = [items[0].sid, items[items.length - 1].sid];

          const type = checkHoldAndEntering(movements);
          if (type) {
            return {
              type,
              sid,
            };
          }

          if (isQuickReverse(movements.slice(-2))) {
            return {
              type: 'quick reverse',
              sid,
            };
          }

          return {
            type: 'moving',
            sid,
          };
        }),
      )
      .subscribe((value) => {
        subscriber.next(value as Movement);
      });
  });
};
