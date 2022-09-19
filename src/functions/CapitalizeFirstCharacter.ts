export const capitalizeFirstCharacter = (word: string): string => {
  // Returns words, first letters capitalized
  const lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord.split(' ').length > 1) {
    return lowerCaseWord
      .split(' ')
      .map(w => w.replace(w[0], w[0].toUpperCase()))
      .join(' ');
  }

  return lowerCaseWord.replace(
    lowerCaseWord[0],
    lowerCaseWord[0].toUpperCase()
  );
};
