const router = require("express").Router();

const InfoRouter = require("./get_info");


router.use("/api", InfoRouter);

module.exports = router;

