const dialogflow = require("dialogflow");
const structjson = require("./structjson");
const {
  googleProjectID,
  dialogFlowSessionID,
  dialogFlowSessionLanguageCode,
  googleClientEmail,
  googlePrivateKey
} = require("../config/keys");
const credentials = {
  client_email: googleClientEmail,
  private_key: googlePrivateKey
};

const sessionClient = new dialogflow.SessionsClient({
  projectID: googleProjectID,
  credentials: credentials
});
const sessionPath = sessionClient.sessionPath(
  googleProjectID,
  dialogFlowSessionID
);

module.exports = {
  textQuery: async (text, parameters = {}) => {
    const self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: dialogFlowSessionLanguageCode
        }
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },
  eventQuery: async (event, parameters = {}) => {
    const self = module.exports;
    const request = {
      session: sessionPath,
      queryInput: {
        event: {
          name: event,
          parameters: structjson.jsonToStructProto(parameters),
          languageCode: dialogFlowSessionLanguageCode
        }
      },
      queryParams: {
        payload: {
          data: parameters
        }
      }
    };
    let responses = await sessionClient.detectIntent(request);
    responses = await self.handleAction(responses);
    return responses;
  },
  handleAction: responses => {
    return responses;
  }
};
