const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((error) => console.log(error));
