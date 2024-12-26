const { connectToDatabase } = require("../utils/db");
const { uploadBlob } = require("../utils/blob");
const { v4: uuidv4 } = require("uuid");

async function addProject(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    console.log("ADDING PROJECT");
    const database = await client.db("portfolio");
    const projects_collection = database.collection("projects");

    const data = await request.json();

    // console.log("Data: ", data);
    const { project, skills, description, links, imageData } = data;
    // console.log("IMAGE DATA: ", imageData);

    console.log("EEEEEEEEED");
    if (imageData) {
      // Extract MIME type (e.g., "image/jpeg" or "image/png") from Base64 string
      const mimeTypeMatch = imageData.match(/^data:(image\/\w+);base64,/);
      if (mimeTypeMatch) {
        const mimeType = mimeTypeMatch[1]; // e.g., "image/jpeg"
        const extension = mimeType.split("/")[1]; // Extract "jpeg" or "png"

        // Generate a dynamic blob name with the correct extension
        const blobName = `${uuidv4()}.${extension}`;

        // Upload the blob
        imageUrl = await uploadBlob("portfolio-images", blobName, imageData);
        console.log(`Uploaded image as ${blobName}`);
      } else {
        console.error("Invalid image data format");
      }
    }

    await projects_collection.insertOne({
      project,
      skills,
      description,
      links,
      imageUrl,
    });

    responseMessage = "Project added successfully";
  } catch (error) {
    console.error("Error adding project");
  } finally {
    await client.close();
  }

  return {
    jsonBody: { responseMessage },
    status: responseStatus,
  };
}

async function getProjects(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;

  console.log("GETTING PROJECTs");

  try {
    const database = await client.db("portfolio");
    const projects_collection = database.collection("projects");

    const projects_list = await projects_collection.find().toArray();

    return {
      jsonBody: projects_list,
      status: responseStatus,
    };
  } catch (error) {
    console.error(error);
    responseMessage = "Error getting projects";
    responseStatus = 500;
  } finally {
    await client.close();
  }
  return {
    jsonBody: { responseMessage },
    status: responseStatus,
  };
}

module.exports = { addProject, getProjects };
