const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    user_id: Number,
    first_name: String,
    username: String,
    time: String,
    favourites: Array,
    daily_uses: Number,
    last_use: String,
    subscription: Boolean
}, {
    versionKey: false
});

const stickSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    author: String,
    keyboard: Array,
    group: String,
    tags: Array,
    order: Number
}, {
    versionKey: false
});

const userSchemaConstructor = mongoose.model('users', userSchema);
const stickSchemaConstructor = mongoose.model('sticks', stickSchema);

module.exports = {userSchema, stickSchema, userSchemaConstructor, stickSchemaConstructor};