const Prices = require("../../../models/Prices");
const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;

export default async(req, res) => {
    let { db } = await connectToDatabase();
    const { method, query } = req
    query.tourNumber = Number(query.tourNumber)
    if (method === "GET"){
        try{
            console.log(query)
            const prices = await db.collection('prices').find(query).toArray();
            if (prices.length !== 0){
                return res.status(200).json({success:true, prices:JSON.parse(JSON.stringify(prices))})
            }else{
                return res.status(404).json({success:false, message:"Tour not found"})
            }
        }catch(err){
            res.status(400).json({success:false})
        }
    }else{
        return res.status(400).json({success:false});
    }
}