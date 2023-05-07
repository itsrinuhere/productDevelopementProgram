const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TeamsSchema = new Schema(
    {
        img: { 
            data: Buffer, contentType: String },
        name : {
            type:String
        },
        links:{
            type:String
        },
        designation:{
            type:String
        },
        email:{
            type:String
        }
    },{
        timestamps:true
    }
);
const team = mongoose.model('Teams',TeamsSchema);
module.exports=team