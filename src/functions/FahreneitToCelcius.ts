export const fahreneitToCelcius = (fahreneit: number): number => {
  /**
   *  Return celcius value of given fahreneit value.
   * @param fahreneit Fahreneit value
   */

  return (fahreneit - 32) * (5 / 9);
};
