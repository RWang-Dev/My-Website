const { connectToDatabase } = require("./db");

async function getPasswordHash(request, context) {
  const client = await connectToDatabase();
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
}

async function setPasswordHash(request, context) {
  const client = await connectToDatabase();
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
}

module.exports = { getPasswordHash, setPasswordHash };
