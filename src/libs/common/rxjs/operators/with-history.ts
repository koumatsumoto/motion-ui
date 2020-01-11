import { Observable } from 'rxjs';
import { FixedLengthArray } from '../../../../types';
import { getRx } from '../index';

export const withHistory = <L extends number>(n: L) => <T>(source: Observable<T>): Observable<FixedLengthArray<T, L>> => {
  const { Observable } = getRx();

  return new Observable<FixedLengthArray<T, L>>((subscriber) => {
    const values: T[] = [];
    return source.subscribe({
      next(x: T) {
        values.push(x);

        if (values.length > n) {
          values.shift();
          subscriber.next([...values] as FixedLengthArray<T, L>);
        } else if (values.length < n) {
          return;
        } else {
          subscriber.next([...values] as FixedLengthArray<T, L>);
        }
      },
      error(err: Error) {
        subscriber.error(err);
      },
      complete() {
        subscriber.complete();
      },
    });
  });
};
