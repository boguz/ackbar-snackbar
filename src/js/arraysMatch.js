export const arraysMatch = (arr1, arr2) => {
  // Check arrays length
  if (arr1.length !== arr2.length) return false;

  // Check arrays content
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};
