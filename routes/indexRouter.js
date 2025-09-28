const { Router } = require('express');
const { getIndex, postNewMessage } = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.post('/new', postNewMessage);
indexRouter.get('/', getIndex);

module.exports = indexRouter;
