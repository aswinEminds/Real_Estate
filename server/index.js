const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { PORT, connectDB } = require("./config/config");
const userRouter = require("./routers/user_router");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", userRouter);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
