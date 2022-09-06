import { areaOfSquare } from '../src';

describe('areaOfSquare', () => {
  it('Returns area of square', () => {
    expect(areaOfSquare(4)).toEqual(16);
  });
});
