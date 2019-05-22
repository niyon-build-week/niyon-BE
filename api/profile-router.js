const router = require('express').Router();

const Profile = require('./profile-model.js');

// restricted route /api/profile
router.post('/', async (req, res) => {
	try {
		const profile = await Profile.add(req.body);
		res.status(201).json(profile);
	} catch (error) {
		res
			.status(500)
			.json({ error: 'An error trying to add the profile to the database.' });
	}
});

//GET - display all profiles WORKS - api/profile
router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find();
		res.status(200).json(profiles);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET - by id WORKS - api/profile/id
router.get('/:id', async (req, res) => {
	try {
		const userProfile = await Profile.findByUser(req.params.id);
		if (userProfile) {
			res.status(200).json(userProfile);
		} else {
			res.status(404).json({ error: 'user id not found' });
		}
	} catch (error) {
		res.status(500).json({
			error: 'An error occuried while trying to access the profile.'
		});
	}
});

//UPDATE - profile WORKS - api/profile/id
router.put('/:id', async (req, res) => {
	try {
		const updateProfile = await Profile.update(req.body);
		if (updateProfile) {
			res.status(200).json(updateProfile);
		} else {
			res.status(404).json({ error: error.message });
		}
	} catch (error) {
		res.status(500).json({
			error: error.message
		});
	}
});

//to manipulate POST and PUT/edit
/*{
	"id": 1,
	"user_id": 3,
	"first_name": "cat",
	"last_name": "woman",
	"age": "22",
	"gender": "feline",
	"location": "hell here",
	"language": "meow",
	"certs": null,
	"profile_text": null,
	"skills": "9 lives"
}*/

module.exports = router;
