const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;

export default async function(req, res){
    let { db } = await connectToDatabase();
    const {method} = req;
    try{
        if (method === "GET"){
            const reviews = await db.collection("reviews").find({}).toArray();
            return res.status(200).json({success:true, reviews:JSON.parse(JSON.stringify(reviews))});
        }
        else if (method === "POST"){
            const reviews = await db.collection("reviews").insertOne(req.body);
            return res.status(201).json({success:true, reviews});
        }
    }
    catch(err){
        return res.status(500).json({err})
    }
}