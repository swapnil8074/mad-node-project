const sequelize = require('../config/db');
const Todo = require('../models/Todo');

/* 
todo home page
request type  :  GET
*/

module.exports.index = (req, res) => {

    res.render('todo/index');
}


module.exports.save = (req, res) => {

    let title = req.body.title;



    console.log(req.body);

    res.redirect('/todo');
}