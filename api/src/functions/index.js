const { app } = require("@azure/functions");
const { ObjectId } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;

const { getIntro, setIntro, editIntro } = require("./intro");
const { addExperience } = require("./experiences");
const { getPasswordHash, setPasswordHash } = require("../utils/admin");
const { connectToDatabase } = require("../utils/db");
const { addEducation, getEducationList } = require("./education");
const { getSkills, addSkill, deleteSkill } = require("./skills");

app.http("getPasswordHash", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "getPasswordHash",
  handler: getPasswordHash,
});

app.http("setPasswordHash", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "setPasswordHash",
  handler: setPasswordHash,
});

app.http("getIntro", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "getIntro",
  handler: getIntro,
});

app.http("setIntro", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "setIntro",
  handler: setIntro,
});
app.http("editIntro", {
  methods: ["PATCH"],
  authLevel: "anonymous",
  route: "editIntro",
  handler: editIntro,
});

app.http("addExperience", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "addExperience",
  handler: addExperience,
});

app.http("addEducation", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "addEducation",
  handler: addEducation,
});

app.http("getEducationList", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "getEducationList",
  handler: getEducationList,
});

app.http("getSkills", {
  mathods: ["GET"],
  authLevel: "anonymous",
  route: "getSkills",
  handler: getSkills,
});

app.http("addSkill", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "addSkill",
  handler: addSkill,
});

app.http("deleteSkill", {
  methods: ["DELETE"],
  authLevel: "anonymous",
  route: "deleteSkill",
  handler: deleteSkill,
});
