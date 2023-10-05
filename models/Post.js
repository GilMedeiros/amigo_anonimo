const mongoose = require('mongoose');

const post = new mongoose.Schema({
    user_id:String,
    title: String,
    topic:String,
    text: String,
    date: Date,

});

module.exports = post;

