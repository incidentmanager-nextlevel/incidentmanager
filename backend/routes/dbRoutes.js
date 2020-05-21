const express = require("express");
const dbRoutes = express.Router();

const { addIssue, getIssues, getLastIssue } = require("../lib/issues");

dbRoutes.post("/issues", async (request, response) => {
  try {
    const attendee = request.body;
    await addIssue(attendee);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

dbRoutes.get("/lastissue", async (request, response) => {
  try {
    const issue = await getLastIssue();
    console.log(issue);
    response.json(issue);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

dbRoutes.get("/issues", async (request, response) => {
  try {
    const issues = await getIssues();
    console.log(issues);
    response.json(issues);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = dbRoutes;
