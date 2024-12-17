const { connectToDatabase } = require("../utils/db");

async function getExtracurriculars(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const extracurriculars = database.collection("extracurriculars");

    const extracurriculars_list = await extracurriculars.find().toArray();

    responseMessage = "Got Experience Lists";
    return {
      jsonBody: extracurriculars_list,
      status: responseStatus,
    };
  } catch (error) {
    console.error(error);
    responseMessage = "Error getting extracurriculars";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: { message: responseMessage },
    status: responseStatus,
  };
}

async function addExtracurricular(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const extracurriculars = database.collection("extracurriculars");

    const { extracurricular, date, description, accomplishments } =
      await request.json();
    await extracurriculars.insertOne({
      extracurricular,
      date,
      description,
      accomplishments,
    });

    responseMessage = "Successfully added extracurricular";
    return {
      jsonBody: { responseMessage },
      status: responseStatus,
    };
  } catch (error) {
    console.error(error);
    responseMessage = "Error adding extracurriculars";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: { responseMessage },
    status: responseStatus,
  };
}

module.exports = { addExtracurricular, getExtracurriculars };
