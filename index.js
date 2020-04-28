const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/assets", express.static("assets"));
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => console.log(`D3 Demo running on port ${PORT}!`));
