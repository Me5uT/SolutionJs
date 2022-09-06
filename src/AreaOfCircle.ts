export const areaOfCircle = (r: number): number => {
  // Returns area of circle
  return Number((Math.PI * r * r).toFixed(2));
};

console.log(areaOfCircle(20));
