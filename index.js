import express from 'express'
import SamJs from 'sam-js'

const app = express();

app.use(express.json());

app.post("/tts/sam", function (req, res) {
  const body = req.body;
  const sam = new SamJs();
  res.json({
    data: sam.dataurl(body.text),
    base64: sam.dataurl(body.text).split(",")[1]
  });
});
app.listen(3000, function () {
  console.log("Server has started!");
});
