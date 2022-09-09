import { swapObjKeyAndValue } from '../src';

describe('swapObjKeyAndValue', () => {
  it("Swap the Javascript object's key with its values and return the resulting object", () => {
    expect(swapObjKeyAndValue({ a: 'b', c: 'd', e: 'f' })).toEqual({
      b: 'a',
      d: 'c',
      f: 'e',
    });
  });
});
