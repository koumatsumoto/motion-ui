import { ActionTypes } from '../motion-unit/types';
import { getRx, withHistory } from '../../libs/common/rxjs';
import { checkHoldAndEntering } from '../motion-unit/movement/hold';
import { isQuickReverse } from '../motion-unit/movement/reverse';
import { getMotionUnitStream } from '../motion-unit';

export type Movement = {
  type: ActionTypes;
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
