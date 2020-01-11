import { MovingMovementInput } from '../types';
import { firstMoveIndex, fourthMoveIndex, secondMoveIndex, thirdMoveIndex } from '../constants';
import { simplifyMovements } from './util';

type MovingMovementTypes = 'quick start' | 'slow start' | 'just return' | 'over return' | 'moving';

/**
 * @param inputs
 */
export const detectMovingMovement = (inputs: MovingMovementInput): MovingMovementTypes => {
  // convert relative rate like as [1, -3, 2] (first value is always positive or zero)
  const values = simplifyMovements([inputs[firstMoveIndex], inputs[secondMoveIndex], inputs[thirdMoveIndex], inputs[fourthMoveIndex]]);
  const first = values[0];
  const second = values[1];
  const third = values[2];
  const fourth = values[3];

  // start moving
  if (first.rate === 0 && second.rate === 0 && third.rate === 0 && fourth.rate !== 0) {
    return 1 < fourth.rate ? 'quick start' : 'slow start';
  }

  if (second.rate < 2) {
    if (3 <= Math.abs(third.rate)) {
      if (3 <= Math.abs(fourth.rate - third.rate)) {
        if (fourth.rate === 0) {
          return 'just return';
        } else {
          return 'over return';
        }
      }
    }
  }

  return 'moving';
};
