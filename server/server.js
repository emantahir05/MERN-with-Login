require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./utils/db")
//routes
const router = require("./routes/auth-router");
// middleware
app.use(express.json());
// routes 
app.use("/api/auth", router);


const port = process.env.PORT;
connectDb().then(() => {

    app.listen(port, () => {
        console.log(`App is listening on PORT no ${port}`);
    })
});