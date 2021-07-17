const router = require('express').Router();
const { db } = require('../../data/db.json');

router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
});


module.exports = router;