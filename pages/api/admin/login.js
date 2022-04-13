const User = require("../../../models/User");
const bcrypt = require("bcryptjs");

export default async(req, res) => {
    try{
        const {method} = req;
        if(method === "POST"){
            const [user] = await User.find({name:req.body.name})
            if (user.length === 0){
                return res.status(400).json({success:false, message:"Cannot find user"});
            }
            if (!req.body.password){
                return res.status(400).json({success:false, message:"Password is required"})
            }
            
            if(await bcrypt.compare(req.body.password, user.password)){
                return res.status(200).json({success:true, user, message:"Logged in successfully"})
            }else{
                return res.status(400).json({success:false, message:"Invalid Password"});
            }
        }
    }catch(err){
        return res.status(500).json({success:false, err});
    }
}