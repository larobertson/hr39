const {expect} = require('chai')
const minimumSwaps = require('./minimumSwaps')

describe('minimumSwaps', function() {
  it('test 0', function() {
    expect(minimumSwaps([2,1,3])).to.equal(1)
  })
})