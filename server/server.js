require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
//routes
const authRoute = require("./routes/auth-router");
const contactRoute = require("./routes/contact-router");

// cors 
const  corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST , PUT, DELETE, PATCH, HEAD",
  Credentials: true,
}

app.use(cors(corsOptions));
// middleware
app.use(express.json());
// routes
app.use("/api/auth", authRoute);
// contact route 
app.use("/api/form", contactRoute);

// error middleware
app.use(errorMiddleware);

const port = process.env.PORT;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`App is listening on PORT no ${port}`);
  });
});
