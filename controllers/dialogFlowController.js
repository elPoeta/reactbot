const dialogflow = require("dialogflow");
const {
  googleProjectID,
  dialogFlowSessionID,
  dialogFlowSessionLanguageCode
} = require("../config/keys");

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(
  googleProjectID,
  dialogFlowSessionID
);
module.exports = {
  postDfTextQuery: async (req, res) => {
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          // The query to send to the dialogflow agent
          text: req.body.text,
          // The language used by the client (en-US)
          languageCode: dialogFlowSessionLanguageCode
        }
      }
    };
    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log("Detected intent");
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log(`  No intent matched.`);
    }
    res.send({ query: result.queryText, response: result.fulfillmentText });
  },
  postDfEventQuery: async (req, res) => {
    res.send({ say: "Hi!! from event" });
  }
};
