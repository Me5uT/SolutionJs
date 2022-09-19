import { binToDecimal } from '../src';

describe('binToDecimal', () => {
  it('Returns decimal value of given bin value', () => {
    expect(binToDecimal('11')).toEqual(3);
  });
});
