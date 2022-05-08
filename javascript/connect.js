const mongoose = require("mongoose");

const DbConnect = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("Database connected successfully")).catch((err) => console.log(err));
}

module.exports = DbConnect;