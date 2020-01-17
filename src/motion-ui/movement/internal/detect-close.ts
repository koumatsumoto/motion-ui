import { MotionUnit } from '../../motion-unit';
import { MovementOutput } from '../types';
import { getOpeningGradient } from './get-opening-gradient';
import { isClosed } from './is-closed';

export const detectClose = (inputs: MotionUnit[]): MovementOutput | null => {
  const last = inputs[inputs.length - 1];
  const beforeLast = inputs[inputs.length - 2];

  if (isClosed(inputs)) {
    return {
      type: 'close',
      closingGradient: last.rate + beforeLast.rate,
      openingGradient: getOpeningGradient(inputs),
    };
  }

  return null;
};
