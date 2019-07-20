const express = require("express");
const router = express.Router();
const {
  postDfTextQuery,
  postDfEventQuery
} = require("../../controllers/dialogFlowController");

router.post("/df_text_query", postDfTextQuery);
router.post("/df_event_query", postDfEventQuery);

module.exports = router;
