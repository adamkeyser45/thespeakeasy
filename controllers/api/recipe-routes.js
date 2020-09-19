const router = require('express').Router();
const { Post, User, Discuss, Recipe } = require("../../models");
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Recipe.findAll()
        .then(dbRecipeData => res.json(dbRecipeData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
  Recipe.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
          'id',
          'name',
          'instructions',
          'ingredient1',
          'ingredient2',
          'ingredient3',
          'ingredient4'
        ]
  })
  .then(dbRecipeData => {
      if (!dbRecipeData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Recipe.create({
      name: req.body.name,
      url: req.body.url,
      mixologist: req.body.user_id,
      instructions: req.body.instructions,
      ingredient1: req.body.ingredient1,
      ingredient2: req.body.ingredient2,
      ingredient3: req.body.ingredient3,
      ingredient4: req.body.ingredient4,
    })
      .then(dbRecipeData => res.json(dbRecipeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


module.exports = router;