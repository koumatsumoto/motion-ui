import { getDeviceMotionStream } from './get-device-motion-stream';

describe('getDeviceMotionStream', () => {
  it('should be callable', () => {
    const $ = getDeviceMotionStream();
    expect(typeof $.subscribe).toBe('function');
    expect(typeof $.pipe).toBe('function');
    expect(() => getDeviceMotionStream()).not.toThrow();
  });
});
