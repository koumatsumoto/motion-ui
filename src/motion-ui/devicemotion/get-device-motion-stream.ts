import { Observable } from 'rxjs';
import { getRx } from '../../libs/common/rxjs';
import { DeviceMotion, PartialDeviceMotion } from '../types';
import { onlyEntire } from './internal/rx-operators';

const getDeviceMotionEventStream = () => {
  const Subject = getRx().Subject;
  const subject = new Subject<PartialDeviceMotion>();

  window.addEventListener('devicemotion', (e: DeviceMotionEvent) => {
    subject.next(e);
  });

  return subject.asObservable();
};

/**
 * @param source - for testing
 */
export const getDeviceMotionStream = (source: Observable<PartialDeviceMotion> = getDeviceMotionEventStream()) => {
  return source.pipe(onlyEntire()) as Observable<DeviceMotion>;
};
