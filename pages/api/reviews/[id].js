const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;
export default async function (req, res) {
    let { db } = await connectToDatabase();
    const {query} = req;
    try{
        if (req.method === "DELETE"){
            const review = await db.collection('reviews').deleteOne({
                _id: new ObjectId(query)
            });
            return res.status(202).json({success:true, review:JSON.parse(JSON.stringify(review)), message:`Review deleted successfully...`});
        }
    }
    catch(err){
        return res.status(500).json({success:false, err});
    }
}