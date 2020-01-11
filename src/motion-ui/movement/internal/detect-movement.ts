import { MovementInput, NewMovementTypes } from '../types';
import { isStoppingMovementInput } from './is-stopping-movement-input';
import { detectStoppingMovement } from './detect-stopping-movement';
import { detectMovingMovement } from './detect-moving-movement';

export const detectMovement = (units: MovementInput): NewMovementTypes => {
  if (isStoppingMovementInput(units)) {
    return detectStoppingMovement(units);
  } else {
    return detectMovingMovement(units);
  }
};
