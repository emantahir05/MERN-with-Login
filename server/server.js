const express = require("express");
const app = express();
const dotenv = require("dotenv")
//routes
const router = require("./routes/auth-router");
// middleware
app.use(express.json());
// .env file 
dotenv.config();
// routes 
app.use("/api/auth", router);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App is listening on PORT no ${port}`);
})