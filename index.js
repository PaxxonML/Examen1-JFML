const express = require('express');
const path = require('path');
const examenRouter = require('./routes/examen');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/examen', examenRouter);
app.listen(8083, () => console.log('Server started on port 8083'));