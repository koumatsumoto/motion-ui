import { getRx, withHistory } from '../libs/common/rxjs';
import { getMovementStream, MovementStreamOutput } from './movement';
import { getMotionUnitStream } from './motion-unit';

export const debug3 = () => {
  const { filter, map } = getRx().operators;

  return getMotionUnitStream().pipe(
    filter((d) => d.data.rate > 0),
    map((d) => {
      const di = d.data.direction === 'up' ? 'u' : 'd';
      return `${di}-${d.data.rate}: ${d.sid}`;
    }),
    withHistory(32),
    map((array) => array.reverse()),
  );
};

export const debug4 = () => {
  const { map } = getRx().operators;

  return getMotionUnitStream().pipe(
    map((d) => {
      const di = d.data.direction === 'up' ? 'u' : 'd';
      return `${di}-${d.data.rate}: ${d.sid}`;
    }),
    withHistory(32),
    map((array) => array.reverse()),
  );
};

export const getCommandHistoryStream = () => {
  const { map } = getRx().operators;

  return getMovementStream().pipe(
    withHistory(32),
    map((values) => values.map((v) => v.type).reverse()),
  );
};

export const getLastCommandStream = () => {
  const { distinctUntilChanged, map } = getRx().operators;

  return getMovementStream().pipe(
    map((v) => v.type),
    distinctUntilChanged(),
    withHistory(32),
    map((values) => values.reverse()),
  );
};

type Command = {
  type: string;
  // [first, last]
  sid?: number[];
};

export const getCommandStream = () => {
  const { Observable } = getRx();
  const { map } = getRx().operators;
  const actionCount = 6;

  return new Observable<MovementStreamOutput>((subscriber) => {
    getMovementStream().pipe(
      withHistory(actionCount),
      map((action) => {
        // not implemented
      }),
    );
  });
};
