import { detectStoppingMovement } from './detect-stopping-movement';

describe('detectStopAndStartMovement', () => {
  it('should work', () => {
    const zero = { rate: 0 };
    const one = { rate: 1 };
    const gtOne = { rate: 2 };
    const longHold: any = [zero, zero, zero, zero, zero, zero, zero, zero, zero, zero];
    const shortHold: any = [zero, zero, gtOne, zero, zero, zero, zero, zero, zero, zero];
    const stopping: any = [zero, zero, zero, zero, zero, gtOne, zero, zero, zero, zero];
    const slowStart: any = [zero, zero, zero, zero, zero, zero, zero, one, zero, zero];
    const quickStart: any = [zero, zero, zero, zero, zero, zero, zero, gtOne, zero, zero];

    expect(detectStoppingMovement(longHold)).toBe('long hold');
    expect(detectStoppingMovement(shortHold)).toBe('short hold');
    expect(detectStoppingMovement(stopping)).toBe('stopping');
    expect(detectStoppingMovement(slowStart)).toBe('slow start');
    expect(detectStoppingMovement(quickStart)).toBe('quick start');
  });
});
