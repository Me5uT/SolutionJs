import { reverseString } from '../src';

describe('reverseString', () => {
  it('Returns a string, reserved of given string', () => {
    expect(reverseString('mesut')).toEqual('tusem');
  });
});
