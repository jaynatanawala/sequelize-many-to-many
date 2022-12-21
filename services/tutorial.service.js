const Models = require("../models");

const Tag = Models.tags;
const Tutorial = Models.tutorials;

const createTutorial = async (tutorial) => {
  return await Tutorial.create(tutorial);
};

const findAll = async () => {
  return await Tutorial.findAll({
    include: [
      {
        model: Tag,
        through: {
          attributes: [],
        },
      },
    ],
  });
};

const findById = async (id) => {
  return await Tutorial.findByPk(id, {
    include: [
      {
        model: Tag,
        through: {
          attributes: [],
        },
      },
    ],
  });
};

module.exports = { createTutorial, findAll, findById };
