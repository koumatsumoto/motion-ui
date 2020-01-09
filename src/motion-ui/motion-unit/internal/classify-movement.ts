import { MotionUnit } from '../types';
import { Summary } from './summarize';

type Threshold = {
  veryHigh: number;
  high: number;
  tap: number;
  low: number;
  // equalize values if under
  // TODO: consider rename to steady
  round: number;
};

// TODO: make generalize for other types like as alpha, beta, x, y, z
export const defaultThreshold: Threshold = {
  veryHigh: 120,
  high: 90,
  // to detect tap
  tap: 38,
  low: 20,
  round: 10,
};

const calcRate = (value: number, threshold: Threshold) => {
  if (value > threshold.veryHigh) {
    return 5;
  } else if (value > threshold.high) {
    return 4;
  } else if (value > threshold.tap) {
    return 3;
  } else if (value > threshold.low) {
    return 2;
  } else if (value > threshold.round) {
    return 1;
  } else {
    return 0;
  }
};

export const unify = (a: Summary, threshold: Threshold = defaultThreshold): MotionUnit => {
  if (a.first < a.last) {
    // up
    const rate = calcRate(a.last - a.first, threshold);
    const align = a.count === a.increase;

    return {
      orientation: a.orientation,
      direction: 'up',
      rate,
      align,
    };
  } else if (a.first > a.last) {
    // down
    const rate = calcRate(a.first - a.last, threshold);
    const align = a.count === a.decrease;

    return {
      orientation: a.orientation,
      direction: 'down',
      rate,
      align,
    };
  } else {
    let betweenPositive: number;
    let betweenNegative: number;
    if (a.first > 0) {
      betweenPositive = a.max - a.first;
      betweenNegative = a.min > 0 ? a.first - a.min : Math.abs(a.min - a.first);
    } else {
      betweenPositive = a.max < 0 ? Math.abs(a.first + a.max) : a.max - a.first;
      betweenNegative = Math.abs(a.min + a.first);
    }

    return {
      orientation: a.orientation,
      direction: betweenPositive > betweenNegative ? 'up' : 'down',
      rate: 0,
      align: a.first === a.max && a.first === a.min,
    };
  }
};
