const router = require("express").Router();
const { getUsers } = require("../controllers");

router.get("/", getUsers);

module.exports = router;
