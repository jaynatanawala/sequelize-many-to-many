const express = require("express");
const {
  insertTutorial,
  fetchAll,
  fetchTutorialById,
} = require("../controller/tutorial.controller");

const router = express.Router();

router.post("/", insertTutorial);

router.get("/", fetchAll);

router.get("/findTutorialbyId/:id", fetchTutorialById);

module.exports = router;
