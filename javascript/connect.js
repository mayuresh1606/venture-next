const mongoose = require("mongoose")
const connection = {};

const DbConnect = async () => {
    try{
    if (connection.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
    }catch(err){
        console.log(err)
    }
}

export default DbConnect;