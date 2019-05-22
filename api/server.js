const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const restricted = require('../auth/restricted-middleware.js');

const authRouter = require('../auth/auth-router');
const usersRouter = require('../api/users-router');
const questionsRouter = require('../api/questions-router');
const profileRouter = require('../api/profile-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
//will display all users (id,username,pw)
//use  /api/users/:id to delete 
server.use('/api/users', restricted, usersRouter);
//will display all questions
//use /api/questions/:id to delete-edit
server.use('/api/questions', restricted, questionsRouter);
//will display all profiles
server.use('/api/profile', restricted, profileRouter);

server.get('/', (req, res) => {
	res.send("It's alive!");
});

module.exports = server;
