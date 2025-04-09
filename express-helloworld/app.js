var express = require('express');
app = express();

app.get('/NIGGA', function (req, res) {
  res.send('Hello NIGGA LOL\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

