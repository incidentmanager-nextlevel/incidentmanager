const express = require("express");
const mailRoutes = express.Router();

const { sendMemoEmail } = require("../sendEmails/sendEmails");
const { memoMail } = require("../sendEmails/memoMail");

mailRoutes.post("/sendmemo", async (request, response) => {
  try {
    console.log(request.body);
    const message = request.body;

    const Mail = memoMail(message);
    await sendMemoEmail(Mail);
    response.end();
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
});

module.exports = mailRoutes;
