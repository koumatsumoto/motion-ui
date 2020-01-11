import { detectStoppingMovement } from './detect-stopping-movement';

describe('detectStopAndStartMovement', () => {
  it('should work', () => {
    const zero = { rate: 0 };
    const gtOne = { rate: 2 };
    const longHold: any = [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero];
    const shortHold: any = [zero, zero, gtOne, zero, zero, zero, zero, zero, zero, zero];
    const stopping: any = [zero, zero, zero, zero, zero, gtOne, zero, zero, zero, zero];

    expect(detectStoppingMovement(longHold)).toBe('long hold');
    expect(detectStoppingMovement(shortHold)).toBe('short hold');
    expect(detectStoppingMovement(stopping)).toBe('stopping');
  });
});
