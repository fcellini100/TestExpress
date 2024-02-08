const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple logging middleware for every request
app.use((req, _res, next) => {
  console.log(`${new Date()}: ${req.method} ${req.path}`);
  next();
});

app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
