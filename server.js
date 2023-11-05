// Step 3, 4, and 5: Create a new file for your server

const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});