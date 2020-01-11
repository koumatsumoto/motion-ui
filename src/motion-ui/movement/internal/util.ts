import { FixedLengthArray, LengthOf } from '../../../types';
import { MotionUnit } from '../../motion-unit';

export type LinearizedMovement = {
  rate: -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;
  // all direction of value change is same
  align: boolean;
};

export const linearize = <T extends MotionUnit[]>(movements: T): FixedLengthArray<LinearizedMovement, LengthOf<T>> => {
  if (movements.length === 0) {
    return [];
  }

  let baseDirection: MotionUnit['direction'] | undefined;
  return movements.map((m) => {
    if (baseDirection === undefined && m.rate !== 0) {
      baseDirection = m.direction;
    }

    if (baseDirection === undefined || m.direction === baseDirection) {
      return {
        rate: m.rate,
        align: m.align,
      };
    } else {
      return {
        // avoid -0
        rate: m.rate === 0 ? 0 : (-m.rate as LinearizedMovement['rate']),
        align: m.align,
      };
    }
  });
};

export const contain = (source: number[], pattern: number[]): boolean => {
  for (let i = 0; i <= source.length - pattern.length; i++) {
    let mismatch = false;
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] === source[i + j]) {
        continue;
      } else {
        mismatch = true;
        break;
      }
    }

    if (!mismatch) {
      return true;
    }
  }

  return false;
};

export const diff = (x: number, y: number) => {
  switch (true) {
    case 0 <= x && 0 <= y: {
      return x < y ? y - x : x - y;
    }
    case 0 <= x && y < 0: {
      return x - y;
    }
    case x < 0 && 0 <= y: {
      return y - x;
    }
    case x < 0 && y < 0: {
      return x < y ? y - x : x - y;
    }
    default: {
      throw new Error('Unreachable');
    }
  }
};
