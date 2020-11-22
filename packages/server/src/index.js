const express = require("express");
const cors = require("cors")
const routes = require("./routes");
const app = express();

const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json())
app.use(cors())
app.use(routes);

app.listen(APP_PORT, () => {
  console.log("App running on port", APP_PORT);
});
