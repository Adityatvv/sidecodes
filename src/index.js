import ArraySideCodes from './array-sidecodes';
import StringSideCodes from './string-sidecodes';
import NumberSideCodes from './number-sidecodes';
import ObjectSideCodes from './object-sidecodes';

const arraySideCodes = new ArraySideCodes();
const stringSideCodes = new StringSideCodes();
const numberSideCodes = new NumberSideCodes();
const objectSideCodes = new ObjectSideCodes();

const typeMethodRelation = {
  'array':  arraySideCodes,
  'number': numberSideCodes,
  'object': objectSideCodes,
  'string': stringSideCodes,
};

function checkAndCall(arg1, arg2, method) {
  return typeMethodRelation[getType(arg1)] && typeMethodRelation[getType(arg1)][method].call(this,arg1, arg2)
}

export function getType(arg1) {
  return arg1 && ( Object.prototype.toString.call(arg1).slice(8,-1) || '').toLowerCase();
}

export function concat(arg1, arg2) {
  return checkAndCall(arg1, arg2, 'concat');
}

export function add(arg1, arg2) {
  return checkAndCall(arg1, arg2, 'add');
}