import Tour from "../../../models/Tour"
const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;

export default async function (req, res) {
    let { db } = await connectToDatabase();
    try{
    const {method, query} = req
    const {id} = query;
    // req.body.id = id;
    if (method === "PATCH"){
        const tour = await db.collection('tours').updateOne(
            {
                _id: id,
            },req.body
        );
        return res.status(202).json({success:true, tour:JSON.parse(JSON.stringify(tour))})
    }
    if (method === "GET"){
        const tour = await db.collection('tours').find(id).toArray();
        return res.status(200).json({success:true, tour:JSON.parse(JSON.stringify(tour))});
    }
    if (method === "DELETE"){
        const tour = await db.collection('tours').deleteOne({
            _id: new ObjectId(query)
        });
        return res.status(202).json({success:true, tour:JSON.parse(JSON.stringify(tour)), message:`Tour Name deleted successfully...`});
    }   
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false, err, message:"Something went wrong please try again later..."});
    }
}