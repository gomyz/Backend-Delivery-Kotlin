const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': 'containers-us-west-116.railway.app',
    'port': 7538,
    'database': 'railway',
    'user': 'postgres',
    'password': 'Qkh0trTobKByqnjzybod'
};

const db = pgp(databaseConfig);

module.exports = db;