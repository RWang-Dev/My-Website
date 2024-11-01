const { MongoClient } = require("mongodb");

const MONGO_URI = process.env.AZURE_MONGO_DB;
console.log("CURRENT URI", MONGO_URI);

const connectToDatabase = async () => {
  const client = await MongoClient.connect(MONGO_URI);
  return client;
};

module.exports = { connectToDatabase };
