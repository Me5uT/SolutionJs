import { findMax } from '../src';

describe('findMax', () => {
  it('Returns maximum value in array', () => {
    expect(findMax([5, 3, 2, 7, 4])).toEqual(7);
  });
});
