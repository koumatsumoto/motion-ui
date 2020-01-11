import { StoppingMovementInput } from '../types';
import { longHoldCount, shortHoldCount } from '../constants';

export type StoppingMovementTypes = 'long hold' | 'short hold' | 'stopping';

export const detectStoppingMovement = (movements: StoppingMovementInput): StoppingMovementTypes => {
  let consecutive = 0;
  // check value from right
  for (let i = movements.length - 1; 0 <= i; i--) {
    if (movements[i].rate === 0) {
      consecutive++;
    } else {
      break;
    }
  }

  if (consecutive >= longHoldCount) {
    return 'long hold';
  } else if (consecutive >= shortHoldCount) {
    return 'short hold';
  } else {
    return 'stopping';
  }
};
