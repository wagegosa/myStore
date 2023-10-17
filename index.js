const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

const whiteList =['http://127.0.0.1:5500/frontend.html', 'http://localhost:8080/My_app', 'http://MyApp.co'];
const option = {
  orign: (origin, callback) =>{
    if (whiteList.includes(origin) || !origin ) {
      callback(null, true);
    } else {
      callback(new Error)
    }
  }
};
app.use(cors());

app.get('/', (req, res) =>{
    res.send('Hola mi server en express')
});
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Estas en el puerto: ', port);
});
