/**
 * Returns the width in cols of the cards
 * @returns {number} A number between 1 and 12
 */
export const getNumberOfCols = (elementsPerRow: string) => {
  if (elementsPerRow == '1') return 12;
  if (elementsPerRow == '2') return 6;
  if (elementsPerRow == '4') return 3;
  if (elementsPerRow == '6') return 2;
  return 4;
};
