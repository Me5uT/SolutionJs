import { hexToDecimal } from '../src';

describe('hexToDecimal', () => {
  it('Returns decimal value by converted hex string', () => {
    expect(hexToDecimal('FF')).toEqual(255);
  });
});
