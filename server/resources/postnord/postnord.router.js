const express = require("express");
const { findServiceCenters } = require("./postnord.controller");
const postNordRouter = express.Router();

postNordRouter.post("/find-service-center", findServiceCenters);

module.exports = postNordRouter;
