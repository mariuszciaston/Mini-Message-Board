const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello, world!'));

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Server running at http://${hostname}:${PORT}/`);
});
