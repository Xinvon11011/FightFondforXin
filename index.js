const express = require('express');
const app = express();
const path = require('path');

// Serve static files (e.g., HTML, JS, CSS, models)
app.use(express.static(path.join(__dirname, 'src')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
