const chatBot = require("../chatbot/chatbot");

module.exports = {
  textQuery: async (req, res) => {
    const result = await chatBot.textQuery(req.body.text, req.body.parameters);
    res.send(result[0].queryResult);
  },
  eventQuery: async (req, res) => {
    res.send({ say: "Hi!! from event" });
  }
};
