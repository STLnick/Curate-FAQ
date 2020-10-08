import cors from 'cors';
import express from 'express';

import faqs from './routes/faqs';
import users from './routes/users';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/faqs', faqs);
app.use('/users', users);

app.listen(process.env.PORT || 5000);