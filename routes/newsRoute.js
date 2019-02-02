const router = require("express").Router();
const newsCtrl = require("./../controllers/NewsCtrl");

//get all news
router.get("", newsCtrl.index);

module.exports = router;