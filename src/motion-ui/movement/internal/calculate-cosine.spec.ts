import { calculateCosine } from './calculate-cosine';

describe('calculateCosine', () => {
  it('should work', () => {
    expect(calculateCosine(0, 1, -3)).toBe(-0.19611613513818418);
    expect(calculateCosine(0, 1, -2)).toBe(0);
    expect(calculateCosine(0, 1, -1)).toBe(0.31622776601683805);
    expect(calculateCosine(0, 1, 0)).toBe(0.7071067811865474);
    expect(calculateCosine(0, 1, 1)).toBe(0.948683298050514);
    expect(calculateCosine(0, 1, 2)).toBe(null);
    expect(calculateCosine(0, 1, 3)).toBe(0.9805806756909197);
    expect(calculateCosine(0, 2, -3)).toBe(-0.49613893835683365);
    expect(calculateCosine(0, 2, -2)).toBe(-0.3162277660168376);
    expect(calculateCosine(0, 2, -1)).toBe(0);
    expect(calculateCosine(0, 2, 0)).toBe(0.4472135954999578);
    expect(calculateCosine(0, 2, 1)).toBe(0.8);
    expect(calculateCosine(0, 2, 2)).toBe(0.948683298050514);
    expect(calculateCosine(0, 2, 3)).toBe(0.9922778767136677);
    expect(calculateCosine(0, 3, -3)).toBe(-0.6139406135149201);
    expect(calculateCosine(0, 3, -2)).toBe(-0.44721359549995754);
    expect(calculateCosine(0, 3, -1)).toBe(-0.14142135623730923);
    expect(calculateCosine(0, 3, 0)).toBe(0.31622776601683794);
    expect(calculateCosine(0, 3, 1)).toBe(0.7071067811865477);
    expect(calculateCosine(0, 3, 2)).toBe(0.8944271909999161);
    expect(calculateCosine(0, 3, 3)).toBe(0.9647638212377322);
  });
});
