const express = require("express"); //with require, you're importing
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

//import router file
const movieRouter = require("./routes/movies");

//mount route file
app.use("/", movieRouter); // maybe instead of "/"," "/movies" could work

app.listen(PORT, () => {
  console.log(
    `Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
  );
});
