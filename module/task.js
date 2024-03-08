const {DataTypes}=require("sequelize")
const data=require("..//config/db")

const task=data.define("task",{
    // id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    title:{type:DataTypes.STRING,allowNull:false},
    description:{type:DataTypes.STRING,allowNull:false},
    price:{type:DataTypes.NUMBER,allowNull:false}
})
module.exports=task