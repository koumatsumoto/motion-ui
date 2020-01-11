type ZeroRate = 0;
type NonZeroRate = 1 | 2 | 3 | 4 | 5;
type Rate = ZeroRate | NonZeroRate;

export interface BaseMotionUnit {
  orientation: 'up' | 'down';
  direction: 'up' | 'down';
  // stopping, slightly, low, mid, high
  rate: Rate;
  // all direction of value change is same
  align: boolean;
}

export interface ZeroRateMotionUnit extends BaseMotionUnit {
  rate: ZeroRate;
}

export interface NonZeroRateMotionUnit extends BaseMotionUnit {
  rate: NonZeroRate;
}

export type MotionUnit = ZeroRateMotionUnit | NonZeroRateMotionUnit;

export type MotionUnitStreamOutput = { sid: number; data: MotionUnit };
