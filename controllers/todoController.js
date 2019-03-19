const sequelize = require('../config/db');
const Todo = require('../models/Todo');

/* 
todo home page
request type  :  GET
*/

module.exports.index = (req, res) => {

    res.render('todo/index');
}


module.exports.save = async (req, res) => {

    let title = req.body.title;
    
    /* 
    //  Using pormises
    Todo.create({title: title }).then((todo)=>{
        res.redirect('/todo');
    }).catch(function(err){
        console.log(err);
    }) */
    
    let todo = await Todo.create({title: title });
    res.redirect('/todo');


}


