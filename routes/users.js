const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/travel_guide");

const userSchema = new mongoose.Schema({
  username:String,
  secret:String,
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);
module.exports = User;