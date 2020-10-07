import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello from Express!');
});

app.listen(5000, () => {
  console.log('Server is running on Port 5000!');
})