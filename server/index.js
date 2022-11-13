import express from 'express';
import Connection from './Database/db.js'
import Routes from './Routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',Routes);
const PORT = '8000';
Connection();
app.listen(PORT,()=> console.log('Server is running'));