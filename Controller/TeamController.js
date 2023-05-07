const { response } = require("express")
const team = require("../Models/Teams")
const index= (req,res,next)=>{
    team.find().then(response=>{
        res.json({response});
    }
    ).catch(error =>{
        res.json({
            message:'an error'
        })
    })
}
const show = (req,res,next)=>{
    let id = req.body.id;
    team.findById(id).then(response =>{
        res.json({
            response
        })
    }).catch(error =>{
        res.json({
            message :'not found or an error occured'
        })
    });
}
const store = (req,res,next)=>{
    
}