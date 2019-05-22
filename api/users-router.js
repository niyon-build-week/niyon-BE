const router = require('express').Router();

const Users = require('./users-model.js');

// restricted route /api/users
router.get('/', async (req, res) => {
	try {
		const allUsers = await Users.find();
		res.status(200).json(allUsers);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const removed = await Users.remove(req.params.id);
		if (removed) {
			res.status(204).json({ success: 'User removed' });
		} else {
			res
				.status(404)
				.json({ message: 'The User with the specified ID does not exist.' });
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
