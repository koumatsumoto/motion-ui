import { MotionUnit } from '../../motion-unit';
import { MovementOutput } from '../types';
import { isClosed } from './is-closed';

export const detectClose = (last: MotionUnit, beforeLast: MotionUnit): MovementOutput | null => {
  return isClosed(last, beforeLast)
    ? {
        type: 'close',
        gradient: last.rate + beforeLast.rate,
      }
    : null;
};
