import { areaOfCircle } from '../src';

describe('areaOfCircle', () => {
  it('Returns area of circle', () => {
    expect(areaOfCircle(20)).toEqual(1256.64);
  });
});
