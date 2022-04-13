const mongoose = require("mongoose");

const PricesSchema = new mongoose.Schema({
    tourName:{
        type: mongoose.Schema.Types.String, 
        ref: 'Tour'
    },
    tourNumber:{
        type:Number,
        required:[true, "Tour Number is required"]
    },
    comfortName:{
        type:String,
        required:[true, "Comfort name is required"]
    },
    comfortDuration:{
        type:String,
        required:[true, "Comfort Duration is required"]
    },
    comfortPrice:{
        type:String,
        required:[true, "Tour Number is required"]
    },
    compactName:{
        type:String,
        default:false
    },
    compactPrice:{
        type:String,
        default:false
    },
    compactDuration:{
        type:String,
        default:false
    },
    itineraryDayOne:{
        type:String,
        required:[true, "Itinerary day One is required"]
    },
    itineraryDayTwo:{
        type:String,
        required:[true, "Itinerary day Two is required"]
    },
    itineraryDayThree:{
        type:String,
        required:[true, "Itinerary day Three is required"]
    },
    itineraryDayFour:{
        type:String,
        required:[true, "Itinerary day Four is required"]
    },
    itineraryDayFive:{
        type:String,
        required:[true, "Itinerary day Five is required"]
    },
    itineraryDaySix:{
        type:String,
        required:[true, "Itinerary day Six is required"]
    },
    itineraryDaySeven:{
        type:String,
        default:false
    },
    itineraryDayEight:{
        type:String,
        default:false
    },
    itineraryDayNine:{
        type:String,
        default:false
    },
    itineraryDayTen:{
        type:String,
        default:false
    },
    itineraryDayEleven:{
        type:String,
        default:false
    },
    itineraryDayTwelve:{
        type:String,
        default:false
    },
    itineraryDayThirteen:{
        type:String,
        default:false
    },
    itineraryDayFourteen:{
        type:String,
        default:false
    },
    noteOne:{
        type:String
    },
    noteTwo:{
        type:String
    },
    noteThree:{
        type:String
    },
    noteFour:{
        type:String
    },
    noteFive:{
        type:String,
        default:false
    },
    luxuryTourComfortGroupFirst:{
        type:String,
        required:true
    },
    luxuryTourCompactGroupFirst:{
        type:String,
        required:true
    },
    luxuryTourComfortGroupSecond:{
        type:String,
        required:false
    },
    luxuryTourCompactGroupSecond:{
        type:String,
        required:false
    },
    budgetTourComfortGroupFirst:{
        type:String,
        required:false
    },
    budgetTourCompactGroupFirst:{
        type:String,
        required:false
    },
    budgetTourComfortGroupSecond:{
        type:String,
        required:false
    },
    budgetTourCompactGroupSecond:{
        type:String,
        required:false
    },
    // Second Table
    luxuryTourComfortRegularFirst:{
        type:String,
        required:true
    },
    luxuryTourCompactRegularFirst:{
        type:String,
        required:true
    },
    luxuryTourComfortRegularSecond:{
        type:String,
        required:false
    },
    luxuryTourCompactRegularSecond:{
        type:String,
        required:false
    },
    budgetTourComfortRegularFirst:{
        type:String,
        required:false
    },
    budgetTourCompactRegularFirst:{
        type:String,
        required:false
    },
    budgetTourComfortRegularSecond:{
        type:String,
        required:false
    },
    budgetTourCompactRegularSecond:{
        type:String,
        required:false
    },
    // third table
    scheduledTourFirst:{
        type:String,
        required:false
    },
    scheduledTourSecond:{
        type:String,
        required:false
    },
    shortNote:{
        type:String,
        default:false
    },
    accommodationOne:{
        type:String,
        default:false
    },
    accommodationTwo:{
        type:String,
        default:false
    },
    accommodationThree:{
        type:String,
        default:false
    },
    accommodationFour:{
        type:String,
        default:false
    },
    accommodationFive:{
        type:String,
        default:false
    },
})

console.log(mongoose.models.Prices, "PRICES")

module.exports = mongoose.models.Prices || mongoose.model("Prices", PricesSchema)