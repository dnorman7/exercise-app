const express = require('express');
const router = express.Router();
const dietCtrl = require('../../controllers/diet');


/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
//adds checkAuth so if a user is not signed in, gives "not authorized" error
// if user is valid, allows them to hit the route

router.get('/', checkAuth, dietCtrl.get);
router.get('/:id', checkAuth, dietCtrl.getById);
router.post('/', checkAuth, dietCtrl.add);
router.delete('/', checkAuth, dietCtrl.remove);
router.patch('/', checkAuth, dietCtrl.edit);


// restric access so only valid authenticated users can access the route
function checkAuth(req, res, next) {
    console.log(req.user)
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;