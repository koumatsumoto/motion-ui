import { MovingMovementInput } from '../types';
import { firstMoveIndex, secondMoveIndex, thirdMoveIndex } from '../constants';
import { simplifyMovements } from './util';

type MovingMovementTypes = 'just return' | 'over return' | 'moving';

/**
 * @param inputs
 */
export const detectMovingMovement = (inputs: MovingMovementInput): MovingMovementTypes => {
  // convert relative rate like as [1, -3, 2] (first value is always positive or zero)
  const values = simplifyMovements([inputs[firstMoveIndex], inputs[secondMoveIndex], inputs[thirdMoveIndex]]);
  const first = values[0];
  const second = values[1];
  const third = values[2];

  if (first.rate === 0 || first.rate === 1) {
    if (3 <= Math.abs(second.rate)) {
      if (3 <= Math.abs(third.rate - second.rate)) {
        if (third.rate === 0) {
          return 'just return';
        } else {
          return 'over return';
        }
      }
    }
  }

  return 'moving';
};
