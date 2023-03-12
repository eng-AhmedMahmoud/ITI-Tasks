const UModel = require("../Models/UsersModel");
const bcrypt = require("bcrypt");

let Reg = async(req,res)=>{
    //Model
    //Validation [if Email Exist ???]
    //Hash Password
    //Add
    var foundUser = await UModel.findOne({email:req.body.email});//null
    console.log(foundUser);
    if(foundUser){
        res.send("User Already Exist");
    }else{
        let genSalt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(req.body.password, genSalt) 
        var newUser = req.body;
        newUser.password = hashedPassword;
        let u1 = new UModel(newUser);
        await u1.save();
        res.json(u1);
    }
}

module.exports = {
    Reg
}