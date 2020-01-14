import { createMotionUnit } from '../../test-helpers';
import { isClosed } from './is-closed';

describe('isClosed', () => {
  const v = createMotionUnit;

  it('should work', () => {
    expect(
      isClosed(
        v({
          direction: 'up',
          rate: 0,
        }),
        v({
          direction: 'up',
          rate: 1,
        }),
      ),
    ).toBe(true);
    expect(
      isClosed(
        v({
          direction: 'up',
          rate: 0,
        }),
        v({
          direction: 'down',
          rate: 1,
        }),
      ),
    ).toBe(true);
    expect(
      isClosed(
        v({
          direction: 'up',
          rate: 1,
        }),
        v({
          direction: 'up',
          rate: 1,
        }),
      ),
    ).toBe(false);
    expect(
      isClosed(
        v({
          direction: 'up',
          rate: 1,
        }),
        v({
          direction: 'down',
          rate: 1,
        }),
      ),
    ).toBe(true);
  });
});
