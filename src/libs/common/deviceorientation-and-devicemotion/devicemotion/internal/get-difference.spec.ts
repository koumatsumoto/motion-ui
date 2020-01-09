import { getDifference } from './get-difference';

describe('getDifference', () => {
  it('should calculate values as expected', () => {
    expect(
      getDifference(
        {
          acceleration: {
            x: 0,
            y: 0,
            z: 0,
          },
          accelerationIncludingGravity: {
            x: 0,
            y: 0,
            z: 0,
          },
          rotationRate: {
            alpha: 0,
            beta: 0,
            gamma: 0,
          },
        },
        {
          acceleration: {
            x: 0.00001,
            y: 0.0001,
            z: 0.001,
          },
          accelerationIncludingGravity: {
            x: 0.01,
            y: 0.1,
            z: 0,
          },
          rotationRate: {
            alpha: 1,
            beta: 10,
            gamma: 100,
          },
        },
      ),
    ).toEqual({
      acceleration: {
        x: 0.00001,
        y: 0.0001,
        z: 0.001,
      },
      accelerationIncludingGravity: {
        x: 0.01,
        y: 0.1,
        z: 0,
      },
      rotationRate: {
        alpha: 1,
        beta: 10,
        gamma: 100,
      },
    });
  });
});
