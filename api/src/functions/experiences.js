const { connectToDatabase } = require("../utils/db");

async function addExperience(request, context) {
  const client = await connectToDatabase();
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
}

module.exports = { addExperience };
