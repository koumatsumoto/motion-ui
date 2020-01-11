import { Observable } from 'rxjs';
import { getRx } from '../../../libs/common/rxjs';
import { DeviceMotion, DeviceMotionValue, DeviceMotionWithChange, PartialDeviceMotion } from '../../types';
import { calculateAverage } from './calculate-average';
import { getDifference } from './get-difference';
import { isEntireDeviceMotion } from './is-entire';

// TODO: use pairwise
export const withChange = () => (source: Observable<DeviceMotion>) => {
  const { scan, skip } = getRx().operators;

  return source.pipe(
    scan<DeviceMotion, DeviceMotionWithChange, null>((state, val) => {
      if (state === null) {
        return {
          data: val,
          // must be skipped below, skip(1)
          change: undefined as any,
        };
      } else {
        return {
          data: val,
          change: getDifference(state.data, val),
        };
      }
    }, null),
    skip(1),
  ) as Observable<DeviceMotionWithChange>;
};

/**
 * @param denominator - default value is 4, used as buffer count
 */
export const toAverage = (denominator = 4) => (source: Observable<DeviceMotionValue>) => {
  const { bufferCount, map } = getRx().operators;

  return source.pipe(
    bufferCount(denominator),
    map((items: DeviceMotionValue[]) => calculateAverage(items)),
  );
};

export const onlyEntire = () => (source: Observable<PartialDeviceMotion>) => {
  const { filter } = getRx().operators;

  return source.pipe(filter(isEntireDeviceMotion));
};
