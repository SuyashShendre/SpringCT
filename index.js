const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/spring")
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

const companyRoute = require("./src/routes/company.routes");
const userRoute = require("./src/routes/user.routes");

app.use("/company", companyRoute);
app.use("/user", userRoute);

app.use((err, req, res, next) => {
  res.status(500).json({ statusCode: err.statusCode, message: err.stack });
});

app.all("*", (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  err.statusCode = 404;
  next(err);
});

app.listen(3000, console.log("Server Started"));
