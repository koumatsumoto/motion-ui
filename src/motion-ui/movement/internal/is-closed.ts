import { MotionUnit } from '../../motion-unit';

export const isClosed = (last: MotionUnit, beforeLast: MotionUnit): boolean => {
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
