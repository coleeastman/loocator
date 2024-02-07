require('dotenv').config(); // Load the environment variable (API Key) from the .env file
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to get the API key
app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
