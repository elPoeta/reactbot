const express = require("express");
const router = express.Router();
const {
  textQuery,
  eventQuery
} = require("../../controllers/dialogFlowController");

router.post("/df_text_query", textQuery);
router.post("/df_event_query", eventQuery);

module.exports = router;
