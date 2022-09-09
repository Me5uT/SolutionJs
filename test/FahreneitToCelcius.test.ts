import { fahreneitToCelcius } from '../src';

describe('fahreneitToCelcius', () => {
  it('Return celcius value', () => {
    expect(fahreneitToCelcius(212)).toEqual(100);
  });
});
