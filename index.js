const express = require("express");
const app = express();
const port = 3001;
const tasksRouter = require("./routers/task_routes");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", tasksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
