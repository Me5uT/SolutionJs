export const reverseString = (str: string) => {
  // Returns a string, reserved of given string
  let reversedString: string = '';

  for (let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
};
