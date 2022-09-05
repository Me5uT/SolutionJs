export const symmetricPoint = (
  p: [number, number],
  q: [number, number]
): [number, number] => {
  // Returns p symmetric to q
  return [q[0] - p[0] + q[0], q[1] - p[1] + q[1]];
};
