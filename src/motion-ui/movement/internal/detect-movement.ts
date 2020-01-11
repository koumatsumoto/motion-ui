import { MovementInput, NewMovementTypes } from '../types';
import { isStoppingMovementInput } from './is-stopping-movement-input';
import { detectStopAndStartMovement } from './detect-stop-and-start-movement';
import { detectMovingMovement } from './detect-moving-movement';

export const detectMovement = (units: MovementInput): NewMovementTypes => {
  if (isStoppingMovementInput(units)) {
    return detectStopAndStartMovement(units);
  } else {
    return detectMovingMovement(units);
  }
};
