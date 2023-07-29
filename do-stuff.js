const VError = require('verror')

async function query (knex) {
  try {
    return await knex(process.env.TEST_TABLE).select('*').limit(5).returning('*')
  } catch (error) {
    console.error('Error querying DB')
    throw new VError(error, 'Error querying DB')
  }
}

async function end (knex) {
  try {
    await knex.destroy()
  } catch (error) {
    console.error('Error ending the pool:', error)
    throw new VError(error, 'Error ending pool')
  }
}

async function doStuff (knex) {
  try {
    const result = await query(knex)
    return result
  } catch (error) {
    console.log({ error })
    throw error
  } finally {
    await end(knex)
  }
}

module.exports = doStuff
