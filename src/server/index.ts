import * as express from 'express';
import data from './Response';
import { checkDatabaseConnection } from './database';

const app = express();

console.log("Calling db");
checkDatabaseConnection();

app.get('/spectrums/test', function(req, res) {
  res.json(data);
});

app.use(express.static(__dirname +'./../../public')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/