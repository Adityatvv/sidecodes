export default class ArraySideCodes {
  concat = (arr1, arr2) => [...arr1, ...arr2];
  cleanUpArray = (arr1) => arr1.filter(Boolean);
}
