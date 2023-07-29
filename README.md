# knex-issue

repo to demonstrate an issue with hapi and knex

The issue is that the tests run without issue individually but the second test fails when both are run (regardless of the order they are run in).
The 2nd test generates an error (Error querying DB: Unable to acquire a connection) and debugging shows the pool is empty in the knex client code.

* run `LFW_DATA_DB_CONNECTION=<db connection string> TEST_TABLE=<table name to query> npm test` to see issue with db connections
* run `LFW_DATA_DB_CONNECTION=<db connection string> TEST_TABLE=<table name to query> npm start` to see code run successfully outside of hapi

example:

`LFW_DATA_DB_CONNECTION=postgres://u_flood:secret@localhost:5433/flooddev TEST_TABLE=ffoi_station npm test`
