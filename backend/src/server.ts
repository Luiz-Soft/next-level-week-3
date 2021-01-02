import express from 'express';
import 'express-async-errors';
import path from 'path';
import './database/connection';
import routes from './routes'
import errorHandler from './erros/handler'; 
import cors from 'cors';
const app = express();


app.use(express.json());
app.use(routes);
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler)
app.listen(3333)