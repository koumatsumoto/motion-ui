import { detectStopAndStartMovement } from './detect-stop-and-start-movement';

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

    expect(detectStopAndStartMovement(longHold)).toBe('long hold');
    expect(detectStopAndStartMovement(shortHold)).toBe('short hold');
    expect(detectStopAndStartMovement(stopping)).toBe('stopping');
    expect(detectStopAndStartMovement(slowStart)).toBe('slow start');
    expect(detectStopAndStartMovement(quickStart)).toBe('quick start');
  });
});
