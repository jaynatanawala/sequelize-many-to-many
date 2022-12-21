const {
  createTutorial,
  findAll,
  findById,
} = require("../services/tutorial.service");

const insertTutorial = async (req, res) => {
  try {
    const newRecord = await createTutorial(req.body);

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

const fetchAll = async (req, res) => {
  try {
    const tutorialList = await findAll();

    res.status(200).json({
      code: 200,
      success: false,
      data: tutorialList,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      success: false,
      message: error.message,
    });
  }
};

const fetchTutorialById = async (req, res) => {
  try {
    const fetchedTutorial = await findById(req.params.id);

    if (fetchedTutorial) {
      res.status(200).json({
        code: 200,
        success: true,
        data: fetchedTutorial,
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

module.exports = { insertTutorial, fetchAll, fetchTutorialById };
