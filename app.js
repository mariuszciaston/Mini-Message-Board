const express = require('express');
const path = require('node:path');
const app = express();

const newRouter = require('./routes/newRouter');
const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/new', newRouter);
app.use('/', indexRouter);

app.get('/{*splat}', (req, res) => {
	res.status(404).render('404');
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.statusCode || 500).send(err.message);
});

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Server running at http://${hostname}:${PORT}/`);
});
