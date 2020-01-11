import { MovementInput, NewMovementTypes } from '../types';
import { detectMovingMovement } from './detect-moving-movement';
import { detectStoppingMovement } from './detect-stopping-movement';
import { isStoppingMovementInput } from './is-stopping-movement-input';

export const detectMovement = (units: MovementInput): NewMovementTypes => {
  if (isStoppingMovementInput(units)) {
    return detectStoppingMovement(units);
  } else {
    return detectMovingMovement(units);
  }
};
