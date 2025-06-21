var express = require('express');
const { getWalkerSummary , getDogs , getWalkRequests } = require('../db');
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
  try{
    const walkRequests = getWalkRequests();
    res.json(walkRequests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch walk requests' });
  }
});

router.get('/api/walkersummary', (req, res) => {
  try{
    const walkerSummary = getWalkerSummary();
    res.json(walkerSummary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch walker summary' });
  }
});
module.exports = router;
