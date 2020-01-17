import { MotionUnit } from '../../motion-unit';
import { ClosedMovementInput } from '../types';

export const isClosed = (inputs: MotionUnit[]): inputs is ClosedMovementInput => {
  const last = inputs[inputs.length - 1];
  const beforeLast = inputs[inputs.length - 2];

  if (last.rate === 0) {
    if (beforeLast.rate !== 0) {
      return true;
    }
  } else {
    if (beforeLast.rate !== 0 && last.direction !== beforeLast.direction) {
      return true;
    }
  }

  return false;
};
