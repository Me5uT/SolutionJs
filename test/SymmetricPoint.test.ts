import { symmetricPoint } from '../src';

describe('symmetricPoint', () => {
  it('Returns the symmetry of the first point to the second point', () => {
    expect(symmetricPoint([2, 6], [-2, -6])).toEqual([-6, -18]);
  });
});
