const { connectToDatabase } = require("../utils/db");

async function getIntro(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const intro = database.collection("intro");

    const data = await intro.findOne({ title: "H e l l o" });
    const intro_paragraph = data?.content;

    return {
      jsonBody: { content: intro_paragraph },
      status: 200,
    };
  } catch (error) {
    console.error("Error getting intro");
    responseMessage = "Error getting intro";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: { message: responseMessage },
    status: responseStatus,
  };
}

async function setIntro(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const intro = database.collection("intro");

    const { title, content } = await request.json();
    await intro.insertOne({
      title,
      content,
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

async function editIntro(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const { newContent } = await request.json();

    if (!newContent) {
      return {
        jsonBody: { message: "New content is required" },
        status: 400,
      };
    }

    const database = client.db("portfolio");
    const intro = database.collection("intro");

    const result = await intro.updateOne(
      { title: "Hello" },
      { $set: { content: newContent } }
    );

    responseMessage = "Successfully updated content";
  } catch (error) {
    console.error("Error updating content");
    responseMessage = "Error updating content";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: { message: responseMessage },
    status: responseStatus,
  };
}

module.exports = { getIntro, setIntro, editIntro };
