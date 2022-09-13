import { findDifferences } from '../src';

describe('findDifferences', () => {
  it('Returns an array with [ inJustFirstArray, sameElements, inJustSecondArray ]', () => {
    expect(findDifferences([1, 'a', 2, 'b', 3], ['b', 3, 4])).toEqual([
      [1, 'a', 2],
      ['b', 3],
      [4],
    ]);
  });
});
