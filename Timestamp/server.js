
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/calculate', (req, res) => {
  const { timestamp1, timestamp2 } = req.body;

  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);

  const differenceInSeconds = Math.abs(date1 - date2) / 1000;

  res.json({ differenceInSeconds });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});