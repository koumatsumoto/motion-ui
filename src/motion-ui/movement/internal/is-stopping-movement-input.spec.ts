import { isStoppingMovementInput } from './is-stopping-movement-input';

describe('isStoppingMovementInput', () => {
  it('should work', () => {
    const zero = { rate: 0 };
    const nonZero = { rate: 1 };
    const invalid: any[] = [nonZero, nonZero, nonZero, nonZero, nonZero, nonZero, nonZero, nonZero, zero, zero];
    const valid: any[] = [nonZero, nonZero, nonZero, nonZero, nonZero, nonZero, nonZero, zero, zero, zero];

    expect(isStoppingMovementInput(invalid)).toBe(false);
    expect(isStoppingMovementInput(valid)).toBe(true);
  });
});
