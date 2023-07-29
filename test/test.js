const Lab = require('@hapi/lab')
const { describe, it, beforeEach, afterEach } = exports.lab = Lab.script()
const { expect } = require('@hapi/code')
const proxyquire = require('proxyquire')

describe('Test', () => {
  let doStuff
  beforeEach(() => {
    const knex = require('knex')({
      client: 'pg',
      debug: true,
      connection: process.env.LFW_DATA_DB_CONNECTION
    })
    doStuff = proxyquire('../do-stuff.js', {
      './knex.js': knex
    });
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
