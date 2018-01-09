const express = require('express');
const atob = require('atob');
const app = express();

app.get('/', (req, res) => {
  const data = req.query.d;
  const decodedPayload = atob(data);
  const actualPayload = JSON.parse(decodedPayload);
  console.log(data);
  console.log(decodedPayload);
  console.log(actualPayload);
  res.send();
});

app.listen(8000, () => console.log('Example app listening on port 8000!'));
