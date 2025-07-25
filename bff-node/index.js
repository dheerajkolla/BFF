const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', async (req, res) => {
    const response = await axios.get('http://springboot-service:8080/api/hello');
    res.send(response.data);
});

app.listen(3000, () => {
    console.log('Node BFF listening on port 3000');
});
