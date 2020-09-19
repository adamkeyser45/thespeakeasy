const router = require('express').Router();
const { Post, User, Discuss, Mingle } = require("../../models");
const sequelize = require('../../config/connection');

// Get all users
router.get('/', (req, res) => {
    Mingle.findAll()
        .then(dbMingleData => res.json(dbMingleData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Mingle.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'description'
          ]
    })
    .then(dbMingleData => {
        if (!dbMingleData) {
          res.status(404).json({ message: 'No mingle found with this id' });
          return;
        }
        res.json(dbMingleData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    if (req.session) {
        Mingle.create({
            title: req.body.title,
            description: req.body.description
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

module.exports = router;