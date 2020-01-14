import { createMotionUnit } from '../../test-helpers';
import { detectClose } from './detect-close';

describe('detectClose', () => {
  const v = createMotionUnit;
  it('should work', () => {
    expect(
      detectClose(
        v({
          direction: 'up',
          rate: 0,
        }),
        v({
          direction: 'up',
          rate: 1,
        }),
      ),
    ).toEqual({
      type: 'close',
      gradient: 1,
    });
    expect(
      detectClose(
        v({
          direction: 'up',
          rate: 0,
        }),
        v({
          direction: 'down',
          rate: 1,
        }),
      ),
    ).toEqual({
      type: 'close',
      gradient: 1,
    });
    expect(
      detectClose(
        v({
          direction: 'up',
          rate: 1,
        }),
        v({
          direction: 'down',
          rate: 1,
        }),
      ),
    ).toEqual({
      type: 'close',
      gradient: 2,
    });
  });
});
