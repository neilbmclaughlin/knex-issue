# knex-issue

repo to demonstrate an issue with hapi and knex

## Issue

The issue is that the tests run without a problem individually but the second
test of a run fails when both are run (regardless of the order they are run
in). The second test generates an error (Error querying DB: Unable to acquire a
connection) and debugging shows the pool is empty in the knex client code.

* run `LFW_DATA_DB_CONNECTION=<db connection string> TEST_TABLE=<table name to
  query> npm test` to see issue with db connections
* run `LFW_DATA_DB_CONNECTION=<db connection string> TEST_TABLE=<table name to
  query> npm start` to see code run successfully outside of hapi

example:

`LFW_DATA_DB_CONNECTION=postgres://u_flood:secret@localhost:5433/flooddev
TEST_TABLE=ffoi_station npm test`

## Resolution

There are two resolutions identified here:

1) Using a change to the subject code to pass knex into the methods and is in
the branch [fix/using-dependancy-injection](./tree/fix/using-dependancy-injection)

1) Using a change to the test code to use proxyquire in beforeEach to ensure
each test gets a fresh instance of knex and is in the branch
[fix/using-proxyquire](./tree/fix/using-proxyquire)

The second resolution is preferable as it doesn't involve a change to the
subject code but still feels a bit hacky.

## Notes

* The subject code is very much simplified from the actual production code
  where this issue was encountered. In reality, the second resolution applied
there didn't resolve the issue for reasons as yet undetermined.
