export type MotionUnit = {
  orientation: 'up' | 'down';
  direction: 'up' | 'down';
  // stopping, slightly, low, mid, high
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  // all direction of value change is same
  align: boolean;
};
