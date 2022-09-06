import { perimeterOfRectangle } from '../src';

describe('perimeterOfRectangle', () => {
  it('Returns perimeter of rectangle', () => {
    expect(perimeterOfRectangle(6, 10)).toEqual(32);
  });
});
