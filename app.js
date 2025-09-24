const express = require('express');
const path = require('node:path');
const app = express();

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Server running at http://${hostname}:${PORT}/`);
});
