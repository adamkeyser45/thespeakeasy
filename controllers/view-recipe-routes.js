const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Discuss, Recipe } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);

  Recipe.findAll()
      .then(dbRecipeData => {
          // pass a single recipe object into the homepage template
          const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }))
          console.log(recipes);
          res.render('view-recipes', { 
              recipes,
              loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

module.exports = router;