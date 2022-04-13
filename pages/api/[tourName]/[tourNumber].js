const Prices = require("../../../models/Prices");


export default async(req, res) => {
    const { method, query } = req
    query.tourNumber = Number(query.tourNumber)
    if (method === "GET"){
        try{
            const prices = await Prices.find(query)
            if (prices.length !== 0){
                return res.status(200).json({success:true, prices})
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