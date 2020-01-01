import assert from 'assert';
import { expect } from 'chai';
import { getType, add, concat } from '../src/index';

describe('getType', () => {
  it('should return array when the [1,2, 3] is passed', () => {
    expect(getType([1, 2, 3])).to.be.equal('array');
  });
});

describe('#concat', () => {
  it('should return foobar when the values are foo and bar', () => {
   expect(concat('foo', 'bar')).to.be.equal('foobar');
  });
  it('should return [1,2,3,4] when the values are [1,2] and [3,4]', () => {
    expect(concat([1,2], [3,4])).to.be.deep.equal([1, 2, 3, 4]);
  });
  it('should return merged object', () => {
    expect(concat({ a: 1}, {b: 2})).to.be.deep.equal({a: 1, b:2});
  });
});

describe('#add', () => {
  it('should return 3 when the values are 1 and 2', () => {
    expect(add(1, 2)).to.be.equal(3);
  });
  it('should return "foo bar" when the values are foo and bar', () => {
    expect(add('foo', 'bar')).to.be.equal('foo bar');
  });
});