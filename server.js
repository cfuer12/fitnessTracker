const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(compression());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// routes
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});