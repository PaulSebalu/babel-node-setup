import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'Es6 Node js boilerplate'
  });
});

app.use('*', (req, res) => {
  return res.status(405).json({
    status: 405,
    message: 'Invalid URL'
  });
});

const PORT = 4000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}...`);
});

module.exports = app;
