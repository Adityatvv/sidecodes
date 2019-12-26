
export default class ArraySideCodes {
    concat = (arr1, arr2) => {
        return [...arr1, ...arr2];
    };
    cleanUpArray = (arr1) => {
        return arr1.filter(Boolean);
    };
}
