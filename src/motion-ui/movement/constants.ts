import { MovementInputCount } from './types';

// to detect movements
export const inputCount: MovementInputCount = 10;

// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
export const longHoldCount = inputCount;
// [...,0, 0, 0, 0, 0, 0, 0]
export const shortHoldCount = 7;
// [..., 0, 0, 0]
export const stoppingCount = 3;
// [..., 1, 0, 0]
export const startingIndex = inputCount - stoppingCount;

// these are for moving detection
export const firstMoveIndex = inputCount - stoppingCount;
export const secondMoveIndex = inputCount - 2;
export const thirdMoveIndex = inputCount - 1;
