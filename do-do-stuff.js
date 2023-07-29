const knex = require('knex')({
  client: 'pg',
  debug: true,
  connection: process.env.LFW_DATA_DB_CONNECTION,
  pool: { min: 0, max: 10 }
})

const doStuff = require('./do-stuff')

doStuff(knex)
doStuff(knex)
