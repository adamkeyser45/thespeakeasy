const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');
const recipeBlogRoutes = require('./recipe-blog-routes.js');
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const myaccountRoutes = require('./myaccount-routes.js');
const profileRoutes = require('./profile-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/recipe-blog', recipeBlogRoutes);
router.use('/myaccount', myaccountRoutes);
router.use('/view-profile', profileRoutes);
router.use('/api', apiRoutes);
router.use('/view-posts', recipeBlogRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router; 

