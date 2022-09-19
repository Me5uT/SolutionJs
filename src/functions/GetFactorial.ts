export const getFactorial = (num: number): number => {
  /**
   * Returns factorial value of given number.
   * @param num A number whose factorial value is desired to be calculated.
   */

  switch (true) {
    case num > 1: {
      let total: number = 1;

      for (let i = 1; i <= num; i++) {
        total *= i;
      }

      return total;
    }

    case num === 1:
      return 1;

    default:
      return 0;
  }
};
