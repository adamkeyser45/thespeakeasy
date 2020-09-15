const router = require('express').Router();
const { Post, User, Discuss } = require('../models');

// These are the routes for the homepage

// Get to find all posts
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
            res.render('homepage', { 
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get a single post by id
router.get('/post/:id', (req, res) => {

    Post.findOne({
        where: {
            id: req.params.id
        },
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id.' });
                return;
            }
  
            // serialize the data
            const post = dbPostData.get({ plain: true });
  
            // pass data to template
            res.render('single-post', { 
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');
});

router.get('/recipe-blog', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('recipe-blog');
});

   
module.exports = router;