const {expect} = require('chai')
const minimumSwaps = require('./minimumSwaps')

describe('minimumSwaps', function() {
  it('test 0', function() {
    expect(minimumSwaps([2,1,3])).to.equal(1)
  });
  it('test 1', function() {
    expect(minimumSwaps([7, 1, 3, 2, 4, 5, 6])).to.equal(5)
  });
  it('test 2', function() {
    expect(minimumSwaps([4, 3, 1, 2])).to.equal(3)
  });
  it('test 3', function() {
    expect(minimumSwaps([2, 3, 4, 1, 5])).to.equal(3)
  });
  it('test 4', function() {
    expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).to.equal(3)
  });
  it('test 5', function() {
    expect(minimumSwaps([1, 3, 5, 2, 4, 6, 7])).to.equal(3)
  });
  it('test 6', function() {
    expect(minimumSwaps([2, 3, 4, 1, 5])).to.equal(3)
  });
  it('test 7', function() {
    expect(minimumSwaps([4, 3, 1, 2])).to.equal(3)
  });
})