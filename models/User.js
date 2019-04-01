const Sequelize = require('Sequelize');
const sequelize = require('../config/db');
const bcrypt = require("bcrypt");

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING(255),
    email: Sequelize.STRING(255),    
    password: Sequelize.STRING(255),
    profile_pic: Sequelize.STRING(255),
    joiningDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    deletedAt: Sequelize.DATE,
})


User.beforeCreate((user, options) => {
    
    // // adding hash async
    // bcrypt.hash(user.password, 10, function(err, hash) {
    //     // Store hash in your password DB.
    //     user.password = hash;

    //   });

    // adding hash sync way
    var hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    
});



module.exports = User;
