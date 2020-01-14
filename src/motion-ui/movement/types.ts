import { FixedLengthArray } from '../../types';
import { MotionUnit, ZeroRateMotionUnit } from '../motion-unit';

// deprecated, use NewMovementTypes
export type MovementTypes = 'long hold' | 'short hold' | 'stopping' | 'quick start' | 'slow start';
export type NewMovementTypes = string;

export type MovementStreamOutput = {
  type: MovementTypes;
  // [first, last]
  sid?: number[];
};

export type MovementInputCount = 10;
export type MovingMovementInput = FixedLengthArray<MotionUnit, 10>;

export type StoppingMovementInput = [
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  ZeroRateMotionUnit,
  ZeroRateMotionUnit,
  ZeroRateMotionUnit,
];

export type MovementInput = StoppingMovementInput | MovingMovementInput;

export type MovementOutput = {
  type: 'close';
  gradient: number;
};
