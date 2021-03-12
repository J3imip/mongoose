const mongod = require('./mongod.js');
const schemas = require('./schemas.js');
const mongoose = require('mongoose');

const mongoSticks = new mongod.mongoClient('sticks', schemas.sticksSchema); //global variable for interactions with 'sticks' collection
const mongoUsers = new mongod.mongoClient('users', schemas.userSchema); //global variable for interactions with 'users' collection

async function main () {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~Find One~~~~~~~~~~~~~~~~~~~~~~~~~~~

    var stickFindOne = await mongoSticks.findOne({order: 2});
    console.log(stickFindOne);
    
    var userFindOne = await mongoUsers.findOne({user_id: 1255526475});
    console.log(userFindOne);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Find~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    var stickFind = await mongoSticks.find({order: 2});
    console.log(stickFind);
    
    var userFind = await mongoUsers.find({user_id: 1255526475});
    console.log(userFind);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~Insert One~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const newStick = new schemas.stickSchemaConstructor({
        _id: new mongoose.Types.ObjectId(),
        author: "",
        keyboard: [],
        group: "",
        tags: [],
        order: 0
    });

    var stickInsertOne = await mongoSticks.insertOne(newStick);
    console.log(stickInsertOne);
    
    const newUser = new schemas.userSchemaConstructor({
        _id: new mongoose.Types.ObjectId(),
        user_id: 0,
        first_name: "",
        username: "",
        time: "",
        favourites: [],
        daily_uses: 0,
        last_use: "",
        subscription: true
    });
    var userInsertOne = await mongoUsers.insertOne(newUser);
    console.log(userInsertOne);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~Update One~~~~~~~~~~~~~~~~~~~~~~~~~~~

    const newStickUpdate = new schemas.stickSchemaConstructor({
        author: "",
        keyboard: [],
        group: "",
        tags: [],
        order: 0
    });

    var stickUpdateOne = await mongoSticks.updateOne({order: 75}, newStickUpdate);
    console.log(stickUpdateOne);

    const newUserUpdate = new schemas.userSchemaConstructor({
        user_id: 0,
        first_name: "",
        username: "",
        time: "",
        favourites: [],
        daily_uses: 0,
        last_use: "",
        subscription: true
    });

    var userUpdateOne = await mongoUsers.updateOne({user_id: 1255526475}, newUserUpdate);
    console.log(userUpdateOne);

}

main();