const Informations = async (req, res) => {
  // Get query parameters from the request URL
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: "Both parameters (slack_name and track) are required." });
  }
  const currentUTC = new Date().toISOString();
  const timeZoneOffset = new Date().getTimezoneOffset();
  if (Math.abs(timeZoneOffset) > 120) {
    return res
      .status(400)
      .json({ error: "Timezone offset is greater than +/-2 hours." });
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = daysOfWeek[new Date().getDay()];
  const githubFileURL = "https://github.com/uloamaka";
  const githubSourceURL = "YourGitHubSourceURL"; // Replace with your GitHub source code URL

  // Return the result as JSON
  const result = {
    slack_name,
    currentDayOfWeek,
    currentUTC,
    track,
    githubFileURL,
    githubSourceURL,
    statusCode: 200,
  };

  res.json(result);
};

module.exports = {
  Informations,
};
