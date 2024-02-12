const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple logging middleware for every request
app.use((req, _res, next) => {
  console.log(`${new Date()}: ${req.method} ${req.path}`);
  next();
});

app.get('/', async (req, res) => {
  try {
    const addUserUseCase = new AddUserUseCase(userRepositoryLocal);
    const user = await addUserUseCase.execute(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
