const router = require('express').Router();

const Questions = require('../api/questions-model');

// restricted route /api/questions
router.post('/', async (req, res) => {
	try {
		const question = await Questions.add(req.body);
		res.status(201).json(question);
	} catch (error) {
		res
			.status(500)
			.json({ error: 'An error trying to add the question to the database.' });
	}
});

//GET ALL QUESTIONS WORKS
router.get('/', async (req, res) => {
	try {
		const allQuestions = await Questions.find();
		res.status(200).json(allQuestions);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET QUESTION BY ID WORKS
router.get('/:id', async (req, res) => {
	try {
		const userQuestions = await Questions.findByUser(req.params.id);
		if (userQuestions.length > 0) {
			res.status(200).json(userQuestions);
		} else {
			res.status(404).json({ error: 'user id not found' });
		}
	} catch (error) {
		res.status(500).json({
			error: 'An error occuried while trying to access the database.'
		});
	}
});

// EDIT QUESTION WORKS 
router.put('/:id', async (req, res) => {
	try {
		const updateQuestion = await Questions.update(req.body);
		if (updateQuestion) {
			res.status(200).json(updateQuestion);
		} else {
			res.status(404).json({ error: 'Question id not found' });
		}
	} catch (error) {
		res.status(500).json({
			error: error.message
		});
	}
});

//DELETE WORKS
router.delete('/:id', async (req, res) => {
	try {
		const removed = await Questions.remove(req.params.id);
		if (removed) {
			res.status(204).json({ success: 'question removed' });
		} else {
			res
				.status(404)
				.json({ message: 'The question with the specified ID does not exist.' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
