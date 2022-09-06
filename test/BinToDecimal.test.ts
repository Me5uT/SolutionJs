import { binToDecimal } from '../src';

describe('binToDecimal', () => {
  it('convert bin to decimal', () => {
    expect(binToDecimal('11')).toEqual(3);
  });
});
