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
export const fourthLastIndex = inputCount - 4;
export const thirdLastIndex = inputCount - 3;
export const secondLastIndex = inputCount - 2;
export const lastIndex = inputCount - 1;
