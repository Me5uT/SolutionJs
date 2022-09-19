import { celciusToFahreneit } from '../src';

describe('celciusToFahreneit', () => {
  it('Returns fahreneit value', () => {
    expect(celciusToFahreneit(100)).toEqual(212);
  });
});
