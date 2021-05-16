const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    allowedHeaders: ["get", "post", "option"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});
app.post("/cookie", (req, res) => {
  res.cookie("cookie", `coooookie-${Date.now()}`);
  res.send({ message: "cookie plz?" });
});

app.listen(4000, () => {
  console.log("연결 완료");
});
