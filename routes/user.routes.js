const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/create', userController.createUser);
router.get('/all', userController.getAllUsers);
router.get("/:id", userController.getUserByID);
router.get("/user/slug/:slug", userController.getUserBySLug);
router.get("/user/email/:email", userController.getUserByEmail);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router
