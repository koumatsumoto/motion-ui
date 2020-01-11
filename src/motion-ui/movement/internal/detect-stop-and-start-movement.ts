import { StoppingMovementInput } from '../types';
import { longHoldCount, shortHoldCount, startingIndex } from '../constants';

export type StopAndStartMovementTypes = 'long hold' | 'short hold' | 'stopping' | 'quick start' | 'slow start';

export const detectStopAndStartMovement = (movements: StoppingMovementInput): StopAndStartMovementTypes => {
  if (movements[startingIndex].rate !== 0) {
    return movements[startingIndex].rate > 1 ? 'quick start' : 'slow start';
  }

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
