const router = require("express").Router();

const InfoRouter = require("./get_info");

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Grit.V1 API" });
});

router.use("/infos", InfoRouter);

module.exports = router;

