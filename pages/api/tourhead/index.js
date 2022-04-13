import Tour from "../../../models/Tour";

export default async function (req, res) {
    try{
        const {method} = req;
        if (method === "POST"){
            const tour = await Tour.create(req.body);
            return res.status(201).json({success:true, tour});
        }
        if (method === "GET"){
            console.log("GET Request called")
            const tour = await Tour.find({});
            return res.status(200).json({success:true, tour});
        }
    }catch(err){
        return res.status(400).json(err.response);
    }
}