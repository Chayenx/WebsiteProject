const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());


app.use('/products', require('./routes/product'));


const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});