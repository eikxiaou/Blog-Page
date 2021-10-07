const { Sequelize } = require('sequelize');

const DataTypes=Sequelize.DataTypes

const db = new Sequelize('socialmediadb','postgres','Dikshant#29',{
    host:'localhost',
    dialect:'postgres',
})

const COL_ID_DEF={
    type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true
}

const COL_USERNAME_DEF={
    type:Sequelize.DataTypes.STRING(25),
    unique: true,
    allowNull:false ,
}

const COL_TITLE_DEF={
    type:Sequelize.DataTypes.STRING(30),
    allowNull:false ,
}


const Users =db.define('user',{
    id:COL_ID_DEF,
    username:COL_USERNAME_DEF,
})

const Posts =db.define('post',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,
    body: {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false,
    }

})

const Comment=db.define('comment',{
    id:COL_ID_DEF,
    title:COL_TITLE_DEF,
    body:{
        type:Sequelize.DataTypes.TEXT('tiny'),
        allowNull:true
    }


})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comment)
Comment.belongsTo(Users)

Posts.hasMany(Comment)
Comment.belongsTo(Posts)

module.exports ={
    db,
    Users,
    Posts,
    Comment,
}