const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;
const app = express();
const connectionUrl = "mongodb://localhost:27017/TODODb";
mongoose.connect(connectionUrl).then(() => console.log("Database connected successfully")).catch((error) => console.log(error.message));
app.set("view engine", "ejs");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});