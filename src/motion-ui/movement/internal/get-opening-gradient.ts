import { ClosedMovementInput } from '../types';

export const getOpeningGradient = (inputs: ClosedMovementInput): number | null => {
  if (inputs.length < 2) {
    throw new Error('');
  }

  const beforeLast = inputs[inputs.length - 2];
  const openDirection = beforeLast.direction;
  for (let i = inputs.length - 3; 0 <= i; i--) {
    // check open point
    if (inputs[i].rate === 0 || inputs[i].direction !== openDirection) {
      const openPoint = inputs[i];
      const afterOpenPoint = inputs[i + 1];

      // gradient
      return openPoint.rate + afterOpenPoint.rate;
    }
  }

  // case when closed after over 10 more points.
  return null;
};
