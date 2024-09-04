//Need to set up the server --on express
//cors polity 
//error handling middle ware
//routeers , controllers , services 
//theremust be server side validation for each of the data
//

import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { homeRouter } from './routes/homeRouter.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.API_PORT;


app.use('/', homeRouter)

app.listen(port, () => {
    console.log("Application is running on Port", port);

})