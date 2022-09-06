import { groupByFirstLetter } from '../src';

describe('groupByFirstLetter', () => {
  it('Returns an object grouped by first letter', () => {
    expect(groupByFirstLetter(['Alf', 'Alice', 'Ben'])).toEqual({
      a: ['Alf', 'Alice'],
      b: ['Ben'],
    });
  });
});
