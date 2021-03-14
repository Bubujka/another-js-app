const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('Hello from my backend');
});

app.get('/route', (req,res) => {
  res.send('Hello from another route');
});

app.listen(3000, () => console.log('Server alive on 3000 port'));
