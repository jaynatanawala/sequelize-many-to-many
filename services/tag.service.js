const Models = require("../models");

const Tag = Models.tags;
const Tutorial = Models.tutorials;

const createTag = async (tag) => {
  return await Tag.create(tag);
};

const findAll = async () => {
  return await Tag.findAll({
    include: [
      {
        model: Tutorial,
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

const addTutorial = async (tagId, tutorialId) => {
  const foundTag = await Tag.findByPk(tagId);

  const foundTutorial = await Tutorial.findByPk(tutorialId);

  const newRecord = await foundTag.addTutorial(foundTutorial);

  return newRecord;
};

const findById = async (id) => {
  return await Tag.findByPk(id, {
    include: [
      {
        model: Tutorial,
        attributes: ["id", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = { createTag, findAll, addTutorial, findById };
