import { Observable } from 'rxjs';
import { getRx } from '../../../libs/common/rxjs';
import { PartialDeviceOrientation } from '../../types';
import { isEntireDeviceOrientation } from './is-entire';

/**
 * strip unnecessary properties of Event class
 */
export const extract = () => (source: Observable<PartialDeviceOrientation>) => {
  const { map } = getRx().operators;

  return source.pipe(
    map((v) => ({
      absolute: v.absolute,
      alpha: v.alpha,
      beta: v.beta,
      gamma: v.gamma,
    })),
  );
};

export const onlyEntire = () => (source: Observable<PartialDeviceOrientation>) => {
  const { filter } = getRx().operators;

  return source.pipe(filter(isEntireDeviceOrientation));
};
