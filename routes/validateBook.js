

const { check, validationResult } = require('express-validator');

exports.validateBook = [
	check('title')
		.not().isEmpty().withMessage('missing title')
		.isLength({min: 2,max: 50}).withMessage('Title too short or too long')
    	.trim()
    	.escape(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		next();
	}
];

/*
exports.validateId = [
	check('_id')
	.isMongoId().withMessage('Not isMongoId')
	.trim(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
	}
];
*/

/*
	https://express-validator.github.io/docs/index.html
	https://stackoverflow.com/a/61268141
*/

