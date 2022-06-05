import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react/"
import Navbar from "../../components/Navbar"
import axios from "axios"
export default function Tours({tourName}){
    const [tours, setTours] = useState([])
    useEffect(async() => {
        try{
        console.log(tourName, "TOUR")
        const {data: {prices}} = await axios.get(`/api/tours?tourName=${tourName}`)
        setTours(prices)
        document.body.innerHTML
                .replace("&#39;", "'"); 
        }catch(err){
            console.log(err.response)
        }
    }, [])
    return <>
        <Head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    
    <link rel="stylesheet" href="/tours/static/tours/index.css" />
    
    <title>{tourName}</title>
    
</Head>
    
        <Navbar />
        <div className="my-container font-size-small">
            <center>
                <h1>{tourName}</h1>
            </center>
            <p className="font-weight font-size-smaller">VENTURE WORLD’S packages: <span className="green-color"><span
                        style={{"textDecoration": "underline"}}>PACKAGE 1 -</span> LUXURY TOUR</span><br />
                <span style={{"color": "transparent"}}>VENTURE WORLD’S packages: </span><span className="brown-color"><span
                        style={{"textDecoration": "underline"}}>PACKAGE 2 -</span> BUDGET TOUR</span>
            </p>
            <p className="blue-color font-weight">TOUR TYPE 1 COMFORT - We don’t run in the tour -We stroll in the tour </p>
            <p className="red-color font-weight">TOUR TYPE 2 COMPACT – Itinerary Carved Tour</p>
            <p className="font-weight">CLICK on the <span className="lightblue-color" style={{"textDecoration": "underline"}}>Tour
                    number</span> of your choice for tour itinerary, tour cost, cost includes / not includes and for more
                information.</p>
            <hr />
            <table className="table grey-bg-table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tour</th>
                        <th scope="col">Tour Type</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Starting</th>
                    </tr>
                </thead>
                {/* <tbody className="font-weight-light"> */}
                    {tours.map((tour) => <tbody key={tour._id} className="font-weight-light">
                    <tr className="blue-color" style={{"height": "min-content"}}>
                            <td width="13%">
                                <a style={{"margin": "0"}} className="aside-content new-content" href={`#tour-${tour.tourNumber}`}><p>Tour {tour.tourNumber}</p></a>
                            </td>
                            <td>COMFORT</td>
                            <td>
                                {tour.comfortName}
                            </td>
                            <td width="15%">
                                <p>{tour.comfortDuration}</p>
                            </td>
                            <td>{tour.comfortPrice}</td>
                    </tr>
                    {tour.compactName !== 'false' &&
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            {tour.compactName}
                        </td>
                        <td>
                            {tour.compactDuration}
                        </td>
                        <td>{tour.compactPrice}</td>
                    </tr>
                    }
                    </tbody>
                    )}
            </table>
            {tours.map((tour) => <section key={tour._id} id={`tour-${tour.tourNumber}`}>
                <h4 className="font-weight"><span className="lightblue-color"> {tour.tourName} </span>- Tour {tour.tourNumber}</h4>
                <div className="tour-img-info">
                    <img className="side-img" src={`${tour.imageURL || "/images/himachal/manali.jpg"}`} alt="err"/>
                <table className="table table-striped grey-bg-table">
                    <thead>
                        <tr>
                            <th scope="col">Package</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Duration</th>
                        </tr>
                    </thead>
                    <tbody className="font-weight-light">
                        <tr className="blue-color">
                            <td>COMFORT</td>
                            <td>
                                {tour.comfortName}
                            </td>
                            
                                <td>
                                    {tour.comfortDuration} <br />
                                    {tour.operationalFrom !== "false" && <><p className="operationalFrom">{tour.operationalFrom}</p></>}
                                </td>
                            
                        </tr>
                        {tour.compactName !== "false" && <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                {tour.compactName}
                            </td>
                            <td>
                                {tour.compactDuration}<br />
                                {tour.operationalFrom !== "false" && <><p className="operationalFrom">{tour.operationalFrom}</p></>}
                            </td>
                        </tr>
                        }
                    </tbody>
                </table>
                </div>
                <br />
                <center>
                    <p className="font-weight"><span style={{"textDecoration": "underline"}}> TOUR ITINERARY </span>– (The itinerary is
                        flexible and subject to changes).</p>
                </center>
            
                {/* <!-- Itinerary Table --> */}
                <table className="table table-striped table-bordered border-secondary">
                    <tbody>
                    <tr>
                        <td width="06%">
                            Day 1
                        </td>
                        <td>
                            {tour.itineraryDayOne}
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            {tour.itineraryDayTwo}
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            {tour.itineraryDayThree}
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            {tour.itineraryDayFour}
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            {tour.itineraryDayFive}
                        </td>
                    </tr>
                    {tour.itineraryDaySix !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                {tour.itineraryDaySix}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDaySeven !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                {tour.itineraryDaySeven}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDayEight !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                {tour.itineraryDayEight}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDayNine !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                {tour.itineraryDayNine}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDayTen !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                {tour.itineraryDayTen}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDayEleven !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 11
                            </td>
                            <td>
                                {tour.itineraryDayEleven}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDayTwelve !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 12
                            </td>
                            <td>
                                {tour.itineraryDayTwelve}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDayThirteen !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 13
                            </td>
                            <td>
                                {tour.itineraryDayThirteen}
                            </td>
                        </tr>
                    }
                    {tour.itineraryDayFourteen !== "false" &&
                        <tr>
                            <td width="06%">
                                Day 14
                            </td>
                            <td>
                                {tour.itineraryDayFourteen}
                            </td>
                        </tr>
                    }
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: {tour.noteOne}  <br />
                            {tour.noteTwo} <br />
                            {tour.noteThree !== "false" && tour.noteThree}<br />
                            {tour.noteFour !== "false" && tour.noteFour}<br />
                            
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
                <br />
            
                {/* <!-- Includes table --> */}
                <table className="table table-striped table-bordered border-secondary">
                    <th>
                        <center>TOUR COST INCLUDE</center>
                    </th>
                    <tbody>
                        <tr>
                            <td>
                                <h6 className="font-weight">ACCOMODATION: </h6>In Deluxe Hotels/ Resorts (single/ two/ triple/ four
                                sharing) <br />
                                <span className="font-weight">Note:</span> Normally in Indian Hotels the Check-in time is around 01:00
                                pm. and check-out time is around 10:00 am.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="font-weight">TRASPORTATION:</h6> 2 Way <span className="font-weight">Flight</span> (including
                                taxes and baggage allowance as per the airline policy) <br />
                                <span className="font-weight">For couple / family:</span> Car – A/c<br />
                                <span className="font-weight">For group and scheduled tour:</span> Ac - luxury Bus, Tempo Traveller, Car
                                (According to group size) <br />
                                <span className="font-weight">Note:</span> A/c in car and bus may not operate in hilly areas.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="font-weight">SERVICES:</h6>Tour Assistant / Guide (excluding air / rail travel)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="font-weight">FEES:</h6>Entry fees for places of visit mentioned in the itinerary, tolls
                                and state border Permits.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
            
                {/* <!-- Rates table 1 --> */}
                <table className="table table-striped table-bordered border-secondary">
                    <tbody>
                    <tr>
                        <td colSpan={"2"}>
                            <p className="font-weight">Regular tour for couple / family / Group is arranged on any date throughout the
                                year according to the time availability
                                and convenience of the guests.</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"2"}>
                            <p className="font-weight">Scheduled Tour is organised on specific dates.</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"2"}>
                            <center>
                                <p className="font-weight">TOUR COST per person on twin sharing basis, except vacations and long
                                    holidays.</p>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td style={{"padding":"0%"}}>
                            <p className="font-weight"><span className="blue-color">REGULAR TOUR for</span><span className="red-color">
                                    Group</span><span className="blue-color"> 7 person and above</span>
                                Travel by Tempo Traveller / Bus</p>
                            <p>Travel by Tempo / Traveller Buses</p>
                        </td>
                        <td width="40%" style={{"padding":"0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td colSpan={"2"}>
                                        <center>TOUR TYPE</center>
                                    </td>
                                </tr>
                                <tr style={{"marginBottom": "0%"}}>
                                    <td>
                                        <center><span className="darkblue-color font-weight">COMFORT</span></center>
                                    </td>
                                    <td>
                                        <center><span className="red-color font-weight">COMPACT</span></center>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Inclusive of all mentioned above in tour cost
                            includes.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.luxuryTourComfortGroupFirst}- + GST 5%</td>
                                    {tour.luxuryTourCompactGroupFirst !== "false" ? <td>{tour.luxuryTourCompactGroupFirst} + GST 5%</td>:"--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    {tour.luxuryTourComfortGroupSecond !== "false" &&
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.luxuryTourComfortGroupSecond} + GST 5%</td>
                                    {tour.luxuryTourCompactGroupSecond !== "false" ? <td>{tour.luxuryTourCompactGroupSecond} + GST 5%</td>:"--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    }
                    {tour.budgetTourComfortGroupFirst !== "false" &&
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.budgetTourComfortGroupFirst} + GST 5%</td>
                                    {tour.budgetTourCompactGroupFirst !== "false" ? <td>{tour.budgetTourCompactGroupFirst} + GST 5%</td>:"--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    }
                    {tour.budgetTourComfortGroupSecond !== "false" &&
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.budgetTourComfortGroupSecond} + GST 5%</td>
                                    {tour.budgetTourCompactGroupSecond !== "false" ? <td>{tour.budgetTourCompactGroupSecond} + GST 5%</td>:"--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    }
                    </tbody>
                </table>
            
                {/* <!-- Rates Table 2 --> */}
                <table className="table table-striped table-bordered border-secondary">
                    <tbody>
                    <tr>
                        <td style={{"padding":"0%"}}>
                            <p className="font-weight"><span className="purple-color">REGULAR TOUR for couple / family <br /> Exclusively
                                    travel by car</span></p>
                        </td>
                        <td width="40%" style={{"padding":"0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td colSpan={"2"}>
                                        <center>TOUR TYPE</center>
                                    </td>
                                </tr>
                                <tr style={{"marginBottom": "0%"}}>
                                    <td>
                                        <center><span className="darkblue-color font-weight">COMFORT</span></center>
                                    </td>
                                    <td>
                                        <center><span className="red-color font-weight">COMPACT</span></center>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Inclusive of all mentioned above in tour cost
                            includes.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.luxuryTourComfortRegularFirst} + GST 5%</td>
                                    {tour.luxuryTourCompactRegularFirst !== "false" ? <td>{tour.luxuryTourCompactRegularFirst} + GST 5%</td> : "--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    {tour.luxuryTourComfortRegularSecond !== "false" && 
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.luxuryTourComfortRegularSecond} + GST 5%</td>
                                    {tour.luxuryTourCompactRegularSecond !== "false" ? <td>{tour.luxuryTourCompactRegularSecond} + GST 5%</td> : "--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    }
                    {tour.budgetTourComfortRegularFirst !== "false" && 
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.budgetTourComfortRegularFirst} + GST 5%</td>
                                    {tour.budgetTourCompactRegularFirst !== "false" ? <td>{tour.budgetTourCompactRegularFirst} + GST 5%</td> : "--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    }
                    {tour.budgetTourComfortRegularSecond !== "false" &&
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>{tour.budgetTourComfortRegularSecond} + GST 5%</td>
                                    {tour.budgetTourCompactRegularSecond !== "false" ? <td>{tour.budgetTourCompactRegularSecond} + GST 5%</td> : "--------------"}
                                </tr>
                            </table>
                        </td>
                    </tr>
                    }
                    </tbody>
                </table>
            
                {/* <!-- Scheduled Table --> */}
                <table className="table table-striped table-bordered border-secondary">
                    <tbody>
                    <tr>
                        <td width="75%">
                            <span className="red-color font-weight">Scheduled Tour</span> Travel by Tempo Traveller / Bus<br />
                            Departure Dates: ----------------------------------------------------- dates will be notified
                        </td>
                        <td width="25%">
                            <p className="font-weight">PACKAGE <span className="green-color">LUXURY</span> <br />
                                TYPE <span className="darkblue-color">COMFORT</span></p>
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Inclusive of all mentioned above in tour cost includes.</p>
                        </td>
                        <td width="25%">
                            {tour.scheduledTourFirst} + GST 5%
                        </td>
                    </tr>
                    {tour.scheduledTourSecond !== "false" &&
                        <tr>
                            <td width="75%">
                                <p>Excluding Air Fare.</p>
                            </td>
                            <td width="25%">
                                {tour.scheduledTourSecond} + GST 5%
                            </td>
                        </tr>
                    }
                    </tbody>
                </table>
            
                {/* <!-- Childs table --> */}
                <table className="table table-striped table-bordered border-secondary">
                    <tbody>
                    <tr>
                        <td width="33%" className="font-weight">Child below 2yrs. – 70% discount</td>
                        <td width="33%" className="font-weight">Child between 2 - 4yrs. - 50% discount</td>
                        <td className="font-weight">Child between 5 - 11yrs. - 30% discount</td>
                    </tr>
                    <tr>
                        <td colSpan={3} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} className="font-weight">
                            <center> Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center><br />
                            <p style={{display: "flex", justifyContent: "space-between"}}>
                                <span>FREE – for Child below 2yrs.</span>
                                <span> Child between 2 - 4yrs. - 60% discount</span>
                                <span> Child between 5 - 11yrs. - 30% discount</span>
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <p className="font-weight">Note:</p>
                <table className="table table-bordered table-striped border-secondary">
                    <tbody>
                    <tr>
                        <td>The above packages pick up and drop is from Chandigarh. However, if any participant wants to join the tour from Delhi, contact Venture World for the details of Duration and tour cost.</td>
                    </tr>
                    <tr>
                        <td>The rates including air fare mentioned above are from ex Mumbai. For Guests travelling from airports
                            other than Mumbai
                            the tour
                            cost may differ, contact Venture World for the details of cost.</td>
                    </tr>
                    <tr>
                        <td>For regular tour Airport / Railway station / Bus stand will be Pickup point before the tour and Drop
                            point after the
                            tour
                            ends.</td>
                    </tr>
                    <tr>
                        <td>For Scheduled Departures Airport will be Pickup point before the tour and Drop point after the tour
                            ends. However,
                            arrangements will be made for any individual or group arriving and departing from railway or other mode
                            of transport.</td>
                    </tr>
                    <tr>
                        <td>Venture World books air ticket but does not book rail tickets.</td>
                    </tr>
                    <tr>
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "maxContent auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> {tour.accommodationOne} <br />
                            {tour.accommodationTwo} <br />
                            {tour.accommodationThree !== "false" && tour.accommodationThree} <br />
                            {tour.accommodationFour !== "false" && tour.accommodationFour} <br />
                            {tour.accommodationFive !== "false" && tour.accommodationFive} <br />
                            {tour.accommodationSix !== "false" && tour.accommodationSix} 
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI’s or foreign nationals varies, for more details kindly contact Venture World</p>
                {/* <!-- Tour cost does not include table --> */}
                <h6 className="font-weight" style={{"textDecoration": "underline"}}>TOUR COST DOES NOT INCLUDE</h6>
                <table className="table table-striped table-bordered border-secondary">
                    <tbody>
                    <tr>
                        <td>
                            * Personal expense like Camera fees where ever charged in places of visit, laundry, telephone calls,
                            room service bills,
                            porterage, shopping, alcoholic beverages, extra packed water bottle/ food/ beverages which is not a part
                            of tour meal
                            menu.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Government Tax (GST) of 5%.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Any new taxes levied by the central or state government.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Any increase in Transport fares, fuel cost, taxes, etc. before or after the departure of the tour will
                            have to be borne
                            by the
                            participants.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Expense incurred for increase in the duration of the tour, change in airline schedule, route
                            alteration, changing the
                            tour
                            date, change in hotel etc. due to circumstances beyond the control of the tour operator. Instances of
                            this type would
                            include but
                            not be limited to the following- (delays in transit, missed connections, bad weather, natural
                            calamities, road blocks,
                            civil
                            disturbances, strikes, agitations, bandhs, war, quarantine, etc.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Expense incurred for increase in the duration of the tour, change in airline schedule, route
                            alteration, changing the
                            tour
                            date, change in hotel etc. due to circumstances beyond the control of the tour operator. Instances of
                            this type would
                            include but
                            not be limited to the following- (delays in transit, missed connections, bad weather, natural
                            calamities, road blocks,
                            civil
                            disturbances, strikes, agitations, bandhs, war, quarantine, etc.)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Any damage to private or public property by the participants will have to be reimbursed by the
                            responsible person or
                            group.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Cost of Pre/Post tour hotel accommodation
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Any upgradation in airline class, vehicle, hotel or hotel room category.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Insurance of any type.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Cost of any outfits / gears / activity / sightseeing / service not mentioned in the itinerary.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Any extra cost incurred due to illness, accident, hospitalization or any personal emergency.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            *Any other expenses not within the preview of “tour cost includes”.
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <p><span style={{"textDecoration": "underline"}} className="font-weight">Baggage Allowance: </span>Participants are
                    requested to abide by the airline policy for the weight and size of Checked-in
                    baggage and
                    cabin hand baggage per person.</p>
                <br />
                <p><span className="font-weight" style={{"textDecoration": "underline"}}>Cancellation:</span> - (refund on full amount)</p>
                <table className="table table-striped table-bordered border-secondary">
                    <tbody>
                    <tr>
                        <td width="55%">121 days and above prior to the tour</td>
                        <td>90%. refund</td>
                    </tr>
                    <tr>
                        <td width="55%">120 – 91 days prior to the tour </td>
                        <td>80%. refund</td>
                    </tr>
                    <tr>
                        <td width="55%">90 – 61 days prior to the tour</td>
                        <td>70%. refund</td>
                    </tr>
                    <tr>
                        <td width="55%">60 – 46 days prior to the tour</td>
                        <td>60%. refund</td>
                    </tr>
                    <tr>
                        <td width="55%">45 – 31 days prior to the tour</td>
                        <td>40%. refund</td>
                    </tr>
                    <tr>
                        <td width="55%">30 - 16 days prior to the tour amount refunded</td>
                        <td>30%. refund</td>
                    </tr>
                    <tr>
                        <td width="55%">15 to 08 days prior to the tour amount refunded</td>
                        <td>20%. refund</td>
                    </tr>
                    <tr>
                        <td width="55%">No amount will be refunded if cancelled prior to 7 days of the journey.</td>
                        <td>------------------</td>
                    </tr>
                    </tbody>
                </table>
                {/* <!-- Necessary documents --> */}
                <p className="font-weight">Necessary Documents Required</p>
                <p>
                    1. Aadhar Card / Voters ID / Passport / Driving Licence <br />
                    2. ID card is mandatory at time of booking, kindly carry the same ID card on tour. <br />
                    3. For NRI and Foreign National Guests along with Passport, Valid Indian Visa / OCI Card / PIO Card is
                    mandatory. <br />
                    4. Carry one passport size photo. <br />
                    5. NRIs and Foreign nationals are requested to provide proper identity documents during booking. <br />
                    6. Covid double dose vaccination certificate. COVID -19 protocols - please check state guidelines for RT-PCR
                    before the
            
                    journey. <br />
                    Mode of Payment
                    Cheque / Demand Draft / NEFT / RTGS / IMPS / UPI. <br />
                    Cheque / Demand draft should be in favour of &quot;VENTURE WORLD&quot;</p>
                    <hr /><br />
            </section>
            )}
        </div>
    </>
}

// export async function getStaticPaths(){
//     // const {tour} = data;
//     let tourNames = ["FABULOUS HIMACHAL", "MAJESTIC KARNATAKA"]
//     const paths = tourNames.map((tour) => {
//         return {
//             params:{
//                 tours:tour
//             }
//         }
//     })
//     return {
//         paths,
//         fallback:false
//     };
// }

export async function getServerSideProps({params}){
    // const {data} = await axios.get("/api/tourhead");
    return {
        props:{
            tourName:params.tours
        }
    }
}