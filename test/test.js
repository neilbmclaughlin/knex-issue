const Lab = require('@hapi/lab')
const { describe, it, beforeEach, afterEach } = exports.lab = Lab.script()
const { expect } = require('@hapi/code')
const doStuff = require('../do-stuff')

describe('Test', () => {
  beforeEach(() => {
  })
  afterEach(() => {
  })
  it('Test 1', async () => {
    const knex = require('knex')({
      client: 'pg',
      debug: true,
      connection: process.env.LFW_DATA_DB_CONNECTION
    })
    await doStuff(knex)
    const result = await doStuff(knex)
    expect(result.length).to.equal(5)
  })
  it('Test 2', async () => {
    const knex = require('knex')({
      client: 'pg',
      debug: true,
      connection: process.env.LFW_DATA_DB_CONNECTION
    })
    const result = await doStuff(knex)
    expect(result.length).to.equal(5)
  })
})