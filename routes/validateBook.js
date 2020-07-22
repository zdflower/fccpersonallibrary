

const { check, validationResult } = require('express-validator');

exports.validateBook = [
	check('title')
		.not().isEmpty().withMessage('missing title')
		.isLength({min: 2,max: 50}).withMessage('1 < Title length < 51')
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
	https://express-validator.github.io/docs/index.html
	
	How to implement validation in a separate file using express validator:
	https://stackoverflow.com/a/61268141
*/

