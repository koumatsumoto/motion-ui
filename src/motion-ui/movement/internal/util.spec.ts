import { MotionUnit } from '../../motion-unit';
import { contain, diff, linearize } from './util';

describe('linearize', () => {
  const v = (rate: MotionUnit['rate'], direction: MotionUnit['direction']): MotionUnit => ({
    rate,
    direction,
    orientation: 'up',
    align: true,
  });

  it('should work', () => {
    expect(linearize([v(1, 'up'), v(1, 'down')])).toEqual([
      {
        rate: 1,
        align: true,
      },
      {
        rate: -1,
        align: true,
      },
    ]);
    expect(linearize([v(0, 'up'), v(0, 'down')])).toEqual([
      {
        rate: 0,
        align: true,
      },
      {
        rate: 0,
        align: true,
      },
    ]);
    expect(linearize([v(0, 'up'), v(0, 'down'), v(1, 'up')])).toEqual([
      {
        align: true,
        rate: 0,
      },
      {
        align: true,
        rate: 0,
      },
      {
        align: true,
        rate: 1,
      },
    ]);
  });
});

describe('contain', () => {
  it('should work', () => {
    const source = [0, 1, 2, 3, 4];
    expect(contain(source, [0, 1, 2])).toBe(true);
    expect(contain(source, [2, 3, 4])).toBe(true);
    expect(contain(source, [0, 1, 3])).toBe(false);
    expect(contain(source, [3, 4, 5])).toBe(false);
  });
});

describe('diff', () => {
  it('should work', () => {
    expect(diff(3, 1)).toBe(2);
    expect(diff(1, 3)).toBe(2);
    expect(diff(0, 0)).toBe(0);
    expect(diff(3, -1)).toBe(4);
    expect(diff(-1, 3)).toBe(4);
    expect(diff(-1, -1)).toBe(0);
    expect(diff(-3, -1)).toBe(2);
    expect(diff(-1, -3)).toBe(2);
  });
});
