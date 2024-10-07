const { app } = require("@azure/functions");
const { ObjectId } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
// const webpush = require("web-push");

const MONGO_URI = process.env.AZURE_MONGO_DB;
console.log("CURRENT URI", MONGO_URI);

app.http("checkDbConnection", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "checkDbConnection",
  handler: async (request, context) => {
    const client = await MongoClient.connect(MONGO_URI);
    try {
      await client.close();
      return {
        jsonBody: { message: "Successfully connected to the database" },
        status: 200,
      };
    } catch (error) {
      return {
        jsonBody: {
          error: "Failed to connect to the database",
          details: error.message,
        },
        status: 500,
      };
    }
  },
});

app.http("getPasswordHash", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "getPasswordHash",
  handler: async (request, context) => {
    const client = await MongoClient.connect(MONGO_URI);
    let responseMessage = "";
    let responseStatus = 200;
    try {
      const database = client.db("portfolio");
      const accounts = database.collection("accounts");

      const account = await accounts.findOne({ username: "admin" });
      const password_hash = account?.password_hash; // Optional chaining for safety

      return {
        jsonBody: { password_hash: password_hash },
        status: 200,
      };
    } catch (error) {
      console.error("Error retrieving password");
      responseMessage = "Error retrieving password";
      responseStatus = 500;
    } finally {
      await client.close();
    }

    return {
      jsonBody: { message: responseMessage },
      status: responseStatus,
    };
  },
});

app.http("setPasswordHash", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "setPasswordHash",
  handler: async (request, context) => {
    const client = await MongoClient.connect(MONGO_URI);
    let responseMessage = "";
    let responseStatus = 200;
    try {
      const database = client.db("portfolio");
      const accounts = database.collection("accounts");

      const { username, password_hash } = await request.json();

      await accounts.insertOne({
        username,
        password_hash,
      });

      responseMessage = "Successfully setting admin password hash";
    } catch (error) {
      console.error("Error setting password");
      responseMessage = "Error setting password";
      responseStatus = 500;
    } finally {
      await client.close();
    }

    return {
      jsonBody: { message: responseMessage },
      status: responseStatus,
    };
  },
});

app.http("addExperience", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "addExperience",
  handler: async (request, context) => {
    const client = await MongoClient.connect(MONGO_URI);
    let responseMessage = "";
    let responseStatus = 200;
    try {
      const database = client.db("portfolio");
      const experiences = database.collection("experiences");

      const { experience_type, title, date, description, contributions } =
        await request.json();
      await experiences.insertOne({
        experience_type,
        title,
        date,
        description,
        contributions,
      });

      responseMessage = "Experience added successfully";
    } catch (error) {
      console.error("Error adding experience", error);
      responseMessage = "Failed to add experience";
      responseStatus = 500;
    } finally {
      await client.close();
    }

    return {
      jsonBody: { message: responseMessage },
      status: responseStatus,
    };
  },
});
