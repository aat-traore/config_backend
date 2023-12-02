const router = require('express').Router()
const fall=require("../controllers/userController")
const thiam=require("../controllers/QAuthen")


router.post('/new_user',fall.signup);
router.post('/login',thiam.auth);


module.exports = router;