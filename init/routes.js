const dialogFlow = require("../routes/api/dialogFlow");

module.exports = app => {
  app.use("/api/bot", dialogFlow);
};
