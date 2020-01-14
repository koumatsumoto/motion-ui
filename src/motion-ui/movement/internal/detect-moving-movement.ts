import { fourthLastIndex, lastIndex, thirdLastIndex, secondLastIndex } from '../constants';
import { MovingMovementInput } from '../types';
import { linearize } from './util';

type MovingMovementTypes = 'quick start' | 'slow start' | 'just return' | 'over return' | 'moving';

/**
 * @param inputs
 */
export const detectMovingMovement = (inputs: MovingMovementInput): MovingMovementTypes => {
  // convert relative rate like as [1, -3, 2] (first value is always positive or zero)
  const values = linearize([inputs[fourthLastIndex], inputs[thirdLastIndex], inputs[secondLastIndex], inputs[lastIndex]]);
  const first = values[0];
  const thirdLast = values[1];
  const secondLast = values[2];
  const last = values[3];

  // start moving
  if (first.rate === 0 && thirdLast.rate === 0 && secondLast.rate === 0 && last.rate !== 0) {
    return 1 < last.rate ? 'quick start' : 'slow start';
  }

  if (thirdLast.rate < 2) {
    if (3 <= Math.abs(secondLast.rate)) {
      if (3 <= Math.abs(last.rate - secondLast.rate)) {
        if (last.rate === 0) {
          return 'just return';
        } else {
          return 'over return';
        }
      }
    }
  }

  return 'moving';
};
