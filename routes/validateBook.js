

const { check, validationResult } = require('express-validator');

exports.validateBook = [
	check('title').isAlphanumeric().isLength({min: 2,max: 50}),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		next();
	}
];


/*
	https://express-validator.github.io/docs/index.html
	https://stackoverflow.com/a/61268141
*/

