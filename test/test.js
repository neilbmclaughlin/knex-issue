const Lab = require('@hapi/lab')
const { describe, it, beforeEach, afterEach } = exports.lab = Lab.script()
const { expect } = require('@hapi/code')
const doStuff = require('../do-stuff')

describe('Test', () => {
  afterEach(() => {
  })
  it('Test 1', async () => {
    const result = await doStuff()
    expect(result.length).to.equal(5)
  })
  it('Test 2', async () => {
    const result = await doStuff()
    expect(result.length).to.equal(5)
  })
})
