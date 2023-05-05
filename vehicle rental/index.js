require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const { PORT } = process.env;
const app = express();

require("./db/connection");

app.use(cors("*"));
app.use(bp.json());

app.use(bp.urlencoded({ extended: true }));

app.use("/v1", require("./router/routers"));





app.get("/", (req, res) => {
  res.send({ msg: `users MICRO is running fine ${PORT}` });
});

app.listen(PORT, () => {
  console.log(`User MICROSERVICE listening at http://localhost:${PORT}`);
  
});
