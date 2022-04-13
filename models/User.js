const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "User name is required"],
        maxlength:50
    },
    password:{
        type:String,
        required:[true, "User password is required"]
    }
})

module.exports = mongoose.models.User || mongoose.model("User", UserSchema)