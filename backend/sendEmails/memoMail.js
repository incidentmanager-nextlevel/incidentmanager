const memoMail = request => {
  const mailOptions = {
    from: `${process.env.MAIL}`,
    to: `${request.emailAddresses}`,
    subject: `Message from your Incident Manager App`,
    text: `Hello!\n\nThe following incident occured:\n\n${request.headline}\n\n${request.memo}\n\nThis Mail has been send to: ${request.emailAddresses}\n\n\n\nSent from http://incidentmanager.eu/`
  };
  return mailOptions;
};

module.exports = { memoMail };
