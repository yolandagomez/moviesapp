const express = require ('express');  //with require, you're importing
const dotenv = require ('dotenv');
const connectDB = require('./config/db');
const exphbs = require('express-handlebars');

dotenv.config({path: './config/config.env'});
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

//import router file
const itemRouter = require('./routes/item');

//mount route file
app.use('/item', itemRouter);

//configure express-handlebars as our view engine //initiallizing the app:
app.engine('hbs', exphbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
    }
  }));
  
  app.set('view engine', 'hbs');

app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`)
});

