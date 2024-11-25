const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/v1/ping', (req, res) => {
  res.json({ response: 'success', message: 'pong' });
});

app.post('/api/v1/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'new@example.com' && password === 'newpassword123') {
    res.json({
      response: 'success',
      message: 'Login successful',
      data: { uid: '123', username: 'TestUser', email },
    });
  } else {
    res.status(401).json({
      response: 'error',
      message: 'Invalid credentials',
    });
  }
});

app.post('/api/v1/register', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({
      response: 'success',
      message: 'Registration successful',
      data: { uid: '124', username: 'NewUser', email },
    });
  } else {
    res.status(400).json({
      response: 'error',
      message: 'Invalid input',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/v1`);
});
