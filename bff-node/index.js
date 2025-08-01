const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/hello', async (req, res) => {
    const response = "Hello from SpringBoot";
    res.send(response);
});

app.listen(5000, () => {
    console.log('Node BFF listening on port 3000');
});
