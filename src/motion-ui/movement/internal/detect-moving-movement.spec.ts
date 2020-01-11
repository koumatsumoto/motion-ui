import { createMotionUnit, defaultMotionUnit } from '../../test-helpers';
import { FixedLengthArray } from '../../../types';
import { MotionUnit } from '../../motion-unit';
import { MovingMovementInput } from '../types';
import { detectMovingMovement } from './detect-moving-movement';

const createInputs = (lastFour: FixedLengthArray<MotionUnit, 4>): MovingMovementInput => {
  return [
    defaultMotionUnit,
    defaultMotionUnit,
    defaultMotionUnit,
    defaultMotionUnit,
    defaultMotionUnit,
    defaultMotionUnit,
    lastFour[0] as any,
    lastFour[1] as any,
    lastFour[2] as any,
    lastFour[3] as any,
  ];
};

describe('detectMovingMovement', () => {
  it('should detect starting move', () => {
    expect(
      detectMovingMovement(
        createInputs([
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 1 }),
        ]),
      ),
    ).toBe('slow start');
    expect(
      detectMovingMovement(
        createInputs([
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 2 }),
        ]),
      ),
    ).toBe('quick start');
  });

  it('should detect a return', () => {
    expect(
      detectMovingMovement(
        createInputs([
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 3 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
        ]),
      ),
    ).toBe('just return');
    expect(
      detectMovingMovement(
        createInputs([
          createMotionUnit({ direction: 'down', rate: 0 }),
          createMotionUnit({ direction: 'down', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 3 }),
          createMotionUnit({ direction: 'down', rate: 1 }),
        ]),
      ),
    ).toBe('over return');
  });

  it('should not detect a return', () => {
    expect(
      detectMovingMovement(
        createInputs([
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 2 }),
          createMotionUnit({ direction: 'down', rate: 3 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
        ]),
      ),
    ).toBe('moving');
    expect(
      detectMovingMovement(
        createInputs([
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 0 }),
          createMotionUnit({ direction: 'up', rate: 3 }),
          createMotionUnit({ direction: 'up', rate: 1 }),
        ]),
      ),
    ).toBe('moving');
  });
});
