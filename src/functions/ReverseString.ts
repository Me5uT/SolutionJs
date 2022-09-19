export const reverseString = (str: string): string => {
  /**
   *  Returns a string, reserved of given string.
   * @param str A string.
   */

  let reversedString: string = '';

  for (let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
};
