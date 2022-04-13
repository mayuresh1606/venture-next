import Prices from "../../../models/Prices";

export default async function (req, res) {
    const {query:{id}, method, body} = req;
    if (method === 'GET'){
        try {
            const prices = await Prices.findById(id)
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
            const prices = await Prices.findByIdAndRemove(id)
            if (!prices){
                return res.status(404).json({success:false, message:`object with id: ${id} not found`});
            }
            return res.status(200).json({sucess:true, prices, message:`Tour: deleted successfully`});
        } catch (error) {
            return res.status(400).json({success:false, error})
        }
    }
    else if (method === 'PATCH'){
        try {
            const prices = await Prices.findByIdAndUpdate(id, body)
            if (!prices){
                return res.status(404).json({success:false, message:`object with id: ${id} not found`});
            }
            return res.status(200).json({sucess:true, prices, message:"Prices updated successfully"})
        } catch (error) {
            return res.status(400).json({success:false, error})
        }
    }
}