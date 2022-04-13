import Tour from "../../../models/Tour"
export default async function (req, res) {
    try{
    const {method, query:{id}} = req
    if (method === "PATCH"){
        const tour = await Tour.findByIdAndUpdate(id, req.body);
        return res.status(202).json({success:true, tour})
    }
    if (method === "GET"){
        const tour = await Tour.findById(id);
        return res.status(200).json({success:true, tour});
    }
    if (method === "DELETE"){
        const tour = await Tour.findByIdAndRemove(id);
        console.log(tour, "DELETING")
        return res.status(202).json({success:true, tour, message:`Tour name: ${tour.tourName} deleted successfully...`});
    }   
    }catch(err){
        console.log(err);
        return res.status(500).json({success:false, err, message:"Something went wrong please try again later..."});
    }
}