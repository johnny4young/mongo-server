const { MongoClient } = require('mongodb');

let client;
let db;

/**
 * connected to db
 * @param {*} config
 * @returns {Promise<[import('mongodb').Db, import('mongodb').MongoClient]>}
 */
const connect = async (config = {}) => {
  if (!client) {
    const url = config.mongo || 'mongodb://localhost:27017';
    const dbName = config.db || 'myproject';
    client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db(dbName);
  }
  return [db, client];
};

module.exports = connect;
