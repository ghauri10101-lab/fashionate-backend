const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const { validateBraceletRequest } = require('../middleware/validationMiddleware');
const { submitBraceletRequest } = require('../controllers/braceletController');

const router = express.Router();

router.post('/', upload.single('image'), validateBraceletRequest, submitBraceletRequest);

module.exports = router;
