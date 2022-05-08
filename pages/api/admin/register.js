const User = require("../../../models/User");
const bcrypt = require("bcryptjs");
const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;

export default async(req, res) => {
    try{
        let { db } = await connectToDatabase();
        const {method} = req;
        if (method === "POST"){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            console.log(salt, hashedPassword);
            const user = await User.create({name:req.body.name, password: hashedPassword});

            return res.status(200).json({success:true, user})
        }
    }catch(err){
        return res.status(500).json({success:false, err})
    }
}