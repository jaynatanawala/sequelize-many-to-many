const {
  createTag,
  findAll,
  addTutorial,
  findById,
} = require("../services/tag.service");

const insertTag = async (req, res) => {
  try {
    const newRecord = await createTag(req.body);

    if (newRecord) {
      res.status(200).json({
        code: 200,
        success: true,
        data: newRecord,
      });
    } else {
      res.status(500).json({
        code: 500,
        success: false,
        message: "something went wrong!",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

const findAllTags = async (req, res) => {
  try {
    const tagList = await findAll();

    res.status(200).json({
      code: 200,
      success: true,
      data: tagList,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

// add tutorial to a tag
const createTutorialByTag = async (req, res) => {
  try {
    const tagId = req.body.tagId;
    const tutorialId = req.body.tutorialId;

    const newRecord = await addTutorial(tagId, tutorialId);

    if (newRecord) {
      res.status(200).json({
        code: 200,
        success: true,
        data: newRecord,
      });
    } else {
      res.status(500).json({
        code: 500,
        success: false,
        message: "something went wrong",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

const findTagById = async (req, res) => {
  try {
    const fetchRecord = await findById(req.params.id);

    if (fetchRecord) {
      res.status(200).json({
        code: 200,
        success: true,
        data: fetchRecord,
      });
    } else {
      res.status(500).json({
        code: 500,
        success: false,
        message: "something went wrong",
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

module.exports = { insertTag, findAllTags, createTutorialByTag, findTagById };
