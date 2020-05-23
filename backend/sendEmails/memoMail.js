const memoMail = request => {
  const mailOptions = {
    from: `${process.env.MAIL}`,
    to: `${request.emailAddresses}`,
    subject: `${request.headline}`,
    text: `Hello!\n\n${request.headline}\n\n${request.memo}`
  };
  return mailOptions;
};

module.exports = { memoMail };
