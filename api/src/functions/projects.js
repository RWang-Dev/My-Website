import { connectToDatabase } from "../utils/db";

async function addProject(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 201;
  try {
    const database = await client.db("portfolio");
    const projects_collection = database.collection("projects");

    const { project, skills, description, links, imageData } =
      await request.json();
  } catch (error) {
    console.error("Error adding project");
  }
}

async function getProjects(request, context) {
  const projects_list = await projects_collection.find().toArray();

  return {
    jsonBody: projects_list,
    status: 200,
  };
}
