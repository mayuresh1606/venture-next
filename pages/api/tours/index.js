const Prices = require("../../../models/Prices");


export default async function(req, res) {
    const { method, query:{tourName} } = req
    if (method === "GET"){
        try{
            console.log("GET Request called")
            if (tourName){
                const prices = await Prices.find({tourName}).sort({tourNumber:1})
                return res.status(200).json({success:true, prices})
            }
            const prices = await Prices.find({})
            if (prices.length !== 0){
                return res.status(200).json({success:true, prices})
            }else{
                return res.status(200).json({success:true, prices, message:"No tours to display"})
            }
        }catch(err){
            res.status(400).json({success:false, err:err.response})
        }
    }
    else if (method === "POST"){
        try {
            const prices = await Prices.create(req.body);
            res.status(201).json({success:true, prices})
        } catch (error) {
            console.log(error);
            res.status(400).json({success:false, error});
        }
    }
    else{
        return res.status(400).json({success:false});
    }
}