const { connectToDatabase } = require("../utils/db");

async function getSkills(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;
  try {
    const database = client.db("portfolio");
    const skills_collection = database.collection("skills");

    const skill_list = await skills_collection.find().toArray();

    return {
      jsonBody: skill_list,
      status: 200,
    };
  } catch (error) {
    console.error(error);
    responseMessage = "Failed to get skill list";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: {
      message: responseMessage,
    },
    status: responseStatus,
  };
}

async function addSkill(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;

  try {
    const database = client.db("portfolio");
    const skills_collection = database.collection("skills");

    const { skill_type, skill_name, relevance } = await request.json();

    console.log(skill_type, skill_name, relevance);
    const existingSkill = await skills_collection.findOne({ skill_name });

    if (!existingSkill) {
      await skills_collection.insertOne({
        skill_type,
        skill_name,
        relevance,
      });
      responseMessage = "Successfully added new skill";
    } else {
      responseMessage = "Skill already exists";
    }
  } catch (error) {
    console.error(error);
    responseMessage = "Failed to add skill";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: {
      message: responseMessage,
    },
    status: responseStatus,
  };
}

async function deleteSkill(request, context) {
  const client = await connectToDatabase();
  let responseMessage = "";
  let responseStatus = 200;

  try {
    const database = client.db();
    const skills_collection = database.collection("skills");

    const del_skill_name = request.query.get("skill_name");

    const deleteResult = await skills_collection.deleteOne({
      skill_name: del_skill_name,
    });

    if (deleteResult.deletedCount === 0) {
      responseMessage = "Skill not found";
      responseStatus = 404;
    } else {
      responseMessage = "Successfully deleted skill";
    }
  } catch (error) {
    console.error(error);
    responseMessage = "Failed to delete skill";
    responseStatus = 500;
  } finally {
    await client.close();
  }

  return {
    jsonBody: {
      message: responseMessage,
    },
    status: responseStatus,
  };
}

module.exports = { getSkills, addSkill, deleteSkill };
