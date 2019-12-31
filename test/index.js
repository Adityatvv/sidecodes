import assert from 'assert';
import { getType, add, concat } from '../src/index';

describe('getType', () => {
  it('should return array when the [1,2, 3] is passed', () => {
    assert.equal(getType([1, 2, 3]), 'array');
  });
});

describe('#concat', () => {
  it('should return foobar when the values are foo and bar', () => {
    assert.equal(concat('foo', 'bar'), 'foobar');
  });
  it('should return [1,2,3,4] when the values are [1,2] and [3,4]', () => {
    assert.equal(JSON.stringify(concat([1,2], [3,4])), JSON.stringify([1, 2, 3, 4]));
  });
});

describe('#add', () => {
  it('should return 3 when the values are 1 and 2', () => {
    assert.equal(add(1, 2), 3);
  });
  it('should return "foo bar" when the values are foo and bar', () => {
    assert.equal(add('foo', 'bar'), 'foo bar');
  });
});