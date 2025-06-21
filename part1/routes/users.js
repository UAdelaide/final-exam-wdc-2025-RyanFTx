var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/api/dogs', (req, res) => {
  try {
    const dogs = getDogs();
    res.json(dogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});

router.get('/api/walkrequests/open', (req,res) => {

}
module.exports = router;
