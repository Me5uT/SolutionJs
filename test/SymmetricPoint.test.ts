import { symmetricPoint } from '../src';

describe('symmetricPoint', () => {
  it('symmetric points method works', () => {
    expect(symmetricPoint([2, 6], [-2, -6])).toEqual([-6, -18]);
  });
});
