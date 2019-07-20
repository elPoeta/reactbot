const express = require("express");
const app = express();

require("./init/parser")(app);
require("./init/routes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) {
    console.error("Error to connect server ", err);
    process.exit(1);
  }
  console.log(`Server connected on port ${PORT}`);
});
