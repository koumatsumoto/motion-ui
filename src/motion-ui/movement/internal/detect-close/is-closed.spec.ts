import { MotionUnit } from '../../../motion-unit';
import { createMotionUnit } from '../../../test-helpers';
import { isClosed } from './is-closed';

describe('isClosed', () => {
  const v = (a: Partial<MotionUnit>, b: Partial<MotionUnit>) => [createMotionUnit(a), createMotionUnit(b)];

  it('should work', () => {
    expect(
      isClosed(
        v(
          {
            direction: 'up',
            rate: 1,
          },
          {
            direction: 'up',
            rate: 0,
          },
        ),
      ),
    ).toBe(true);
    expect(
      isClosed(
        v(
          {
            direction: 'down',
            rate: 1,
          },
          {
            direction: 'up',
            rate: 0,
          },
        ),
      ),
    ).toBe(true);
    expect(
      isClosed(
        v(
          {
            direction: 'up',
            rate: 1,
          },
          {
            direction: 'up',
            rate: 1,
          },
        ),
      ),
    ).toBe(false);
    expect(
      isClosed(
        v(
          {
            direction: 'down',
            rate: 1,
          },
          {
            direction: 'up',
            rate: 1,
          },
        ),
      ),
    ).toBe(true);
  });
});
