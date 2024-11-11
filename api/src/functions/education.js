const { connectToDatabase } = require("../utils/db");

async function addEducation(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const intro = database.collection("education");

    const {
      order_id,
      institution,
      date,
      description,
      gpa,
      additional_section,
      section_list,
    } = await request.json();
    await intro.insertOne({
      order_id,
      institution,
      date,
      description,
      gpa,
      additional_section,
      section_list,
    });

    responseMessage = "Education added successfully";
  } catch (error) {
    console.error("Error adding education", error);
    responseMessage = "Failed to add education";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: { message: responseMessage },
    status: responseStatus,
  };
}

async function getEducationList(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;

  try {
    const database = client.db("portfolio");
    const intro = database.collection("education");

    const data = await intro.find().toArray();

    return {
      jsonBody: data,
      status: 200,
    };
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }

  return {
    jsonBody: { message: responseMessage },
    status: responseStatus,
  };
}

module.exports = { addEducation, getEducationList };
