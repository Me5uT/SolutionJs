import { capitalizeFirstCharacter } from '../src';

describe('capitalizeFirstCharacter', () => {
  it('Returns words, first letters capitalized', () => {
    expect(capitalizeFirstCharacter('mesuT caGa')).toEqual('Mesut Caga');
  });
});
