require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
//routes
const router = require("./routes/auth-router");
// middleware
app.use(express.json());
// routes
app.use("/api/auth", router);

// error middleware
app.use(errorMiddleware);

const port = process.env.PORT;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`App is listening on PORT no ${port}`);
  });
});
