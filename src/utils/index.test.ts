import { noop } from './index';

describe('utils', () => {
  describe('noop', () => {
    it('returns undefined', () => {
      expect(noop()).toBeUndefined();
    });

    it('can be called without throwing', () => {
      expect(() => noop()).not.toThrow();
    });
  });
});
