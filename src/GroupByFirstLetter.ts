export const groupByFirstLetter = (str: string[]) => {
  // Returns an object grouped by first letter
  let obj: any = {};

  str.forEach(
    (e: string) =>
      (obj[e[0].toLowerCase() as keyof any] = str.filter(
        (ele: string) => ele[0].toLowerCase() === e[0].toLowerCase()
      ))
  );

  return obj;
};
