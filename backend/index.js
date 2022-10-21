const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors({ origin: true, credentials: true }));

app.post("/v1/update", (req, res) => {
  //   setTimeout(() => {
  //     res.status(200).json(req.body);
  //   }, [2000]);
  res.status(200);
});

app.listen(8000, () => {
  console.log("Server is running");
});
