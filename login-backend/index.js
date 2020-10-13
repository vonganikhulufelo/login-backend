const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// defining the Express app
const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return the data that have being send
app.post('/', async (req, res) => {
  res.status(200).json({ message: req.body })
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});