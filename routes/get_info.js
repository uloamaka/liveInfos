const express = require("express");
const router = express.Router();

const getInfoController = require("../controllers/infoController");

router.get("/", getInfoController.Informations);

module.exports = router;
