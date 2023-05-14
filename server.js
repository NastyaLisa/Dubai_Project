const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/apartament-category', (req, res) => {
  res.send({ express: 'Hello From apartament-category' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
