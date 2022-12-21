const express = require("express");
const sequelize = require("./utils/db");

const tagRoute = require("./routes/tag.route");
const tutorialRoute = require("./routes/tutorial.route");

const app = express();

app.use(express.json());

app.use("/tag", tagRoute);
app.use("/tutorial", tutorialRoute);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.message);
  });

app.listen(8000, () => console.log("server is listening on port number 8000"));
