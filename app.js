// app.js
const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const bunnyRouter = require('./routes/bunny-routes');
app.use('/', bunnyRouter)
/*app.get('/', (req, res) => {
  res.send('Hello, world!');
});*/

app.listen(PORT, () => {
  console.log(`App is running. Listening on port ${PORT}`);
});
