import ArraySideCodes from './array-sidecodes';
import StringSideCodes from './string-sidecodes';
import NumberSideCodes from './number-sidecodes';
import ObjectSideCodes from './object-sidecodes';

const arraySideCodes = new ArraySideCodes();
const stringSideCodes = new StringSideCodes();
const numberSideCodes = new NumberSideCodes();
const objectSideCodes = new ObjectSideCodes();

export function concat(arg1, arg2) {
  var typeMethodRelation = {
    'object': objectSideCodes,
    'string': stringSideCodes,
    'array':  arraySideCodes,
  };
  return typeMethodRelation[typeof arg1].concat.call(arg1, arg2);
}

export function add(arg1, arg2) {
  return numberSideCodes.add(arg1, arg2);
}