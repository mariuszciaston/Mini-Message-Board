const { messages } = require('../db');

function getIndex(req, res) {
	res.render('index', { title: 'Mini Messageboard', messages });
}

function postNewMessage(req, res) {
	const newMessage = {
		user: req.body.author,
		text: req.body.messageText,
		added: new Date(),
	};
	messages.push(newMessage);
	res.redirect('/');
}

module.exports = { getIndex, postNewMessage };
