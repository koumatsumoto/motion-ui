import { Observable } from 'rxjs';
import { getRx, withHistory } from '../../libs/common/rxjs';
import { getMotionUnitStream } from '../motion-unit';
import { MovementInput, MovementStreamOutput } from './types';
import { inputCount } from './constants';
import { detectMovement } from './internal/detect-movement';

export const getMovementStream = (): Observable<MovementStreamOutput> => {
  const { Observable } = getRx();
  const { map } = getRx().operators;

  return new Observable<MovementStreamOutput>((subscriber) => {
    getMotionUnitStream()
      .pipe(
        withHistory(inputCount),
        map((items) => {
          const movements = items.map((m) => m.data) as MovementInput;
          const sid = [items[0].sid, items[items.length - 1].sid];
          const type = detectMovement(movements);

          return {
            type,
            sid,
          } as MovementStreamOutput;
        }),
      )
      .subscribe((value) => {
        subscriber.next(value);
      });
  });
};
