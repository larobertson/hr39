minimumBribes = require('./newYearChaos.js')
const {expect} = require('chai')


describe('newYearChaos', function() {
  it('test 0', function() {
    expect(minimumBribes([2, 1, 5, 3, 4])).to.equal(3)
  });
  it('test 1', function() {
    expect(minimumBribes([1, 3, 5, 2, 6, 7, 9, 10, 8, 4])).to.equal(10)
  });
  it('test 2', function() {
    expect(minimumBribes([5, 1, 2, 4, 3])).to.equal('Too chaotic')
  });
  it('test 3', function() {
    expect(minimumBribes([2, 1, 5, 4, 3])).to.equal(4)
  });
  it('test 4', function() {
    expect(minimumBribes([3, 2, 1, 6, 4, 5])).to.equal(5)
  });
  it('test 5', function() {
    expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).to.equal('Too chaotic')
  });
  it('test 6', function() {
    expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).to.equal(7)
  });
  it('test 7', function() {
    expect(minimumBribes([3, 2, 5, 4, 1])).to.equal(6)
  })
})
