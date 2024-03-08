const {DataTypes}=require("sequelize")
const db=require("../config/db")
const user=db.define("user",{
    if:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    email:{type:DataTypes.email,allowNull:false},
    password:{type:DataTypes.password,allowNull:false}

},{
    timestamps:true,
    version:DataTypes.VERSION,
    createdAt:false,
    updatedAt:"Updated"
})

module.exports=user