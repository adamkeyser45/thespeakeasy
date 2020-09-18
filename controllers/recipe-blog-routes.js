const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Discuss } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);

  Post.findAll({
      attributes: [
          'id',
          'title',
          'topic',
          'created_at'
      ],
      include: [
          {
              model: Discuss,
              attributes: ['id', 'opinion', 'user_id', 'post_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          }
      ]
  })
      .then(dbPostData => {
          // pass a single post object into the homepage template
          const posts = dbPostData.map(post => post.get({ plain: true }))
          console.log(posts);
          res.render('recipe-blog', { 
              posts,
              loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// router.get('/', (req, res) => {
//     res.render('recipe-blog', { loggedIn: true });
//   });

module.exports = router;