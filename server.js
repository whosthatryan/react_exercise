const express = require('express');
const app = express();
// const path = require('path');
app.use(express.static('build'));
// app.get('*', (req, res) => {
//   res.sendFile(file goes here)
// })
app.listen(process.env.PORT)