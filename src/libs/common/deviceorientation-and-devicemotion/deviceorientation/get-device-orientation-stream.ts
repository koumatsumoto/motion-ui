import { Observable } from 'rxjs';
import { getRx } from '../../rxjs';
import { DeviceOrientation, PartialDeviceOrientation } from '../types';
import { extract, onlyEntire } from './internal/rx-operators';

const getDeviceOrientationEventStream = () => {
  const Subject = getRx().Subject;
  const subject = new Subject<PartialDeviceOrientation>();

  window.addEventListener('deviceorientation', (e: DeviceOrientationEvent) => {
    subject.next(e);
  });

  return subject.asObservable();
};

/**
 * @param source - for testing
 */
export const getDeviceOrientationStream = (source: Observable<PartialDeviceOrientation> = getDeviceOrientationEventStream()) => {
  return source.pipe(extract(), onlyEntire()) as Observable<DeviceOrientation>;
};
