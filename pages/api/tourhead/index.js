import Tour from "../../../models/Tour";
const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;


export default async function (req, res) {
    try{
        let { db } = await connectToDatabase();
        const {method} = req;
        if (method === "POST"){
            console.log("post called")
            // const tour = await Tour.create(req.body)
            const tour = await db.collection('tours').insertOne(req.body);
            // return res.status(201).json({success:true, tour:JSON.stringify(tour)});
            return res.status(201).json({success:true, tour:{tourName:req.body.tourName}});
        }
        if (method === "GET"){
            console.log("GET REQUEST CALLED");
            console.log(req.query, "QUERY");
            if (req.query.tourName){
                const tour = await db.collection('tours').find({tourName:req.query.tourName}).toArray();
                return res.status(200).json({success:true, tour:JSON.parse(JSON.stringify(tour))});
            }
            const tour = await db.collection('tours').find({}).toArray();
            return res.status(200).json({success:true, tour:JSON.parse(JSON.stringify(tour))});
        }
    }catch(err){
        console.log(err)
        return res.status(400).json({err});
    }
}