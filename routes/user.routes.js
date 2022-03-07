const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/create', userController.createUser);
router.get('/all', userController.getAllUsers);

module.exports = router
