import { MotionUnit } from '../../motion-unit';
import { StoppingMovementInput } from '../types';

export const isStoppingMovementInput = (units: MotionUnit[]): units is StoppingMovementInput => {
  return (
    units.length === 10 && units[units.length - 1].rate === 0 && units[units.length - 2].rate === 0 && units[units.length - 3].rate === 0
  );
};
