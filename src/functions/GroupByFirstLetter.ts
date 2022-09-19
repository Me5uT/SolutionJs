export const groupByFirstLetter = (strings: string[]) => {
  // Returns an object grouped by first letter
  let obj: any = {};

  strings.forEach(
    (e: string) =>
      (obj[e[0].toLowerCase() as keyof any] = strings.filter(
        (ele: string) => ele[0].toLowerCase() === e[0].toLowerCase()
      ))
  );

  return obj;
};
