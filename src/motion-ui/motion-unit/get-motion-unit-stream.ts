import { Observable } from 'rxjs';
import { DeviceMotion, DeviceOrientation } from '../types';
import { getDeviceOrientationStream } from '../deviceorientation/get-device-orientation-stream';
import { getDeviceMotionStream } from '../devicemotion';
import { getRx } from '../../libs/common/rxjs';
import { summarize } from './internal/summarize';
import { unify } from './internal/classify-movement';
import { MotionUnit } from './types';

export const getMotionUnitStream = (
  orientation$: Observable<DeviceOrientation> = getDeviceOrientationStream(),
  motion$: Observable<DeviceMotion> = getDeviceMotionStream(),
): Observable<{ sid: number; data: MotionUnit }> => {
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
