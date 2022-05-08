const {connectToDatabase} = require("../../../lib/mongodb");
const ObjectId = require('mongodb').ObjectId;

export default async function (req, res) {
    let { db } = await connectToDatabase();
    const {query, method, body} = req;
    const {id} = query
    if (method === 'GET'){
        try {
            const prices = await db.collection('prices').find({_id:id})
            if (!prices){
                return res.status(404).json({success:false, message:`object with id: ${id} not found`});
            }
            return res.status(200).json({sucess:true, data:prices})
        } catch (error) {
            return res.status(400).json({success:false, error})
        }
    }   
    else if (method === 'DELETE'){
        try {
            console.log("DELETE called prices");
            console.log(query)
            const prices = await db.collection('prices').deleteOne({
                _id: new ObjectId(query)
            })
            console.log(prices)
            if (prices.deletedCount === 0){
                return res.status(404).json({success:false, message:`object with id: ${id} not found`});
            }
            return res.status(200).json({sucess:true, prices, message:`Tour: deleted successfully`});
        } catch (error) {
            return res.status(400).json({success:false, error})
        }
    }
    else if (method === 'PATCH'){
        try {
            const prices = await db.collection('prices').updateOne({
                _id: new ObjectId(query)
            }, {$set: body})
            if (prices.updatedCount === 0){
                return res.status(404).json({success:false, message:`object with id: ${id} not found`});
            }
            return res.status(200).json({sucess:true, prices, message:"Prices updated successfully"})
        } catch (error) {
            return res.status(400).json({success:false, error})
        }
    }
}