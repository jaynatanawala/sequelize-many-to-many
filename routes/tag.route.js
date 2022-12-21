const express = require("express");
const {
  findAllTags,
  createTutorialByTag,
  findTagById,
  insertTag,
} = require("../controller/tag.controller");

const router = express.Router();

router.post("/", insertTag);

router.get("/", findAllTags);

router.post("/addTutorial", createTutorialByTag);

router.get("/fetchTagById/:id", findTagById);

module.exports = router;
