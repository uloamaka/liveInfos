const Informations = async (req, res) => {
  // Get query parameters from the request URL
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: "Both parameters (slack_name and track) are required." });
  }
  const utc_time = new Date().toISOString().split(".")[0] + "Z";
  const timeZoneOffset = new Date().getTimezoneOffset();
  if (Math.abs(timeZoneOffset) > 120) {
    return res
      .status(400)
      .json({ error: "Timezone offset is greater than +/-2 hours." });
  }

  const daysOfWeek= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const current_day = daysOfWeek[new Date().getDay()];
  const github_file_url =
    "https://github.com/uloamaka/liveInfos/blob/main/app.js";
  const github_repo_url = "https://github.com/uloamaka/liveInfos"; // Replace with your GitHub source code URL

  // Return the result as JSON
  const result = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code: 200,
  };

  res.json(result);
};

module.exports = {
  Informations,
};
