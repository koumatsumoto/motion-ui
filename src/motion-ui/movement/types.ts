import { MotionUnit, NonZeroRateMotionUnit, ZeroRateMotionUnit } from '../motion-unit';

// deprecated, use NewMovementTypes
export type MovementTypes = 'long hold' | 'short hold' | 'stopping' | 'quick start' | 'slow start';
export type NewMovementTypes = string;

export type MovementStreamOutput = {
  type: MovementTypes;
  // [first, last]
  sid?: number[];
};

export type MovementInputCount = 10;

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

export type MovingMovementInput = [
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  MotionUnit,
  NonZeroRateMotionUnit,
  NonZeroRateMotionUnit,
];

export type MovementInput = StoppingMovementInput | MovingMovementInput;
