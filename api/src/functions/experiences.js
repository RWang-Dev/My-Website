const { connectToDatabase } = require("../utils/db");

async function addExperience(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const experiences = database.collection("experiences");

    const { company, title, date, description, tasks } = await request.json();
    await experiences.insertOne({
      company,
      title,
      date,
      description,
      tasks,
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
}

module.exports = { addExperience };
