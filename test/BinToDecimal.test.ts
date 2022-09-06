import { binToDecimal } from '../src';

describe('binToDecimal', () => {
  it('Returns decimal value of bin', () => {
    expect(binToDecimal('11')).toEqual(3);
  });
});
