import { Writeable } from '../../../types';
import { roundToInt } from '../../../libs/common/arithmetic';

/**
 * NOTE:
 *
 * - orientation.gamma
 *   - positive if right
 *   - negative if left
 * - rotationRate.gamma
 *   - positive if tilting to left
 *   - negative if tilting to right
 *
 */
export type Summary = {
  readonly orientation: 'up' | 'down';
  readonly count: number;
  readonly increase: number;
  readonly decrease: number;
  readonly nochange: number;
  readonly first: number;
  readonly last: number;
  readonly max: number;
  readonly min: number;
  readonly avg: number;
};

// TODO: currently used only for gamma
export const summarize = (orientation: number, accelerations: number[]): Summary => {
  if (accelerations.length < 2) {
    throw new Error('bad impl');
  }

  const first = accelerations[0];
  const last = accelerations[accelerations.length - 1];

  const summary: Writeable<Summary> = {
    orientation: orientation >= 0 ? 'up' : 'down',
    count: accelerations.length,
    increase: 0,
    decrease: 0,
    nochange: 0,
    first,
    last,
    max: accelerations[0],
    min: accelerations[0],
    avg: accelerations[0],
  };

  let sum = 0;
  for (let i = 1; i < accelerations.length; i++) {
    const p = accelerations[i - 1];
    const v = accelerations[i];
    if (v > p) {
      summary.increase++;
    } else if (v < p) {
      summary.decrease++;
    } else {
      summary.nochange++;
    }

    sum += v;
    summary.max = Math.max(summary.max, v);
    summary.min = Math.min(summary.min, v);
  }

  summary.avg = sum / summary.count;
  summary.avg = roundToInt(summary.avg);
  summary.min = roundToInt(summary.min);
  summary.max = roundToInt(summary.max);
  summary.first = roundToInt(summary.first);
  summary.last = roundToInt(summary.last);

  return summary;
};
