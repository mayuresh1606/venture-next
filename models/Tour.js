const mongoose = require("mongoose");
const TourSchema = mongoose.Schema({
    tourName:{
        type:String,
        required:[true, "Tour name can't be blank"],
        unique:true
    },
    tourDescription:{
        type:String,
        required:[true, "Tour description is required"]
    },
    startingPrice:{
        type:String,
        required:[true, "Starting Price is required"]
    }
})

console.log(mongoose.models.Tour)

module.exports = mongoose.models.Tour || mongoose.model("Tour", TourSchema);