const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dietSchema = new Schema({
    breakfast:String,
    snack:String,
    lunch:String,
    dinner:String,
    userId: String
}, {
  timestamps: true
});


module.exports = mongoose.model('Diet', dietSchema);