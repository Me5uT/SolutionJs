import { findMin } from '../src';

describe('findMin', () => {
  it('Returns minimum value in array', () => {
    expect(findMin([5, 3, 2, 7, 4])).toEqual(2);
  });
});
