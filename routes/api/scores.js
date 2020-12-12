const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
//adds checkAuth so if a user is not signed in, gives "not authorized" error
// if user is valid, allows them to hit the route
router.post('/', checkAuth, scoresCtrl.create);


// restric access so only valid authenticated users can access the route
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;