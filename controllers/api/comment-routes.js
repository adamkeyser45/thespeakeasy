const router = require('express').Router();
const { Discuss } = require('../../models');

// Get all comments
router.get('/', (req, res) => {
    Discuss.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Post to create a comment
router.post('/', (req, res) => {
    if (req.session) {
        Discuss.create({
            opinion: req.body.opinion,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

// Delete to destroy a comment by id
router.delete('/:id', (req, res) => {
    Discuss.destroy({
        where: {
          id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
            }
          res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });    
});

module.exports = router;