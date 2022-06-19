import Navbar from "../components/Navbar"
import {useEffect} from "react"
let educationalTours = [
    {
        destination:"LONAVALA",
        duration:"1 NIGHT – 2 DAYS",
        places_of_visit:"Karla Caves, Wax Museum, Sun Set Point, Valvan Dam",
        lux_bus_non_ac:"Rs. 4300/-",
        lux_bus_ac:"Rs. 5200/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"NASIK",
        duration:"1 NIGHT – 2 DAYS",
        places_of_visit:"Artillary Museum, Coin Museum, Pandav Caves",
        lux_bus_non_ac:"Rs. 4300/-",
        lux_bus_ac:"Rs. 5200/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"NASIK - BHANDARDHARA",
        duration:"2 NIGHTS – 3 DAYS",
        places_of_visit:"Artillary Museum, Coin Museum, Pandav Caves, Bhandardhara (full day excursion by jeep safari)",
        lux_bus_non_ac:"Rs. 6900/-",
        lux_bus_ac:"Rs. 7700/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"SAPUTARA - NASIK - BHANDARDHARA",
        duration:"3 NIGHTS – 4 DAYS",
        places_of_visit:"Saputara Lake, Rope Way, Tribal Museum, Sunset Point, Artillary Museum, Coin Museum, Pandav Caves, Bhandardhara (full day excursion by jeep safari)",
        lux_bus_non_ac:"Rs. 10,000/-",
        lux_bus_ac:"Rs. 11,500/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"PUNE",
        duration:"1 NIGHT – 2 DAYS",
        places_of_visit:"Agha Khan Palace, Khadakwasla Dam, Zoological Park, Shanivar Wada",
        lux_bus_non_ac:"Rs. 4300/-",
        lux_bus_ac:"Rs. 5200/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"PUNE - LONAVALA",
        duration:"2 NIGHTS – 3 DAYS",
        places_of_visit:"Agha Khan Palace, Khadakwasla Dam, Zoological Park, Shanivar Wada Karla Caves, Wax Museum, Sun Set Point, Valvan Dam, Shopping",
        lux_bus_non_ac:"Rs. 5250/-",
        lux_bus_ac:"Rs. 5900/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"BHANDARDHARA - IGATPURI",
        duration:"1 NIGHT – 2 DAYS",
        places_of_visit:"Bhandardhara (full day excursion by jeep safari), Bhavali Dam",
        lux_bus_non_ac:"Rs. 4300/-",
        lux_bus_ac:"Rs. 5200/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"BHANDARDHARA - IGATPURI",
        duration:"1 NIGHT – 2 DAYS",
        places_of_visit:"Bhandardhara (full day excursion by jeep safari), Bhavali Dam. Along with adventure activities",
        lux_bus_non_ac:"Rs. 5950/-",
        lux_bus_ac:"Rs. 6750/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"SAPUTARA",
        duration:"2 NIGHTS – 3 DAYS",
        places_of_visit:"Saputara Lake, Rope Way, Tribal Museum, Sunset Point, Gira Falls",
        lux_bus_non_ac:"Rs. 7,500/-",
        lux_bus_ac:"Rs. 8,200/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"MAHABALESHWAR - PRATAPGAD - PANCHGANI",
        duration:"2 NIGHTS – 3 DAYS",
        places_of_visit:"Veena lake, Panchganga Mandir, Arthur / Wilson Point. Pratapghad Fort , Panchgani Table Top.",
        lux_bus_non_ac:"Rs. 7,500/-",
        lux_bus_ac:"Rs. 8,200/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"MAHABALESHWAR - PRATAPGAD - PANCHGANI - RAIGAD",
        duration:"3 NIGHTS – 4 DAYS",
        places_of_visit:"Veena lake, Panchganga Mandir, Arthur / Wilson Point. Pratapghad Fort , Panchgani Table Top, Raigad Fort",
        lux_bus_non_ac:"Rs. 9.900/-",
        lux_bus_ac:"Rs. 10,900/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"MAHABALESHWAR - PRATAPGAD - PANCHGANI – RAIGAD KOLHAPUR – PANHALA",
        duration:"4 NIGHTS – 5 DAYS",
        places_of_visit:"Veena lake, Panchganga Mandir, Arthur / Wilson Point. Pratapghad Fort , Panchgani Table Top, Raigad Fort, Mahalaxmi Temple & Palace, Panhala Fort.",
        lux_bus_non_ac:"Rs. 12,500/-",
        lux_bus_ac:"Rs. 13,900/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"AJANTA – ELLORA – AURANGABAD",
        duration:"3 NIGHTS – 4 DAYS",
        places_of_visit:"Ajanta, Ellora, Grishneswar, Daulatabad Fort, Bibi – ka – Makbara, Panchakki",
        lux_bus_non_ac:"Rs. 10,900/-",
        lux_bus_ac:"Rs. 11,800/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"AJANTA – ELLORA – AURANGABAD - BHANDARDHARA",
        duration:"4 NIGHTS – 5 DAYS",
        places_of_visit:"Ajanta, Ellora, Grishneswar, Daulatabad Fort, Bibi – ka – Makbara, Panchakki, Bhandardhara (full day excursion by jeep safari)",
        lux_bus_non_ac:"Rs. 13,700/-",
        lux_bus_ac:"Rs. 14,900/-",
        out_of_state:false,
        transportation_1:false,
        transportation_1_duration:false,
        transportation_1_cost_non_ac:false,
        transportation_1_cost_ac:false,

        transportation_2:false,
        transportation_2_duration:false,
        transportation_2_cost_non_ac:false,
        transportation_2_cost_ac:false,

        transportation_3:false,
        transportation_3_duration:false,
        transportation_3_cost_non_ac:false,
        transportation_3_cost_ac:false,
    },
    {
        destination:"HYDERABAD",
        duration:false,
        places_of_visit:"Golconda Fort, Ramoji Film City, Lumbini Park, Birla Mandir,. Salarjung Museum, Snow City.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"4 Nights – 5 Days",
        transportation_1_cost_non_ac:"16,000/-",
        transportation_1_cost_ac:"17,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"21,900/-",
        transportation_2_cost_ac:"22,900/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"3 Nights – 4 Days",
        transportation_3_cost_non_ac:"27,000/-",
        transportation_3_cost_ac:"28,000/-",
    },
    {
        destination:"JAIPUR",
        duration:false,
        places_of_visit:"Birla Temple, Museum, Jantar Mantar, Amer Fort, City Palace, Hawa Mahal",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"4 Nights – 5 Days",
        transportation_1_cost_non_ac:"14,500/-",
        transportation_1_cost_ac:"15,500/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"3 Nights – 4 Days",
        transportation_2_cost_non_ac:"18,500/-",
        transportation_2_cost_ac:"19,500/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"2 Nights – 3 Days",
        transportation_3_cost_non_ac:"21,900/-",
        transportation_3_cost_ac:"22,900/-",
    },
    {
        destination:"JAIPUR - RANTHAMBORE",
        duration:false,
        places_of_visit:"Birla Temple, Museum, Jantar Mantar, Amer Fort, City Palace, Hawa Mahal, Jungle Safari.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"5 Nights – 6 Days",
        transportation_1_cost_non_ac:"19,000/-",
        transportation_1_cost_ac:"20,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"24,750/-",
        transportation_2_cost_ac:"25,750/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"4 Nights – 5 Days",
        transportation_3_cost_non_ac:"27,500/-",
        transportation_3_cost_ac:"28,500/-",
    },
    {
        destination:"JAIPUR - BHARATPUR",
        duration:false,
        places_of_visit:"Birla Temple, Museum, Jantar Mantar, Amer Fort, City Palace, Hawa Mahal, Bird Sanctuary.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"5 Nights – 6 Days",
        transportation_1_cost_non_ac:"19,000/-",
        transportation_1_cost_ac:"20,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"24,750/-",
        transportation_2_cost_ac:"25,750/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"3 Nights – 4 Days",
        transportation_3_cost_non_ac:"27,500/-",
        transportation_3_cost_ac:"28,500/-",
    },
    {
        destination:"JAIPUR – AGRA – FATEHPUR SIKRI",
        duration:false,
        places_of_visit:"Birla Temple, Museum, Jantar Mantar, Amer Fort, City Palace, Hawa Mahal, Fatehpur Sikri, Taj Mahal, Agra Fort.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"5 Nights – 6 Days",
        transportation_1_cost_non_ac:"19,000/-",
        transportation_1_cost_ac:"20,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"24,750/-",
        transportation_2_cost_ac:"25,750/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"4 Nights – 5 Days",
        transportation_3_cost_non_ac:"27,500/-",
        transportation_3_cost_ac:"28,500/-",
    },
    {
        destination:"DELHI - AGRA",
        duration:false,
        places_of_visit:"Qutub Minar. Red Fort, Raj Ghat, India Gate, Akshardham Temple, Taj Mahal, Agra Fort",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"5 Nights – 6 Days",
        transportation_1_cost_non_ac:"19,000/-",
        transportation_1_cost_ac:"20,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"24,750/-",
        transportation_2_cost_ac:"25,750/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"3 Nights – 4 Days",
        transportation_3_cost_non_ac:"26,500/-",
        transportation_3_cost_ac:"27,500/-",
    },
    {
        destination:"NAINITAL - DELHI",
        duration:false,
        places_of_visit:"High Altitude Zoo. Cable Car Ride. Nani Lake, Qutub Minar. Red Fort, Raj Ghat, India Gate.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"6 Nights – 7 Days",
        transportation_1_cost_non_ac:"18,900/-",
        transportation_1_cost_ac:"19,900/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"5 Nights – 6 Days",
        transportation_2_cost_non_ac:"25,000/-",
        transportation_2_cost_ac:"26,000/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"4 Nights – 5 Days",
        transportation_3_cost_non_ac:"27,500/-",
        transportation_3_cost_ac:"28,500/-",
    },
    {
        destination:"MUSSOORIE - DELHI",
        duration:false,
        places_of_visit:"Kempty Falls, Camels Back Road, Gun Hill, Company Garden, Qutub Minar. Red Fort, Raj Ghat, India Gate.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"6 Nights – 7 Days",
        transportation_1_cost_non_ac:"18,900/-",
        transportation_1_cost_ac:"19,900/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"5 Nights – 6 Days",
        transportation_2_cost_non_ac:"25,000/-",
        transportation_2_cost_ac:"26,000/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"4 Nights – 5 Days",
        transportation_3_cost_non_ac:"27,500/-",
        transportation_3_cost_ac:"28,500/-",
    },
    {
        destination:"KULU - MANALI - CHANDIGARH",
        duration:false,
        places_of_visit:"Rock Garden, Pinjore Garden, Mall Road, Hadimba Temple, Club House, Nagar Art Gallery, Vasisth Hot Water Spring",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"7 Nights – 8 Days",
        transportation_1_cost_non_ac:"21,900/-",
        transportation_1_cost_ac:false,

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"6 Nights – 7 Days",
        transportation_2_cost_non_ac:"27,000/-",
        transportation_2_cost_ac:false,

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"5 Nights – 6 Days",
        transportation_3_cost_non_ac:"29,500/-",
        transportation_3_cost_ac:false,
    },
    {
        destination:"AMRITSAR – DALHOUSIE - CHANDIGARH",
        duration:false,
        places_of_visit:"Rock Garden, Pinjore Garden, Wagha Border, Golden Temple, Jallianwala Bagh, Khajjiar & Dalhousie sight seeing.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"8 Nights – 9 Days",
        transportation_1_cost_non_ac:"22,500/-",
        transportation_1_cost_ac:false,

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"7 Nights – 8 Days",
        transportation_2_cost_non_ac:"28,000/-",
        transportation_2_cost_ac:false,

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"5 Nights – 6 Days",
        transportation_3_cost_non_ac:"31,000/-",
        transportation_3_cost_ac:false,
    },
    {
        destination:"MYSORE – BENGALURU - BANERGHATA",
        duration:false,
        places_of_visit:"Banergatta, Maharaja’s palace, St. Phelomina’s Cathedral, Zoological Garden, Shrirangapatana, Visvesvaraya Museum.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"4 Nights – 5 Days",
        transportation_1_cost_non_ac:"15,500/-",
        transportation_1_cost_ac:"17,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"24,000/-",
        transportation_2_cost_ac:"25,500/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"35 Nights – 4 Days",
        transportation_3_cost_non_ac:"27,000/-",
        transportation_3_cost_ac:"28,500/-",
    },
    {
        destination:"MYSORE – HASSAN – SHRAVANABELGOAL – BANERGHATA (Bengaluru)",
        duration:false,
        places_of_visit:"Banergatta, Maharaja’s palace, St. Phelomina’s Cathedral, Zoological Garden, Shrirangapatana Brindavan gardens, Sharavanbelgoal. Belur, Helebid.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"5 Nights – 6 Days",
        transportation_1_cost_non_ac:"15,500/-",
        transportation_1_cost_ac:"17,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"23,500/-",
        transportation_2_cost_ac:"25,000/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"3 Nights – 4 Days",
        transportation_3_cost_non_ac:"26,500/-",
        transportation_3_cost_ac:"28,000/-",
    },
    {
        destination:"OOTY – MYSORE - BANERGHATA (Bengaluru)",
        duration:false,
        places_of_visit:"Banergatta, Maharaja’s palace, St. Phelomina’s Cathedral, Zoological Garden, Shrirangapatana Brindavan gardens, Botanical Garden, Tea Plantation Sim’s park, Dodabetta peak, Ooty lake.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"6 Nights – 7 Days",
        transportation_1_cost_non_ac:"19,000/-",
        transportation_1_cost_ac:"20,500/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"5 Nights – 6 Days",
        transportation_2_cost_non_ac:"27,000/-",
        transportation_2_cost_ac:"28,500/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"4 Nights – 5 Days",
        transportation_3_cost_non_ac:"29,500/-",
        transportation_3_cost_ac:"31,000/-",
    },
    {
        destination:"KOCHI - WAYANAD – MYSORE - BANERGHATA (Bengaluru)",
        duration:false,
        places_of_visit:"Banergatta, Maharaja’s palace, St. Phelomina’s Cathedral, Zoological Garden, Wayanad (caves, Dams, Spice Garden, Forest) Fort Kochi, Vascodagama Tomb, Chinese Fishing Net, Jewish Synagogue",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"7 Nights – 8 Days",
        transportation_1_cost_non_ac:"20,000/-",
        transportation_1_cost_ac:"22,000/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"6 Nights – 7 Days",
        transportation_2_cost_non_ac:"28,000/-",
        transportation_2_cost_ac:"30,000/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"5 Nights – 6 Days",
        transportation_3_cost_non_ac:"31,500/-",
        transportation_3_cost_ac:"33,500/-",
    },
    {
        destination:"KOCHI – KUMARAKOM / ALLEPY – MUNNAR",
        duration:false,
        places_of_visit:"Kumarakom Bird Sanctuary  by backwater boat Safari, spice garden, Muttapatty Dam, Tea Plantation & Factory, Fort Kochi, Vascodagama Tomb, Chinese Fishing Net, Jewish Synagogue",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, luxury bus non a/c",
        transportation_1_duration:"6 Nights – 7 Days",
        transportation_1_cost_non_ac:"19,500/-",
        transportation_1_cost_ac:"21,500/-",

        transportation_2:"1 way flight, 1 way Train a/c. luxury bus non a/c",
        transportation_2_duration:"5 Nights – 6 Days",
        transportation_2_cost_non_ac:"26,500/-",
        transportation_2_cost_ac:"28,500/-",

        transportation_3:"2 way flight luxury bus non a/c",
        transportation_3_duration:"4 Nights – 5 Days",
        transportation_3_cost_non_ac:"29,000/-",
        transportation_3_cost_ac:"31,000/-",
    },
    {
        destination:"LITTLE RANN OF KUTCH - MODHERA - AMDAVAD",
        duration:false,
        places_of_visit:"Sun Temple, Sabarmati Ashram, Indroda Nature Park, Akshardham (light & sound show), Desert Safari",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, Gujarat Mail luxury bus a/c",
        transportation_1_duration:"4 Nights – 3 Days",
        transportation_1_cost_non_ac:"13,900/-",
        transportation_1_cost_ac:false,

        transportation_2:"Train a/c, Duronto luxury bus a/c",
        transportation_2_duration:"4 Nights – 5 Days",
        transportation_2_cost_non_ac:"15,200/-",
        transportation_2_cost_ac:false,

        transportation_3:"1 way flight, 1 way Train a/c. luxury bus a/c",
        transportation_3_duration:"4 Nights – 4 Days",
        transportation_3_cost_non_ac:"21,500/-",
        transportation_3_cost_ac:"23,000/-",

        transportation_4:"2 way flight luxury bus non a/c",
        transportation_4_duration:"4 Nights – 5 Days",
        transportation_4_cost_non_ac:"24,500/-",
        transportation_4_cost_ac:"26,000/-",
    },
    {
        destination:"MT. ABU – MODHERA - AMDAVAD",
        duration:false,
        places_of_visit:"Nakki Lake, Sunset Point, Guru Shikhar, Delwara Temple, Sun Temple, Sabarmati Ashram, Indroda Nature Park, Akshardham (light & sound show)",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, Gujarat Mail luxury bus a/c",
        transportation_1_duration:"5 Nights – 4 Days",
        transportation_1_cost_non_ac:"18,000/-",
        transportation_1_cost_ac:false,

        transportation_2:"Train a/c, Duronto luxury bus a/c",
        transportation_2_duration:"5 Nights – 4 Days",
        transportation_2_cost_non_ac:"20,000/-",
        transportation_2_cost_ac:false,

        transportation_3:"1 way flight, 1 way Train a/c. luxury bus a/c",
        transportation_3_duration:"4 Nights – 4 Days",
        transportation_3_cost_non_ac:"24,000/-",
        transportation_3_cost_ac:"25,500/-",

        transportation_4:"2 way flight luxury bus non a/c",
        transportation_4_duration:"4 Nights – 5 Days",
        transportation_4_cost_non_ac:"26,500/-",
        transportation_4_cost_ac:"28,000/-",
    },
    {
        destination:"MT. ABU – UDAIPUR – CHITTORGARH - HALDI GHATI - AKSHARDHAM",
        duration:false,
        places_of_visit:"Nakki Lake, Sunset Point, Guru Shikhar, Delwara Temple, Bhartiya Kala Mandal, Sahelio-ki-Bari, Chittorgarh Fort, City Palace, Haldi Ghati, Indroda Nature Park, Akshardham (light & sound show)",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, Gujarat Mail luxury bus a/c",
        transportation_1_duration:"6 Nights – 6 Days",
        transportation_1_cost_non_ac:"21,000/-",
        transportation_1_cost_ac:false,

        transportation_2:"Train a/c, Duronto luxury bus a/c",
        transportation_2_duration:"6 Nights – 6 Days",
        transportation_2_cost_non_ac:"22,500/-",
        transportation_2_cost_ac:false,

        transportation_3:"1 way flight, 1 way Train a/c. luxury bus a/c",
        transportation_3_duration:"6 Nights – 6 Days",
        transportation_3_cost_non_ac:"25,500/-",
        transportation_3_cost_ac:"27,000/-",

        transportation_4:"2 way flight luxury bus non a/c",
        transportation_4_duration:"6 Nights – 7 Days",
        transportation_4_cost_non_ac:"28,500/-",
        transportation_4_cost_ac:"30,000/-",
    },
    {
        destination:"MT. ABU – UDAIPUR – CHITTORGARH",
        duration:false,
        places_of_visit:"Nakki Lake, Sunset Point, Guru Shikhar, Delwara Temple, Bhartiya Kala Mandal, Sahelio-ki-Bari, Chittorgarh Fort, City Palace.",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, Gujarat Mail luxury bus a/c",
        transportation_1_duration:"6 Nights – 5 Days",
        transportation_1_cost_non_ac:"19,900/-",
        transportation_1_cost_ac:false,

        transportation_2:"Train a/c, Duronto luxury bus a/c",
        transportation_2_duration:"6 Nights – 5 Days",
        transportation_2_cost_non_ac:"21,500/-",
        transportation_2_cost_ac:false,

        transportation_3:"1 way flight, 1 way Train a/c. luxury bus a/c",
        transportation_3_duration:"6 Nights – 6 Days",
        transportation_3_cost_non_ac:"27,000/-",
        transportation_3_cost_ac:"28,500/-",

        transportation_4:"2 way flight luxury bus non a/c",
        transportation_4_duration:"5 Nights – 6 Days",
        transportation_4_cost_non_ac:"28,500/-",
        transportation_4_cost_ac:"30,000/-",
    },
    {
        destination:"UDAIPUR – CHITTORGARH - HALDI GHATI - AMDAVAD",
        duration:false,
        places_of_visit:"Bhartiya Kala Mandal, Sahelio-ki-Bari, Chittorgarh Fort, City Palace, Haldi Ghati, Indroda Nature Park, Sabarmati Ashram, Indroda Nature Park, Akshardham (light & sound show)",
        lux_bus_non_ac:false,
        lux_bus_ac:false,
        out_of_state:true,
        transportation_1:"Train a/c, Gujarat Mail luxury bus a/c",
        transportation_1_duration:"6 Nights – 7 Days",
        transportation_1_cost_non_ac:"6 Nights – 7 Days",
        transportation_1_cost_ac:false,

        transportation_2:"Train a/c, Duronto luxury bus a/c",
        transportation_2_duration:"6 Nights – 7 Days",
        transportation_2_cost_non_ac:"21,500/-",
        transportation_2_cost_ac:false,

        transportation_3:"1 way flight, 1 way Train a/c. luxury bus a/c",
        transportation_3_duration:"5 Nights – 6 Days",
        transportation_3_cost_non_ac:"24,900/-",
        transportation_3_cost_ac:"26,500/-",

        transportation_4:"2 way flight luxury bus non a/c",
        transportation_4_duration:"5 Nights – 6 Days",
        transportation_4_cost_non_ac:"28,000/-",
        transportation_4_cost_ac:"29,500/-",
    },
]

export default function Education(){
    useEffect(() => {
            // adding limit to package names inside individual package
        let currentYearDOM = document.querySelector(".current-year")
        let tourInfo = document.body.querySelectorAll('.tour-info')
        let packageName = document.body.querySelectorAll('.package-name')
        for(let i=0;i < tourInfo.length;i++){
            tour = tourInfo[i]
            pack = tour.querySelectorAll('.package-name')
            if(pack.length > 10){
                for(let j=pack.length; j > 10; j--){
                    pack[j-1].classList.add('hidden')
                }
            }
        }

        // adding current year in footer
        if (currentYearDOM !== null){
            currentYearDOM.textContent = new Date().getFullYear();
        }

        // setting rows length in tours.html to 3 for now
        const tableBody = document.querySelectorAll('.table-body')
        tableBody.forEach(function(table){
            let tableRow = table.querySelectorAll('#table-row');
            if(tableRow.length >= 11){
                for (let k=tableRow.length - 1; k > 9;k--){
                    const specificRow = tableRow[k]
                    table.removeChild(specificRow)
                }
            }
        })
        
        // JQuery for slide show

        var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
        // Apply to all slideshows that you define with the markup wrote
        slideshows.forEach(initSlideShow);

        function initSlideShow(slideshow) {
            console.log(slideshow);
            var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

            var index = 0, time = 5000;
            slides[index].classList.add('active');  
            
            setInterval( () => {
            slides[index].classList.remove('active');
            
            //Go over each slide incrementing the index
            index++;
            
            // If you go over all slides, restart the index to show the first slide and start again
            if (index === slides.length) index = 0; 
            
            slides[index].classList.add('active');

            }, time);
        }

        if (window.innerWidth <= "500px"){
            myContainer = document.querySelector(".my-container")
            myContainer.classList.add("font-size-small")
            console.log("called");
        }
        const images = document.querySelectorAll('.link-img')
        const displayImage = document.querySelector('.display-img')
        images.forEach(function(image){
            image.addEventListener('click', function(){
                const imageSrc = image.src;
                const imgTag = displayImage.querySelector('img')
                imgTag.src = imageSrc
                displayImage.classList.toggle('hidden')
            })
        })

  }, [])
    return <>
        <Navbar />
        <div className="my-container">
                <center><h4>Educational Tours</h4></center>
                <div id="slideshow-example" data-component="slideshow">
                    <div role="list">
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-1.jpeg" alt="err"/>
                        </div>
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-2.jpeg" alt="err"/>
                        </div>
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-3.jpeg" alt="err"/>
                        </div>
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-4.jpeg" alt="err"/>
                        </div>
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-5.jpeg" alt="err"/>
                        </div>
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-6.jpeg" alt="err"/>
                        </div>
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-7.jpeg" alt="err"/>
                        </div>
                        <div className="slide banner-img">
                        <img className="ban-img" src="/images/educationalTours/education-8.jpeg" alt="err"/>
                        </div>
                    </div>
                </div>
                <center className="font-weight" style={{"fontSize":'larger', "marginBottom": "1rem"}}>OUTDOOR EDUCATIONAL TOUR</center>
                <p><span className="font-weight">VENTURE WORLDS OUTDOOR EDUCATIONAL PROGRAM develops</span> a deeper
                relationship with nature, overcome adversity and increase resilience, personal social
                and leadership qualities, self-confidence, team building, overall development of students
                to be a balance between active engagements both indoors and outdoors to develop the
                mind, body, and soul.</p>
                <p>To achieve the above qualities in students VENTURE WORLD organizes various
                packages – related to various Subjects and Project related assignments like <span className="font-weight">Village tour</span> (experience village life, occupation, agriculture, farm and field work, tribal life etc.),
                <span className="font-weight">Environmental Studies</span> (knowledge of climate, plant, forest, soil, water harvesting
                program etc.) <span className="font-weight">Social Studies</span> and <span className="font-weight">Factory visit.</span></p>
                <ul>
                    <li>Study Tour</li>
                    <li>Scout / Guide Camp</li>
                    <li>Adventure Camp - Trekking, Adventure activities, Skiing etc.</li>
                    <li>Day Picnic</li>
                </ul>
                <center>{educationalTours.map((tour, index) => <>
                    <section key={index} id={`${tour.destination}`} className="edu-sect">
                    <h5 className="edu-heading underline"> {tour.destination} </h5>
                    <hr/>                    
                    { tour.transportation_1 ? <table className="table edu-table table-bordered border-secondary">
                        <tbody>
                            <tr>
                                <td>Place of Visit</td>
                                <td> {tour.places_of_visit} </td>
                            </tr>
                            <tr>
                                <td>Accomodation</td>
                                <td>Luxury / Star Hotel / Resort ( 4/5 sharing)</td>
                            </tr>
                            <tr>
                                <td>Food</td>
                                <td>Veg (Breakfast, Lunch, Evening Snacks & Dinner ) along with Snack
                                
                                Hampers, Mineral Water & Frooti</td>
                            </tr>
                            <tr>
                                <td>Other Services</td>
                                <td>1 Teacher for every 15 students,1 Escort for every 20 students Guide/
                                
                                Instructor Service. Entry fees.</td>
                            </tr>
                            <tr>
                                <td>Complimentry</td>
                                <td>Insurance of Rs. 50,000/ each during the </td>
                            </tr>
                            <tr>
                                <td>Tour Cost <br/>(Inclusive of GST) <br/>
                                Transportation</td>
                                <td>
                                    <table className="inside-table table-bordered border-secondary">
                                        
                                        <tbody>
                                        <tr className="">
                                            <td className="tour-td-desc td-padding">{tour.transportation_1}</td>
                                            <td className="td-dur-fs td-padding">{tour.transportation_1_duration}</td>
                                            <td className="td-padding">Rs.{tour.transportation_1_cost_non_ac}<br/>
                                            {tour.transportation_1_cost_ac ? `Rs.${tour.transportation_1_cost_ac} A/C BUS` : null }</td>
                                        </tr>
                                        
                                        
                                        <tr className="costs-row">
                                            <td className="tour-td-desc td-padding">{tour.transportation_2}</td>
                                            <td className="td-dur-fs td-padding">{tour.transportation_2_duration}</td>
                                            <td className="td-padding">Rs.{tour.transportation_2_cost_non_ac}<br/>
                                                {tour.transportation_2_cost_ac ? `Rs.${tour.transportation_2_cost_ac} A/C BUS` : null }</td>
                                        </tr>
                                        
                                        
                                        <tr className="costs-row">
                                            <td className="tour-td-desc td-padding">{tour.transportation_3}</td>
                                            <td className="td-dur-fs td-padding">{tour.transportation_3_duration}</td>
                                            <td className="td-padding">Rs.{tour.transportation_3_cost_non_ac}<br/>
                                            {tour.transportation_3_cost_ac ? `Rs.${tour.transportation_3_cost_ac} A/C BUS` : null }</td>
                                        </tr>
                                        {tour.transportation_4?
                                        <tr className="costs-row">
                                            <td className="tour-td-desc td-padding">{tour.transportation_4}</td>
                                            <td className="td-dur-fs td-padding">{tour.transportation_4_duration}</td>
                                            <td className="td-padding">Rs.{tour.transportation_4_cost_non_ac}<br/>
                                            {tour.transportation_4_cost_ac ? `Rs.${tour.transportation_4_cost_ac} A/C BUS` : null }</td>
                                        </tr>:null}
                                        </tbody>
                                        
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table> : <table className="table table-bordered border-secondary edu-table">
                        <tbody>
                            <tr>
                                <td>Duration</td>
                                <td>{tour.duration}</td>
                            </tr>
                            <tr>
                                <td>Place of Visit</td>
                                <td>{tour.places_of_visit} </td>
                            </tr>
                            <tr>
                                <td>Accomodation</td>
                                <td>Luxury / Star Hotel / Resort ( 4/5 sharing)</td>
                            </tr>
                            <tr>
                                <td>Food</td>
                                <td>Veg (Breakfast, Lunch, Evening Snacks & Dinner ) along with Snack
                                
                                Hampers, Mineral Water & Frooti</td>
                            </tr>
                            <tr>
                                <td>Other Services</td>
                                <td>1 Teacher for every 15 students,1 Escort for every 20 students Guide/
                                
                                Instructor Service. Entry fees.</td>
                            </tr>
                            <tr>
                                <td>Complimentry</td>
                                <td>Insurance of Rs. 50,000/ each during the </td>
                            </tr>
                            <tr>
                                <td>Tour Cost <br/>(Inclusive of GST)</td>
                                <td>
                                    <table className="inside-table table-bordered border-secondary">
                                        <tbody>
                                        <tr>
                                            <td className="td-padding">Transportation</td>
                                            <td className="td-padding">Luxury Bus Non A/C</td>
                                            <td className="td-padding">{tour.lux_bus_non_ac}</td>
                                        </tr>
                                        <tr>
                                            <td className="td-padding"></td>
                                            <td className="td-padding">Luxury Bus A/C</td>
                                            <td className="td-padding">{tour.lux_bus_ac}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    }
                    </section>
                </>)}
                </center>
            </div>
    </>
}