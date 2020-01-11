import { MovementInputCount } from './types';

// to detect movements
export const inputCount: MovementInputCount = 10;

// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
export const longHoldCount = inputCount;
// [...,0, 0, 0, 0, 0, 0, 0]
export const shortHoldCount = 7;
// [..., 0, 0, 0]
export const stoppingCount = 3;

// these are for moving detection
export const firstMoveIndex = inputCount - 4;
export const secondMoveIndex = inputCount - 3;
export const thirdMoveIndex = inputCount - 2;
export const fourthMoveIndex = inputCount - 1;
