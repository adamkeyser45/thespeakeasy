const User = require("./User");
const Post = require("./Post");
const Recipe = require("./Recipe");
const Discuss = require("./Discuss");
const Mingle = require("./Mingle");

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Discuss, {
    foreignKey: 'user_id'
});
  
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Discuss.belongsTo(User, {
    foreignKey: 'user_id'
});
  
Discuss.belongsTo(Post, {
    foreignKey: 'post_id'
});

Discuss.belongsTo(Recipe, {
    foreignKey: 'post_id'
});

Post.hasMany(Discuss, {
    foreignKey: 'post_id'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Discuss, Mingle, Recipe };