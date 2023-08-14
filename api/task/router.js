const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('getting task data')
})

module.exports = router;
