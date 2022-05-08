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
        default:false
    },
    luxuryTourCompactGroupSecond:{
        type:String,
        default:false
    },
    budgetTourComfortGroupFirst:{
        type:String,
        default:false
    },
    budgetTourCompactGroupFirst:{
        type:String,
        default:false
    },
    budgetTourComfortGroupSecond:{
        type:String,
        default:false
    },
    budgetTourCompactGroupSecond:{
        type:String,
        default:false
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
        default:false
    },
    luxuryTourCompactRegularSecond:{
        type:String,
        default:false
    },
    budgetTourComfortRegularFirst:{
        type:String,
        default:false
    },
    budgetTourCompactRegularFirst:{
        type:String,
        default:false
    },
    budgetTourComfortRegularSecond:{
        type:String,
        default:false
    },
    budgetTourCompactRegularSecond:{
        type:String,
        default:false
    },
    // third table
    scheduledTourFirst:{
        type:String,
        default:false
    },
    scheduledTourSecond:{
        type:String,
        default:false
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