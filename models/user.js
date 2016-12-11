var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    usersname: { type: String },
    email: { type: String }
  }
);

module.exports = mongoose.model('User', UserSchema);
//大写的User会自动对应数据库中的users这个集合。
//大写的Apple会自动对应数据库中的apples这个集合。
//大写的Person会自动对应数据库中的people这个集合。
