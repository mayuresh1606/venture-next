import {useState, useEffect} from "react"
import axios from "axios";
import Link from "next/link"
import ErrorBoundary from "../../javascript/ErrorBoundary";

export default function AdminTours(){
    const [formValues, setFormValues] = useState({});
    const [tours, setTours] = useState([]);
    const [error, setError] = useState(false);
    const [edit, setEdit] = useState(false);
    const [tourNames, setTourNames] = useState(false);

    useEffect(async() => {
        setEdit(false)
        const {data: {tour}} = await axios.get(`/api/tourhead`);
        setTourNames(tour.map((tour) => tour.tourName))
        // console.log(tourNames, tour)
    }, [])

    // useEffect(async() => {
    // }, [edit])

    const handleSubmit = async (e) => {
        try{
            if (!formValues.itineraryDayFive){
            setFormValues({...formValues, itineraryDayFive:"false"})
        }
        if (!formValues.itineraryDaySix){
            setFormValues({...formValues, itineraryDaySix:"false"})
        }
        if (!formValues.itineraryDaySeven){
            setFormValues({...formValues, itineraryDaySeven:"false"})
        }
        if (!formValues.itineraryDayEight){
            setFormValues({...formValues, itineraryDayEight:"false"})
        }
        if (!formValues.itineraryDayNine){
            setFormValues({...formValues, itineraryDayNine:"false"})
        }
        if (!formValues.itineraryDayTen){
            setFormValues({...formValues, itineraryDayTen:"false"})
        }
        if (!formValues.itineraryDayEleven){
            setFormValues({...formValues, itineraryDayEleven:"false"})
        }
        if (!formValues.itineraryDayTwelve){
            setFormValues({...formValues, itineraryDayTwelve:"false"})
        }
        if (!formValues.itineraryDayThirteen){
            setFormValues({...formValues, itineraryDayThirteen:"false"})
        }
        if (!formValues.itineraryDayFourteen){
            setFormValues({...formValues, itineraryDayFourteen:"false"})
        }
        if (!formValues.commpactName){
            setFormValues({...formValues, compactName:"false"})
        }
        if (!formValues.compactDuration){
            setFormValues({...formValues, compactDuration:"false"})
        }
        if (!formValues.compactPrice){
            setFormValues({...formValues, compactPrice:"false"})
        }
        if (!formValues.noteThree){
            setFormValues({...formValues, noteThree:"false"})
        }
        if (!formValues.noteFour){
            setFormValues({...formValues, noteFour:"false"})
        }
        if (!formValues.noteFive){
            setFormValues({...formValues, noteFive:"false"})
        }
        if (!formValues.accommodationThree){
            setFormValues({...formValues, accommodationThree:"false"})
        }
        if (!formValues.accommodationFour){
            setFormValues({...formValues, accommodationFour:"false"})
        }
        if (!formValues.accommodationSix){
            setFormValues({...formValues, accommodationSix:"false"})
        }
        if (!formValues.luxuryTourComfortGroupSecond){
            setFormValues({...formValues, luxuryTourComfortGroupSecond:"false"})
        }
        if (!formValues.luxuryTourCompactGroupSecond){
            setFormValues({...formValues, luxuryTourCompactGroupSecond:"false"})
        }
        if (!formValues.budgetTourComfortGroupFirst){
            setFormValues({...formValues, budgetTourComfortGroupFirst:"false"})
        }
        if (!formValues.budgetTourCompactGroupFirst){
            setFormValues({...formValues, budgetTourCompactGroupFirst:"false"})
        }
        if (!formValues.budgetTourComfortGroupSecond){
            setFormValues({...formValues, budgetTourComfortGroupSecond:"false"})
        }
        if (!formValues.budgetTourCompactGroupSecond){
            setFormValues({...formValues, budgetTourCompactGroupSecond:"false"})
        }
        if (!formValues.luxuryTourComfortRegularSecond){
            setFormValues({...formValues, luxuryTourComfortRegularSecond:"false"})
        }
        if (!formValues.luxuryTourCompactRegularSecond){
            setFormValues({...formValues, luxuryTourCompactRegularSecond:"false"})
        }
        if (!formValues.budgetTourComfortRegularFirst){
            setFormValues({...formValues, budgetTourComfortRegularFirst:"false"})
        }
        if (!formValues.budgetTourCompactRegularFirst){
            setFormValues({...formValues, budgetTourCompactRegularFirst:"false"})
        }
        if (!formValues.budgetTourComfortRegularSecond){
            setFormValues({...formValues, budgetTourComfortRegularSecond:"false"})
        }
        if (!formValues.budgetTourCompactRegularSecond){
            setFormValues({...formValues, budgetTourCompactRegularSecond:"false"})
        }
        if (!formValues.scheduledTourFirst){
            setFormValues({...formValues, scheduledTourFirst:"false"})
        }
        if (!formValues.scheduledTourSecond){
            setFormValues({...formValues, scheduledTourSecond:"false"})
        }
            e.preventDefault();
            console.log(formValues, "FOrm");
            const {data: {prices, message}} = await axios.patch(`/api/tours/${tours[0]._id}`, formValues)
            console.log(prices, "PRices updated");
            if (message){
                setError({message})
                setTimeout(() => {
                    setError(false)
                }, 3000)
            }
        }catch(err){
            if (err.response.data.error.message){
                setError({
                    message:err.response.data.error.message
                })
                setTimeout(() => setError(false), 30000)
            }
            console.log(err.response);
        }
    }

    const getInfo = async() => {
        try{
            const {data} = await axios.get(`/api/${formValues.tourName}/${formValues.tourNumber}`)
            console.log(data, "Tour data");
            if (data.prices){
                setTours(data.prices)
                console.log(data.prices);
            }
        }catch(err){
            console.log(err.response);
            setError({message: err.response.data.message})
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }

    const createTourPrices = async(e) => {
        if (!formValues.itineraryDayFive){
            setFormValues({...formValues, itineraryDayFive:"false"})
        }
        if (!formValues.itineraryDaySix){
            setFormValues({...formValues, itineraryDaySix:"false"})
        }
        if (!formValues.itineraryDaySeven){
            setFormValues({...formValues, itineraryDaySeven:"false"})
        }
        if (!formValues.itineraryDayEight){
            setFormValues({...formValues, itineraryDayEight:"false"})
        }
        if (!formValues.itineraryDayNine){
            setFormValues({...formValues, itineraryDayNine:"false"})
        }
        if (!formValues.itineraryDayTen){
            setFormValues({...formValues, itineraryDayTen:"false"})
        }
        if (!formValues.itineraryDayEleven){
            setFormValues({...formValues, itineraryDayEleven:"false"})
        }
        if (!formValues.itineraryDayTwelve){
            setFormValues({...formValues, itineraryDayTwelve:"false"})
        }
        if (!formValues.itineraryDayThirteen){
            setFormValues({...formValues, itineraryDayThirteen:"false"})
        }
        if (!formValues.itineraryDayFourteen){
            setFormValues({...formValues, itineraryDayFourteen:"false"})
        }
        if (!formValues.commpactName){
            setFormValues({...formValues, compactName:"false"})
        }
        if (!formValues.compactDuration){
            setFormValues({...formValues, compactDuration:"false"})
        }
        if (!formValues.compactPrice){
            setFormValues({...formValues, compactPrice:"false"})
        }
        if (!formValues.noteThree){
            setFormValues({...formValues, noteThree:"false"})
        }
        if (!formValues.noteFour){
            setFormValues({...formValues, noteFour:"false"})
        }
        if (!formValues.noteFive){
            setFormValues({...formValues, noteFive:"false"})
        }
        if (!formValues.accommodationThree){
            setFormValues({...formValues, accommodationThree:"false"})
        }
        if (!formValues.accommodationFour){
            setFormValues({...formValues, accommodationFour:"false"})
        }
        if (!formValues.accommodationSix){
            setFormValues({...formValues, accommodationSix:"false"})
        }
        if (!formValues.luxuryTourComfortGroupSecond){
            setFormValues({...formValues, luxuryTourComfortGroupSecond:"false"})
        }
        if (!formValues.luxuryTourCompactGroupSecond){
            setFormValues({...formValues, luxuryTourCompactGroupSecond:"false"})
        }
        if (!formValues.budgetTourComfortGroupFirst){
            setFormValues({...formValues, budgetTourComfortGroupFirst:"false"})
        }
        if (!formValues.budgetTourCompactGroupFirst){
            setFormValues({...formValues, budgetTourCompactGroupFirst:"false"})
        }
        if (!formValues.budgetTourComfortGroupSecond){
            setFormValues({...formValues, budgetTourComfortGroupSecond:"false"})
        }
        if (!formValues.budgetTourCompactGroupSecond){
            setFormValues({...formValues, budgetTourCompactGroupSecond:"false"})
        }
        if (!formValues.luxuryTourComfortRegularSecond){
            setFormValues({...formValues, luxuryTourComfortRegularSecond:"false"})
        }
        if (!formValues.luxuryTourCompactRegularSecond){
            setFormValues({...formValues, luxuryTourCompactRegularSecond:"false"})
        }
        if (!formValues.budgetTourComfortRegularFirst){
            setFormValues({...formValues, budgetTourComfortRegularFirst:"false"})
        }
        if (!formValues.budgetTourCompactRegularFirst){
            setFormValues({...formValues, budgetTourCompactRegularFirst:"false"})
        }
        if (!formValues.budgetTourComfortRegularSecond){
            setFormValues({...formValues, budgetTourComfortRegularSecond:"false"})
        }
        if (!formValues.budgetTourCompactRegularSecond){
            setFormValues({...formValues, budgetTourCompactRegularSecond:"false"})
        }
        if (!formValues.scheduledTourFirst){
            setFormValues({...formValues, scheduledTourFirst:"false"})
        }
        if (!formValues.scheduledTourSecond){
            setFormValues({...formValues, scheduledTourSecond:"false"})
        }
        

        e.preventDefault()
        try{
            console.log(formValues);
            const {data: {prices}} = await axios.post(`/api/tours`, formValues)
            console.log(prices, "Tour data");
            if (prices.acknowledged){
                setError({
                    message: "Tour Created Successfully!!!"
                })
                setTimeout(() => {
                    setError(false);
                }, 3000)
            }
        }catch(err){
            if (err.response.data.error.message){
                setError({
                    message:err.response.data.error.message
                })
                setTimeout(() => setError(false), 30000)
            }
            console.log(err.response);
        }
    }
        
    return <>
        <div className="my-container">
            <div className="edit-btns">
                <button onClick={() => {
                    if(!edit){
                        setFormValues({})
                    }
                    setEdit(true)
                }} className="edit">Edit</button> 
                <button onClick={() => {
                    if (edit){
                        setFormValues({})
                    }
                    setEdit(false)
                }} className="edit">Create</button>
                <Link href="/admin/editTours"><button className="edit">Edit All Tours</button></Link>
                <Link href="/admin/createTourName"><button className="edit">Create Tour Name</button></Link>
            </div>
            {edit ? <form onSubmit={handleSubmit} className="tours-form">
                <div>{/* tourName */}
                <label htmlFor="tourName">Tour Name: </label>
                <div><select onChange={(e) => setFormValues({...formValues, tourName:e.currentTarget.value})} name="tourName" id="tourNameSelect">
                    <option name="select">Select Tour</option>
                    {tourNames.map((tourName) => {
                        return <ErrorBoundary key={tourName._id}><option name={`${tourName}`}>{tourName}</option></ErrorBoundary>
                        // <option name="KARNATAKA">MAJESTIC KARNATAKA</option>
                    })}
                </select>
                </div>
                </div>
                <div>{/* tourNumber */}
                    <label htmlFor="tourNumber">Tour Number: </label>
                    <input onChange={(e) => setFormValues({...formValues, tourNumber:Number(e.currentTarget.value)})} type="number" name="tourNumber" />
                </div>
                {tours.length !== 0? null : <button type="button" className="edit" onClick={getInfo}>Get information</button> }
                
                {tours.length !== 0? tours.map((tour) => <>
                <div>{/* comfortName */}
                    <label htmlFor="comfortPrice">Comfort Name: </label>
                    <input defaultValue={tour.comfortName} onChange={(e) => setFormValues({...formValues, comfortName:e.currentTarget.value})} type="text" name="comfortName" />
                </div>
                <div>{/* comfortDuration */}
                    <label htmlFor="comfortPrice">Comfort Duration: </label>
                    <input defaultValue={tour.comfortDuration} onChange={(e) => setFormValues({...formValues, comfortDuration:e.currentTarget.value})} type="text" name="comfortDuration" />
                </div>
                {/* comfortPrice */}
                <div>
                <label htmlFor="comfortPrice">Comfort Price: </label>
                <input onChange={(e) => setFormValues({...formValues, comfortPrice:e.currentTarget.value})} defaultValue={tour.comfortPrice} type="text" name="comfortPrice" />
                </div>
                <div>{/* compactName */}
                    <label htmlFor="compactName">Compact Name: </label>
                    <input defaultValue={tour.compactName} onChange={(e) => setFormValues({...formValues, compactName:e.currentTarget.value})} type="text" name="compactName" />
                </div>
                <div>{/* compactDuration */}
                    <label htmlFor="compactDuration">Compact Duration: </label>
                    <input defaultValue={tour.compactDuration} onChange={(e) => setFormValues({...formValues, compactDuration:e.currentTarget.value})} type="text" name="compactDuration" />
                </div>
                {/* compactPrice */}
                <div>
                    <label htmlFor="compactPrice">Compact Price: </label>
                    <input defaultValue={tour.compactPrice} onChange={(e) => setFormValues({...formValues, compactPrice:e.currentTarget.value})} type="text" name="compactPrice" />
                </div>
                <div>{/* imageURL */}
                    <label htmlFor="imageURL">Image URL: </label>
                    <input defaultValue={tour.imageURL} onChange={(e) => setFormValues({...formValues, imageURL:e.currentTarget.value})} type="text" name="imageURL" />
                </div>
                <div></div>
                <div>{/* itineraryDayOne */}
                    <label htmlFor="itineraryDayOne">Itinerary Day One: </label>
                    <textarea defaultValue={tour.itineraryDayOne} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayOne:e.currentTarget.value})} type="text" name="itineraryDayOne" />
                </div>
                <div>{/* itineraryDayTwo */}
                    <label htmlFor="itineraryDayTwo">Itinerary Day Two: </label>
                    <textarea defaultValue={tour.itineraryDayTwo} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayTwo:e.currentTarget.value})} type="text" name="itineraryDayTwo" />
                </div>
                <div>{/* itineraryDayThree */}
                    <label htmlFor="itineraryDayThree">Itinerary Day Three: </label>
                    <textarea defaultValue={tour.itineraryDayThree} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayThree:e.currentTarget.value})} type="text" name="itineraryDayThree" />
                </div>
                <div>{/* itineraryDayFour */}
                    <label htmlFor="itineraryDayFour">Itinerary Day Four: </label>
                    <textarea defaultValue={tour.itineraryDayFour} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayFour:e.currentTarget.value})} type="text" name="itineraryDayFour" />
                </div>
                <div>{/* itineraryDayFive */}
                    <label htmlFor="itineraryDayFive">Itinerary Day Five: </label>
                    <textarea defaultValue={tour.itineraryDayFive} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayFive:e.currentTarget.value})} type="text" name="itineraryDayFive" />
                </div>
                <div>{/* itineraryDaySix */}
                    <label htmlFor="itineraryDaySix">Itinerary Day Six: </label>
                    <textarea defaultValue={tour.itineraryDaySix} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDaySix:e.currentTarget.value})} type="text" name="itineraryDaySix" />
                </div>
                <div>{/* itineraryDaySeven */}
                    <label htmlFor="itineraryDaySeven">Itinerary Day Seven: </label>
                    <textarea defaultValue={tour.itineraryDaySeven} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDaySeven:e.currentTarget.value})} type="text" name="itineraryDaySeven" />
                </div>
                <div>{/* itineraryDayEight */}
                    <label htmlFor="itineraryDayEight">Itinerary Day Eight: </label>
                    <textarea defaultValue={tour.itineraryDayEight} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayEight:e.currentTarget.value})} type="text" name="itineraryDayEight" />
                </div>
                <div>{/* itineraryDayNine */}
                    <label htmlFor="itineraryDayNine">Itinerary Day Nine: </label>
                    <textarea defaultValue={tour.itineraryDayNine} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayNine:e.currentTarget.value})} type="text" name="itineraryDayNine" />
                </div>
                <div>{/* itineraryDayTen */}
                    <label htmlFor="itineraryDayTen">Itinerary Day Ten: </label>
                    <textarea defaultValue={tour.itineraryDayTen} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayTen:e.currentTarget.value})} type="text" name="itineraryDayTen" />
                </div>
                <div>{/* itineraryDayEleven */}
                    <label htmlFor="itineraryDayEleven">Itinerary Day Eleven: </label>
                    <textarea defaultValue={tour.itineraryDayEleven} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayEleven:e.currentTarget.value})} type="text" name="itineraryDayEleven" />
                </div>
                <div>{/* itineraryDayTwelve */}
                    <label htmlFor="itineraryDayTwelve">Itinerary Day Twelve: </label>
                    <textarea defaultValue={tour.itineraryDayTwelve} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayTwelve:e.currentTarget.value})} type="text" name="itineraryDayTwelve" />
                </div>
                <div>{/* itineraryDayThirteen */}
                    <label htmlFor="itineraryDayThirteen">Itinerary Day Thirteen: </label>
                    <textarea defaultValue={tour.itineraryDayThirteen} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayThirteen:e.currentTarget.value})} type="text" name="itineraryDayThirteen" />
                </div>
                <div>{/* itineraryDayFourteen */}
                    <label htmlFor="itineraryDayFourteen">Itinerary Day Fourteen: </label>
                    <textarea defaultValue={tour.itineraryDayFourteen} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayFourteen:e.currentTarget.value})} type="text" name="itineraryDayFourteen" />
                </div>
                <div>{/* noteOne */}
                    <label htmlFor="noteOne">Note One: </label>
                    <textarea defaultValue={tour.noteOne} rows={2} onSubmit={(e) => setFormValues({...formValues, noteOne:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteOne:e.currentTarget.value})} type="text" name="noteOne" />
                </div>
                <div>{/* noteTwo */}
                    <label htmlFor="noteTwo">Note Two: </label>
                    <textarea defaultValue={tour.noteTwo} rows={2} onSubmit={(e) => setFormValues({...formValues, noteTwo:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteTwo:e.currentTarget.value})} type="text" name="noteTwo" />
                </div>
                <div>{/* noteThree */}
                    <label htmlFor="noteThree">Note Three: </label>
                    <textarea defaultValue={tour.noteThree} rows={2} onSubmit={(e) => setFormValues({...formValues, noteThree:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteThree:e.currentTarget.value})} type="text" name="noteThree" />
                </div>
                <div>{/* noteFour */}
                    <label htmlFor="noteFour">Note Four: </label>
                    <textarea defaultValue={tour.noteFour} rows={2} onSubmit={(e) => setFormValues({...formValues, noteFour:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteFour:e.currentTarget.value})} type="text" name="noteFour" />
                </div>
                <div>{/* noteFive */}
                    <label htmlFor="noteFive">Note Five: </label>
                    <textarea defaultValue={tour.noteFive} rows={2} onChange={(e) => setFormValues({...formValues, noteFive:e.currentTarget.value})} type="text" name="noteFive" />
                </div>
                <div>{/* shortNote */}
                    <label htmlFor="shortNote">Short Note: </label>
                    <textarea defaultValue={tour.shortNote} rows={2} onChange={(e) => setFormValues({...formValues, shortNote:e.currentTarget.value})} type="text" name="shortNote" />
                </div>
                <div>{/* accommodationOne */}
                    <label htmlFor="accommodationOne">Accommodation One: </label>
                    <input defaultValue={tour.accommodationOne} onChange={(e) => setFormValues({...formValues, accommodationOne:e.currentTarget.value})} type="text" name="accommodationOne" />
                </div>
                <div>{/* accommodationTwo */}
                    <label htmlFor="accommodationTwo">Accommodation Two: </label>
                    <input defaultValue={tour.accommodationTwo} onChange={(e) => setFormValues({...formValues, accommodationTwo:e.currentTarget.value})} type="text" name="accommodationTwo" />
                </div>
                <div>{/* accommodationThree */}
                    <label htmlFor="accommodationThree">Accommodation Three: </label>
                    <input defaultValue={tour.accommodationThree} onChange={(e) => setFormValues({...formValues, accommodationThree:e.currentTarget.value})} type="text" name="accommodationThree" />
                </div>
                <div>{/* accommodationFour */}
                    <label htmlFor="accommodationFour">Accommodation Four: </label>
                    <input defaultValue={tour.accommodationFour} onChange={(e) => setFormValues({...formValues, accommodationFour:e.currentTarget.value})} type="text" name="accommodationFour" />
                </div>
                <div>{/* accommodationFive */}
                    <label htmlFor="accommodationFive">Accommodation Five: </label>
                    <input defaultValue={tour.accommodationFive} onChange={(e) => setFormValues({...formValues, accommodationFive:e.currentTarget.value})} type="text" name="accommodationFive" />
                </div>
                <div>{/* accommodationSix */}
                    <label htmlFor="accommodationFive">Accommodation Six: </label>
                    <input defaultValue={tour.accommodationSix} onChange={(e) => setFormValues({...formValues, accommodationSix:e.currentTarget.value})} type="text" name="accommodationFive" />
                </div>
                {/* Table 1 */}
                <div> {/* luxuryTourComfortGroupFirst */}
                    <label htmlFor="luxuryTourComfortGroupFirst">Luxury Tour Group Comfort Price First: </label>
                    <input defaultValue={tour.luxuryTourComfortGroupFirst} onChange={(e) => setFormValues({...formValues, luxuryTourComfortGroupFirst:e.currentTarget.value})} type="text" name="luxuryTourComfortGroupFirst"/>
                </div>
                <div> {/* luxuryTourCompactGroupFirst */}
                    <label htmlFor="luxuryTourCompactGroupFirst">Luxury Tour Group Compact Price First: </label>
                    <input defaultValue={tour.luxuryTourCompactGroupFirst} onChange={(e) => setFormValues({...formValues, luxuryTourCompactGroupFirst:e.currentTarget.value})} type="text" name="luxuryTourCompactGroupFirst"/>
                </div>
                <div> {/* luxuryTourComfortGroupSecond */}
                    <label htmlFor="luxuryTourComfortGroupSecond">Luxury Tour Group Comfort Price Second: </label>
                    <input defaultValue={tour.luxuryTourComfortGroupSecond} onChange={(e) => setFormValues({...formValues, luxuryTourComfortGroupSecond:e.currentTarget.value})} type="text" name="luxuryTourComfortGroupSecond"/>
                </div>
                <div> {/* luxuryTourCompactGroupSecond */}
                    <label htmlFor="luxuryTourCompactGroupSecond">Luxury Tour Group Compact Price Second: </label>
                    <input defaultValue={tour.luxuryTourCompactGroupSecond} onChange={(e) => setFormValues({...formValues, luxuryTourCompactGroupSecond:e.currentTarget.value})} type="text" name="luxuryTourCompactGroupSecond"/>
                </div>
                <div> {/* budgetTourComfortGroupFirst */}
                    <label htmlFor="budgetTourComfortGroupFirst">Budget Tour Group Comfort Price First: </label>
                    <input defaultValue={tour.budgetTourComfortGroupFirst} onChange={(e) => setFormValues({...formValues, budgetTourComfortGroupFirst:e.currentTarget.value})} type="text" name="budgetTourComfortGroupFirst"/>
                </div>
                <div> {/* budgetTourCompactGroupFirst */}
                    <label htmlFor="budgetTourCompactGroupFirst">Budget Tour Group Compact Price First: </label>
                    <input defaultValue={tour.budgetTourCompactGroupFirst} onChange={(e) => setFormValues({...formValues, budgetTourCompactGroupFirst:e.currentTarget.value})} type="text" name="budgetTourCompactGroupFirst"/>
                </div>
                <div> {/* budgetTourComfortGroupSecond */}
                    <label htmlFor="budgetTourComfortGroupSecond">Budget Tour Group Comfort Price Second: </label>
                    <input defaultValue={tour.budgetTourComfortGroupSecond} onChange={(e) => setFormValues({...formValues, budgetTourComfortGroupSecond:e.currentTarget.value})} type="text" name="budgetTourComfortGroupSecond"/>
                </div>
                <div> {/* budgetTourCompactGroupSecond */}
                    <label htmlFor="budgetTourCompactGroupSecond">Budget Tour Group Compact Price Second: </label>
                    <input defaultValue={tour.budgetTourCompactGroupSecond} onChange={(e) => setFormValues({...formValues, budgetTourCompactGroupSecond:e.currentTarget.value})} type="text" name="budgetTourCompactGroupSecond"/>
                </div>

                {/* Table 2 */}
                <div>{/* luxuryTourComfortRegularFirst */}
                <label htmlFor="luxuryTourComfortRegularFirst">Luxury Tour Regular Comfort Price First: </label>
                <input defaultValue={tour.luxuryTourComfortRegularFirst} onChange={(e) => setFormValues({...formValues, luxuryTourComfortRegularFirst:e.currentTarget.value})} type="text" name="luxuryTourComfortRegularFirst"/>
                </div>
                <div>{/* luxuryTourCompactRegularFirst */}
                <label htmlFor="luxuryTourCompactRegularFirst">Luxury Tour Regular Compact Price First: </label>
                <input defaultValue={tour.luxuryTourCompactRegularFirst} onChange={(e) => setFormValues({...formValues, luxuryTourCompactRegularFirst:e.currentTarget.value})} type="text" name="luxuryTourCompactRegularFirst"/>
                </div>
                <div>{/* luxuryTourComfortRegularSecond */}
                <label htmlFor="luxuryTourComfortRegularSecond">Luxury Tour Regular Comfort Price Second: </label>
                <input defaultValue={tour.luxuryTourComfortRegularSecond} onChange={(e) => setFormValues({...formValues, luxuryTourComfortRegularSecond:e.currentTarget.value})} type="text" name="luxuryTourComfortRegularSecond"/>
                </div>
                <div>{/* luxuryTourCompactRegularSecond */}
                <label htmlFor="luxuryTourCompactRegularSecond">Luxury Tour Regular Compact Price Second: </label>
                <input defaultValue={tour.luxuryTourCompactRegularSecond} onChange={(e) => setFormValues({...formValues, luxuryTourCompactRegularSecond:e.currentTarget.value})} type="text" name="luxuryTourCompactRegularSecond"/>
                </div>
                <div>{/* budgetTourComfortRegularFirst */}
                <label htmlFor="budgetTourComfortRegularFirst">Budget Tour Regular Comfort Price First: </label>
                <input defaultValue={tour.budgetTourComfortRegularFirst} onChange={(e) => setFormValues({...formValues, budgetTourComfortRegularFirst:e.currentTarget.value})} type="text" name="budgetTourComfortRegularFirst"/>
                </div>
                <div>{/* budgetTourCompactRegularFirst */}
                <label htmlFor="budgetTourCompactRegularFirst">Budget Tour Regular Compact Price First: </label>
                <input defaultValue={tour.budgetTourCompactRegularFirst} onChange={(e) => setFormValues({...formValues, budgetTourCompactRegularFirst:e.currentTarget.value})} type="text" name="budgetTourCompactRegularFirst"/>
                </div>
                <div>{/* budgetTourComfortRegularSecond */}
                <label htmlFor="budgetTourComfortRegularSecond">Budget Tour Regular Comfort Price Second: </label>
                <input defaultValue={tour.budgetTourComfortRegularSecond} onChange={(e) => setFormValues({...formValues, budgetTourComfortRegularSecond:e.currentTarget.value})} type="text" name="budgetTourComfortRegularSecond"/>
                </div>
                <div>{/* budgetTourCompactRegularSecond */}
                <label htmlFor="budgetTourCompactRegularSecond">Budget Tour Regular Compact Price Second: </label>
                <input defaultValue={tour.budgetTourCompactRegularSecond} onChange={(e) => setFormValues({...formValues, budgetTourCompactRegularSecond:e.currentTarget.value})} type="text" name="budgetTourCompactRegularSecond"/>
                </div>
                <div>{/* scheduledTourFirst */}
                <label htmlFor="scheduledTourFirst">Scheduled Tour First: </label>
                <input onChange={(e) => setFormValues({...formValues, scheduledTourFirst:e.currentTarget.value})} defaultValue={tour.scheduledTourFirst} type="text" name="scheduledTourFirst"/>
                </div>
                <div>{/* scheduledTourSecond */}
                <label htmlFor="scheduledTourSecond">Scheduled Tour Second: </label>
                <input onChange={(e) => setFormValues({...formValues, scheduledTourSecond:e.currentTarget.value})} defaultValue={tour.scheduledTourSecond} type="text" name="scheduledTourSecond"/>
                </div>
                <div>{/* operationalFrom */}
                    <label htmlFor="operationalFrom">Operational From: </label>
                    <input defaultValue={tour.operationalFrom} onChange={(e) => setFormValues({...formValues, operationalFrom:e.currentTarget.value})} type="text" name="operationalFrom"/>
                </div>
                <button className="edit" type="submit">Submit</button></>)
                :null}
                {error? <p style={{margin: "0 auto"}} className="red-color">{error.message} </p> :null}
            </form>:
            <form onSubmit={createTourPrices} className="tours-form">
                {/* tourName */}
                <div>
                    <label htmlFor="tourName">Select tour Name</label>
                <select onChange={(e) => setFormValues({...formValues, tourName:e.currentTarget.value})} name="tourName" id="tourNameSelect">
                    <option name="select">Select Tour</option>
                    {tourNames.length && tourNames.map((tourName) => {
                        return <ErrorBoundary key={tourName._id}><option name={`${tourName}`}>{tourName}</option></ErrorBoundary>
                    })}
                    {/* <option name="HIMACHAL">FABULOUS HIMACHAL</option>
                    <option name="KARNATAKA">MAJESTIC KARNATAKA</option> */}
                </select>
                </div>
                <div>{/* tourNumber */}
                    <label htmlFor="tourNumber">Tour Number: </label>
                    <input onChange={(e) => setFormValues({...formValues, tourNumber:Number(e.currentTarget.value)})} type="number" name="tourNumber" />
                </div>             
                
                <div>{/* comfortName */}
                    <label htmlFor="comfortPrice">Comfort Name: </label>
                    <input onChange={(e) => setFormValues({...formValues, comfortName:e.currentTarget.value})} type="text" name="comfortName" />
                </div>
                <div>{/* comfortDuration */}
                    <label htmlFor="comfortPrice">Comfort Duration: </label>
                    <input onChange={(e) => setFormValues({...formValues, comfortDuration:e.currentTarget.value})} type="text" name="comfortDuration" />
                </div>
                <div>{/* comfortPrice */}
                    <label htmlFor="comfortPrice">Comfort Price: </label>
                    <input onChange={(e) => setFormValues({...formValues, comfortPrice:e.currentTarget.value})} type="text" name="comfortPrice" />
                </div>
                <div>{/* compactName */}
                    <label htmlFor="compactName">Compact Name: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, compactName:e.currentTarget.value})} type="text" name="compactName" />
                </div>
                <div>{/* compactDuration */}
                    <label htmlFor="compactDuration">Compact Duration: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, compactDuration:e.currentTarget.value})} type="text" name="compactDuration" />
                </div>
                <div>{/* compactPrice */}
                    <label htmlFor="compactPrice">Compact Price: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, compactPrice:e.currentTarget.value})} type="text" name="compactPrice" />
                </div>
                <div>{/* imageURL */}
                    <label htmlFor="imageURL">Image URL: </label>
                    <input onChange={(e) => setFormValues({...formValues, imageURL:e.currentTarget.value})} type="text" name="imageURL" />
                </div>
                <div></div>
                <div>{/* itineraryDayOne */}
                    <label htmlFor="itineraryDayOne">Itinerary Day One: </label>
                    <textarea rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayOne:e.currentTarget.value})} type="text" name="itineraryDayOne" />
                </div>
                <div>{/* itineraryDayTwo */}
                    <label htmlFor="itineraryDayTwo">Itinerary Day Two: </label>
                    <textarea rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayTwo:e.currentTarget.value})} type="text" name="itineraryDayTwo" />
                </div>
                <div>{/* itineraryDayThree */}
                    <label htmlFor="itineraryDayThree">Itinerary Day Three: </label>
                    <textarea rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayThree:e.currentTarget.value})} type="text" name="itineraryDayThree" />
                </div>
                <div>{/* itineraryDayFour */}
                    <label htmlFor="itineraryDayFour">Itinerary Day Four: </label>
                    <textarea rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayFour:e.currentTarget.value})} type="text" name="itineraryDayFour" />
                </div>
                <div>{/* itineraryDayFive */}
                    <label htmlFor="itineraryDayFive">Itinerary Day Five: </label>
                    <textarea rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayFive:e.currentTarget.value})} type="text" name="itineraryDayFive" />
                </div>
                <div>{/* itineraryDaySix */}
                    <label htmlFor="itineraryDaySix">Itinerary Day Six: </label>
                    <textarea rows={5} onChange={(e) => setFormValues({...formValues, itineraryDaySix:e.currentTarget.value})} type="text" name="itineraryDaySix" />
                </div>
                <div>{/* itineraryDaySeven */}
                    <label htmlFor="itineraryDaySeven">Itinerary Day Seven: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDaySeven:e.currentTarget.value})} type="text" name="itineraryDaySeven" />
                </div>
                <div>{/* itineraryDayEight */}
                    <label htmlFor="itineraryDayEight">Itinerary Day Eight: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayEight:e.currentTarget.value})} type="text" name="itineraryDayEight" />
                </div>
                <div>{/* itineraryDayNine */}
                    <label htmlFor="itineraryDayNine">Itinerary Day Nine: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayNine:e.currentTarget.value})} type="text" name="itineraryDayNine" />
                </div>
                <div>{/* itineraryDayTen */}
                    <label htmlFor="itineraryDayTen">Itinerary Day Ten: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayTen:e.currentTarget.value})} type="text" name="itineraryDayTen" />
                </div>
                <div>{/* itineraryDayEleven */}
                    <label htmlFor="itineraryDayEleven">Itinerary Day Eleven: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayEleven:e.currentTarget.value})} type="text" name="itineraryDayEleven" />
                </div>
                <div>{/* itineraryDayTwelve */}
                    <label htmlFor="itineraryDayTwelve">Itinerary Day Twelve: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayTwelve:e.currentTarget.value})} type="text" name="itineraryDayTwelve" />
                </div>
                <div>{/* itineraryDayThirteen */}
                    <label htmlFor="itineraryDayThirteen">Itinerary Day Thirteen: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayThirteen:e.currentTarget.value})} type="text" name="itineraryDayThirteen" />
                </div>
                <div>{/* itineraryDayFourteen */}
                    <label htmlFor="itineraryDayFourteen">Itinerary Day Fourteen: </label>
                    <textarea defaultValue={"f"} rows={5} onChange={(e) => setFormValues({...formValues, itineraryDayFourteen:e.currentTarget.value})} type="text" name="itineraryDayFourteen" />
                </div>
                <div>{/* noteOne */}
                    <label htmlFor="noteOne">Note One: </label>
                    <textarea rows={2} onSubmitCapture={(e) => setFormValues({...formValues, noteOne:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteOne:e.currentTarget.value})} type="text" name="noteOne" />
                </div>
                <div>{/* noteTwo */}
                    <label htmlFor="noteTwo">Note Two: </label>
                    <textarea rows={2} onSubmitCapture={(e) => setFormValues({...formValues, noteTwo:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteTwo:e.currentTarget.value})} type="text" name="noteTwo" />
                </div>
                <div>{/* noteThree */}
                    <label htmlFor="noteThree">Note Three: </label>
                    <textarea defaultValue={"f"} rows={2} onSubmitCapture={(e) => setFormValues({...formValues, noteThree:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteThree:e.currentTarget.value})} type="text" name="noteThree" />
                </div>
                <div>{/* noteFour */}
                    <label htmlFor="noteFour">Note Four: </label>
                    <textarea defaultValue={"f"} rows={2} onSubmitCapture={(e) => setFormValues({...formValues, noteFour:e.currentTarget.value})} onChange={(e) => setFormValues({...formValues, noteFour:e.currentTarget.value})} type="text" name="noteFour" />
                </div>
                <div>{/* noteFive */}
                    <label htmlFor="noteFive">Note Five: </label>
                    <textarea defaultValue={"f"} rows={2} onChange={(e) => setFormValues({...formValues, noteFive:e.currentTarget.value})} type="text" name="noteFive" />
                </div>
                <div>{/* shortNote */}
                    <label htmlFor="shortNote">Short Note: </label>
                    <textarea rows={2} onChange={(e) => setFormValues({...formValues, shortNote:e.currentTarget.value})} type="text" name="shortNote" />
                </div>
                <div>{/* accommodationOne */}
                    <label htmlFor="accommodationOne">Accommodation One: </label>
                    <input onChange={(e) => setFormValues({...formValues, accommodationOne:e.currentTarget.value})} type="text" name="accommodationOne" />
                </div>
                <div>{/* accommodationTwo */}
                    <label htmlFor="accommodationTwo">Accommodation Two: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, accommodationTwo:e.currentTarget.value})} type="text" name="accommodationTwo" />
                </div>
                <div>{/* accommodationThree */}
                    <label htmlFor="accommodationThree">Accommodation Three: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, accommodationThree:e.currentTarget.value})} type="text" name="accommodationThree" />
                </div>
                <div>{/* accommodationFour */}
                    <label htmlFor="accommodationFour">Accommodation Four: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, accommodationFour:e.currentTarget.value})} type="text" name="accommodationFour" />
                </div>
                <div>{/* accommodationFive */}
                    <label htmlFor="accommodationFive">Accommodation Five: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, accommodationFive:e.currentTarget.value})} type="text" name="accommodationFive" />
                </div>
                <div>{/* accommodationSix */}
                    <label htmlFor="accommodationSix">Accommodation Six: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, accommodationSix:e.currentTarget.value})} type="text" name="accommodationSix" />
                </div>
                {/* Table 1 */}
                <div>{/* luxuryTourComfortGroupFirst */}
                    <label htmlFor="luxuryTourComfortGroupFirst">Luxury Tour Group Comfort Price First: </label>
                    <input onChange={(e) => setFormValues({...formValues, luxuryTourComfortGroupFirst:e.currentTarget.value})} type="text" name="luxuryTourComfortGroupFirst"/>
                </div>
                <div>{/* luxuryTourCompactGroupFirst */}
                    <label htmlFor="luxuryTourCompactGroupFirst">Luxury Tour Group Compact Price First: </label>
                    <input onChange={(e) => setFormValues({...formValues, luxuryTourCompactGroupFirst:e.currentTarget.value})} type="text" name="luxuryTourCompactGroupFirst"/>
                </div>
                <div>{/* luxuryTourComfortGroupSecond */}
                    <label htmlFor="luxuryTourComfortGroupSecond">Luxury Tour Group Comfort Price Second: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, luxuryTourComfortGroupSecond:e.currentTarget.value})} type="text" name="luxuryTourComfortGroupSecond"/>
                </div>
                <div>{/* luxuryTourCompactGroupSecond */}
                    <label htmlFor="luxuryTourCompactGroupSecond">Luxury Tour Group Compact Price Second: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, luxuryTourCompactGroupSecond:e.currentTarget.value})} type="text" name="luxuryTourCompactGroupSecond"/>
                </div>
                <div>{/* budgetTourComfortGroupFirst */}
                    <label htmlFor="budgetTourComfortGroupFirst">Budget Tour Group Comfort Price First: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourComfortGroupFirst:e.currentTarget.value})} type="text" name="budgetTourComfortGroupFirst"/>
                </div>
                <div>{/* budgetTourCompactGroupFirst */}
                    <label htmlFor="budgetTourCompactGroupFirst">Budget Tour Group Compact Price First: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourCompactGroupFirst:e.currentTarget.value})} type="text" name="budgetTourCompactGroupFirst"/>
                </div>
                <div>{/* budgetTourComfortGroupSecond */}
                    <label htmlFor="budgetTourComfortGroupSecond">Budget Tour Group Comfort Price Second: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourComfortGroupSecond:e.currentTarget.value})} type="text" name="budgetTourComfortGroupSecond"/>
                </div>
                <div>{/* budgetTourCompactGroupSecond */}
                    <label htmlFor="budgetTourCompactGroupSecond">Budget Tour Group Compact Price Second: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourCompactGroupSecond:e.currentTarget.value})} type="text" name="budgetTourCompactGroupSecond"/>
                </div>

                {/* Table 2 */}
                <div>{/* luxuryTourComfortRegularFirst */}
                <label htmlFor="luxuryTourComfortRegularFirst">Luxury Tour Regular Comfort Price First: </label>
                <input onChange={(e) => setFormValues({...formValues, luxuryTourComfortRegularFirst:e.currentTarget.value})} type="text" name="luxuryTourComfortRegularFirst"/>
                </div>
                <div>{/* luxuryTourCompactRegularFirst */}
                <label htmlFor="luxuryTourCompactRegularFirst">Luxury Tour Regular Compact Price First: </label>
                <input onChange={(e) => setFormValues({...formValues, luxuryTourCompactRegularFirst:e.currentTarget.value})} type="text" name="luxuryTourCompactRegularFirst"/>
                </div>
                <div>{/* luxuryTourComfortRegularSecond */}
                <label htmlFor="luxuryTourComfortRegularSecond">Luxury Tour Regular Comfort Price Second: </label>
                <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, luxuryTourComfortRegularSecond:e.currentTarget.value})} type="text" name="luxuryTourComfortRegularSecond"/>
                </div>
                <div>{/* luxuryTourCompactRegularSecond */}
                <label htmlFor="luxuryTourCompactRegularSecond">Luxury Tour Regular Compact Price Second: </label>
                <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, luxuryTourCompactRegularSecond:e.currentTarget.value})} type="text" name="luxuryTourCompactRegularSecond"/>
                </div>
                <div>{/* budgetTourComfortRegularFirst */}
                <label htmlFor="budgetTourComfortRegularFirst">Budget Tour Regular Comfort Price First: </label>
                <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourComfortRegularFirst:e.currentTarget.value})} type="text" name="budgetTourComfortRegularFirst"/>
                </div>
                <div>{/* budgetTourCompactRegularFirst */}
                <label htmlFor="budgetTourCompactRegularFirst">Budget Tour Regular Compact Price First: </label>
                <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourCompactRegularFirst:e.currentTarget.value})} type="text" name="budgetTourCompactRegularFirst"/>
                </div>
                <div>{/* budgetTourComfortRegularSecond */}
                <label htmlFor="budgetTourComfortRegularSecond">Budget Tour Regular Comfort Price Second: </label>
                <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourComfortRegularSecond:e.currentTarget.value})} type="text" name="budgetTourComfortRegularSecond"/>
                </div>
                <div>{/* budgetTourCompactRegularSecond */}
                <label htmlFor="budgetTourCompactRegularSecond">Budget Tour Regular Compact Price Second: </label>
                <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, budgetTourCompactRegularSecond:e.currentTarget.value})} type="text" name="budgetTourCompactRegularSecond"/>
                </div>
                <div>{/* scheduledTourFirst */}
                <label htmlFor="scheduledTourFirst">Scheduled Tour First: </label>
                <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, scheduledTourFirst:e.currentTarget.value})} type="text" name="scheduledTourFirst"/>
                </div>
                <div>{/* scheduledTourSecond */}
                    <label htmlFor="scheduledTourSecond">Scheduled Tour Second: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, scheduledTourSecond:e.currentTarget.value})} type="text" name="scheduledTourSecond"/>
                </div>
                <div>{/* operationalFrom */}
                    <label htmlFor="operationalFrom">Optional from: </label>
                    <input defaultValue={"f"} onChange={(e) => setFormValues({...formValues, operationalFrom:e.currentTarget.value})} type="text" name="operationalFrom"/>
                </div>

                <button className="edit" type="submit">Submit</button>
                {error? <p style={{margin: "0 auto"}} className="red-color">{error.message} </p> :null}
            </form>
            }
        </div>
    </>
}
