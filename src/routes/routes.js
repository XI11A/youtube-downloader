const router = require("express").Router();
const controller = require("../controller/controller");

router.get("/");
router.get("/yt", controller.getYoutube);

module.exports = router;
