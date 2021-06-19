const express = require("express");
const app = express();
const api_helper = require("./API_helper");
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/test", (req, res) => {
  api_helper
    .make_API_call(
      "https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v0001/?key=8CB518ED3C158699669F7C2F9EA4D62E"
    )
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});
