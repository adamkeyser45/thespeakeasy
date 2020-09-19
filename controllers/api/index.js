const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');
const mingleRoutes = require('./mingle-routes.js')
const recipeRoutes = require('./recipe-routes.js')
// const { route } = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/mingle', mingleRoutes);
router.use('/recipes', recipeRoutes);




module.exports = router;