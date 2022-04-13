export default function Test(req, res){
    if (req.method === "GET"){
        return res.status(200).json({success: true, test: "TEST"})
    }
}