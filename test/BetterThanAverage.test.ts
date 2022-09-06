import { isBetterThanAverage } from '../src';

describe('isBetterThanAverage', () => {
  it('Returns true if your point greater than average of otherPoints, otherwise false', () => {
    expect(isBetterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toEqual(
      true
    );
  });
});
