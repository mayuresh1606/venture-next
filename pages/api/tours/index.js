const Prices = require("../../../models/Prices");
const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;

export default async function(req, res) {
    let { db } = await connectToDatabase();
    const { method, query:{tourName} } = req
    if (method === "GET"){
        try{
            if (tourName){
                const prices = await db.collection('prices').find({tourName}).sort({tourNumber:1}).toArray();
                return res.status(200).json({success:true, prices:JSON.parse(JSON.stringify(prices))})
            }
            const prices = await db.collection('prices').find({}).toArray();
            if (prices.length !== 0){
                return res.status(200).json({success:true, prices:JSON.parse(JSON.stringify(prices))});
            }else{
                return res.status(200).json({success:true, prices:JSON.parse(JSON.stringify(prices)), message:"No tours to display"})
            }
        }catch(err){
            res.status(400).json({success:false, err:err.response})
        }
    }
    else if (method === "POST"){
        try {
            console.log("post called")
            const prices = await db.collection('prices').insertOne(req.body);
            console.log("post called", prices)
            return res.status(201).json({success:true, prices})
        } catch (error) {
            console.log(error);
            res.status(400).json({success:false, error});
        }
    }
    else{
        return res.status(400).json({success:false});
    }
}