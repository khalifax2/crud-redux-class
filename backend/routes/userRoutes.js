const router = require("express").Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);
router.route("/").post(userController.createUser);
router.route("/:id").get(userController.getOne);
router.route("/:id").put(userController.updateUser);
router.route("/:id").delete(userController.deleteUser);

module.exports = router;
