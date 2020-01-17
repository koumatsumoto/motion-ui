import { MotionUnit } from '../../../motion-unit';
import { createMotionUnit } from '../../../test-helpers';
import { detectClose } from './detect-close';

describe('detectClose', () => {
  const v = (...args: Partial<MotionUnit>[]) => args.map((i) => createMotionUnit(i));

  it('should work', () => {
    expect(
      detectClose(
        v(
          {
            direction: 'up',
            rate: 0,
          },
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
    ).toEqual({
      closingGradient: 1,
      openingGradient: 1,
      type: 'close',
    });
    expect(
      detectClose(
        v(
          {
            direction: 'up',
            rate: 2,
          },
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
    ).toEqual({
      closingGradient: 1,
      openingGradient: 3,
      type: 'close',
    });
    expect(
      detectClose(
        v(
          {
            direction: 'up',
            rate: 1,
          },
          {
            direction: 'down',
            rate: 1,
          },
          {
            direction: 'up',
            rate: 2,
          },
        ),
      ),
    ).toEqual({
      closingGradient: 3,
      openingGradient: 2,
      type: 'close',
    });
  });
});
