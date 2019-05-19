const {expect} = require('chai')
const {generate} = require('./pascalTriangle1')

describe('generatePascalTriangle', function() {
  it('test 0', function() {
    expect(generate(5)).to.deep.equal([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]])
  });
})
