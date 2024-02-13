const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerConfig');
const userRoutes = require('./interfaces/routes/userRoutes');
const todoRoutes = require('./interfaces/routes/todoRoutes');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple logging middleware for every request
app.use((req, _res, next) => {
  console.log(`${new Date()}: ${req.method} ${req.path}`);
  next();
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (_req, res) => {
  res.send({ msg: 'Hello World!' });
});

app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
