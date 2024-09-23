const express = require("express");
require("dotenv").config();
const ofertasRoutes = require("./routes/ofertasRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/ofertas", ofertasRoutes);

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
