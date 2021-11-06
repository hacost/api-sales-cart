const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/routerApi');
const { logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 3000;
const whiteList = ['http://127.0.0.1:5500','https://myapp.com'];

//use json middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world in express js');
});


// use middleware cors
const options = {
  origin: (origin, callback) =>{
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no autorizado...'));
    } 
  }
}
app.use(cors(options));

//use router api 
routerApi(app);

// use middleware error
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Api running in port: ' + port);
})

