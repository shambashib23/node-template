// This is the place from where you import all third party 
// libraries and use them in your code!
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import listEndpoints from 'express-list-endpoints';

import HomeRouter from './routes/home.js';
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
// disable display of tech stack
app.disable('x-powered-by');
// parse json request body
app.use(express.json({ limit: '69mb' }));
// parse urlencoded request body
app.use(express.urlencoded({ extended: true, limit: '69mb' }));

// MongoDb connection Function, which you can't ignore!
// Also, improvise this functions for different db connections and styles 


// Routes definition! As you need, add new routes
app.use('/', HomeRouter);
// Print out all available routes to the console
console.log(listEndpoints(app));

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});