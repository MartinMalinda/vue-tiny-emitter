import { emitter } from '../src';

describe('emitter', () => {
  it('can be accessed', () => {
    expect(!!emitter).toBe(true);
  });
});
