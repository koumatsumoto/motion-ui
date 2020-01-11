import { Observable } from 'rxjs';
import { getRx } from '../../libs/common/rxjs';
import { getDeviceMotionStream } from '../devicemotion';
import { getDeviceOrientationStream } from '../deviceorientation/get-device-orientation-stream';
import { DeviceMotion, DeviceOrientation } from '../types';
import { unify } from './internal/classify-movement';
import { summarize } from './internal/summarize';
import { MotionUnitStreamOutput } from './types';

export const getMotionUnitStream = (
  orientation$: Observable<DeviceOrientation> = getDeviceOrientationStream(),
  motion$: Observable<DeviceMotion> = getDeviceMotionStream(),
): Observable<MotionUnitStreamOutput> => {
  const { bufferCount, map, withLatestFrom } = getRx().operators;

  let sid = 0;
  return motion$.pipe(
    bufferCount(4),
    withLatestFrom(orientation$),
    map(([motions, orientation]) => {
      const gammas = motions.map((m) => m.rotationRate.gamma);
      const motionUnit = summarize(orientation.gamma, gammas);
      const data = unify(motionUnit);

      return {
        sid: sid++,
        data,
      };
    }),
  );
};
