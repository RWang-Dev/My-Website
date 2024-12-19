const { connectToDatabase } = require("../utils/db");
const { uploadBlob } = require("../utils/blob");
const { v4: uuidv4 } = require("uuid");

async function addExperience(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;

  try {
    const body = await request.json();
    const { company, title, date, description, tasks, imageData } = body;

    // Handle image if it exists
    let imageUrl = null;
    if (imageData) {
      const blobName = `${uuidv4()}.png`;
      imageUrl = await uploadBlob("portfolio-images", blobName, imageData);
    }

    // Insert data into MongoDB
    const database = client.db("portfolio");
    const experiences = database.collection("experiences");

    await experiences.insertOne({
      company,
      title,
      date,
      description,
      tasks: Array.isArray(tasks) ? tasks : tasks,
      imageUrl,
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

async function getExperiences(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const experiences = database.collection("experiences");

    const experiencesList = await experiences.find().toArray();

    responseMessage = "Got Experience Lists";
    return {
      jsonBody: experiencesList,
      status: responseStatus,
    };
  } catch (error) {
    console.error("Error getting experiences", error);
    responseMessage = "Error getting experiences";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: { message: responseMessage },
    status: responseStatus,
  };
}

module.exports = { addExperience, getExperiences };
