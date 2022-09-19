export const symmetricPoint = (
  p: [number, number],
  q: [number, number]
): [number, number] => {
  // Returns the symmetry of the first point to the second point
  return [q[0] - p[0] + q[0], q[1] - p[1] + q[1]];
};
