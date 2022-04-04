import Head from "next/head"
import Link from "next/link"
import { useEffect } from "react/"
import Navbar from "../components/Navbar"
export default function Himachal(){
    return <>
<Head>
    <meta charset="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    
    <link rel="stylesheet" href="/tours/static/tours/index.css" />
    
    <title>VENTURE WORLD</title>
    
</Head>
    
        <Navbar />
        <div className="my-container font-size-small">
            <center>
                <h1>Fabulous Himachal</h1>
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
                <tbody className="font-weight-light">
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-1"><p>Tour 1</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            MANALI (3N) - CHANDIGARH *U.T(2N)
                        </td>
                        <td width="15%">
                            <p>6 Days / 5 Nights</p>
                        </td>
                        <td>20,750/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            MANALI (2N) - CHANDIGARH(1N) – Night journey  Chandigarh to Manali (1N)
                        </td>
                        <td>
                            5 days / 4 nights
                        </td>
                        <td>17.750/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-2"><p>Tour 2</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            MANALI with MANIKARAN (4N) - CHANDIGARH *U.T(2N)
                        </td>
                        <td width="15%">
                            <p>7 Days / 6 Nights</p>
                        </td>
                        <td>23,750/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            MANALI with MANIKARAN (3N) - CHANDIGARH(1N) –  Night journey Chandigarh to Manali (1N)
                        </td>
                        <td>
                            6 Days / 5 Nights
                        </td>
                        <td>20,750/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-3"><p>Tour 3</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            SHIMLA (3N) - CHANDIGARH *U.T(2N)
                        </td>
                        <td width="15%">
                            <p>6 Days / 5 Nights</p>
                        </td>
                        <td>22,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            SHIMLA (3N) - CHANDIGARH(1N)
                        </td>
                        <td>
                            5 Days / 4 Nights
                        </td>
                        <td>19,250/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-4"><p>Tour 4</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            SHIMLA (2N) - MANALI (3N) - CHANDIGARH *U.T(2N)
                        </td>
                        <td width="15%">
                            <p>8 Days / 7 Nights</p>
                        </td>
                        <td>27,750/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            SHIMLA (1N) - MANALI (2N) - CHANDIGARH (1N) – Night  journey Chandigarh to Manali (1N)
                        </td>
                        <td>
                            6 Days / 5 Nights
                        </td>
                        <td>21,250/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-5"><p>Tour 5</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            DHARAMSHALA (2N) –DALHOUSIE (2N) - CHANDIGARH *U.T(2N))
                        </td>
                        <td width="15%">
                            <p>7 Days / 6 Nights</p>
                        </td>
                        <td>25,500/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            DHARAMSHALA (1N) –DALHOUSIE (2N) - CHANDIGARH (1N)) – Night journey Chandigarh to Dharmshala (1N)
                        </td>
                        <td>
                            6 Days / 5 Nights
                        </td>
                        <td>22,250/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-6"><p>Tour 6</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            PRAGPUR (2N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (2N) –  CHANDIGARH *U.T(2N))
                        </td>
                        <td width="15%">
                            <p>10 Days / 9 Nights</p>
                        </td>
                        <td>34,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            PRAGPUR (2N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (2N) –  CHANDIGARH (1N))
                        </td>
                        <td>
                            9 Days / 8 Nights
                        </td>
                        <td>31,250/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-7"><p>Tour 7</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (2N) - CHANDIGARH *U.T(2N)
                        </td>
                        <td width="15%">
                            <p>9 Days / 8 Nights</p>
                        </td>
                        <td>31,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (2N) - CHANDIGARH (1N)
                        </td>
                        <td>
                            8 Days / 7 Nights
                        </td>
                        <td>28,250/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-8"><p>Tour 8</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (2N) - MANALI (3N) - CHANDIGARH *U.T(2N)
                        </td>
                        <td width="15%">
                            <p>12 Days / 11 Nights</p>
                        </td>
                        <td>40,750/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (1N) - MANALI (2N) - CHANDIGARH (1N)
                        </td>
                        <td>
                            9 Days / 8 Nights
                        </td>
                        <td>31,500/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-9"><p>Tour 9</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            MANALI (3N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (1N) - PRAGPUR (2N) - CHANDIGARH *U.T(2N))
                        </td>
                        <td width="15%">
                            <p>12 Days / 11 Nights</p>
                        </td>
                        <td>40,750/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            MANALI (2N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (1N) - PRAGPUR (2N) - CHANDIGARH (1N))
                        </td>
                        <td>
                            10 Days / 9 Nights
                        </td>
                        <td>34,750/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "min-content"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-10"><p>Tour 10</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            ADVENTURE TOUR (Trekking, Camping and adventure activities) MANALI (5N) -  CHANDIGARH *U.T(2N)
                        </td>
                        <td width="15%">
                            <p>8 Days / 7 Nights</p>
                        </td>
                        <td>32,000/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            ADVENTURE TOUR (Trekking, Camping and adventure activities) MANALI (4N) - CHANDIGARH (1N) – Night journey Chandigarh to Manali (1N)
                        </td>
                        <td>
                            7 Days / 6 Nights
                        </td>
                        <td>28,000/-</td>
                    </tr>
                    
                    
                </tbody>
            </table>
            
            <section id="tour-1">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 1</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/manali.jpg" alt="err"/>
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
                                MANALI (3N) - CHANDIGARH *U.T(2N)
                            </td>
                            
                                <td>
                                    6 Days / 5 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                MANALI (2N) - CHANDIGARH(1N) – Night journey  Chandigarh to Manali (1N)
                            </td>
                            <td>
                                5 days / 4 nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Manali. Late in the evening, arrive Manali. Enroute enjoy the glimpses of Shivalik Hills, enormous mountains, beautiful valleys, extensive gushing Beas River, Pandoh Dam, charming villages and towns. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Rohtang road to enjoy the snow point and view the picturesque panorama of gorgeous wide range Snow Capped Mountains Afternoon lunch on the location (dry lunch or local  snacks available). Evening visit Hadimba Temple, Buddhist Temple and shopping in Mall Road. Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee enjoy Atal tunnel the delightful world&#39;s longest tunnel on high altitude and Sissu Waterfall. (However please note sometimes this tunnel is not operational due to unfavourable weather conditions and traffic jams). Afternoon visit Solang Valley lunch on the thrilling valley (dry lunch or local snacks available). There are several adventure activities like Paragliding, Mountain Biking, sliding, trekking etc. organised by locals. The guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Late in the evening, arrive Chandigarh. Enroute enjoy the scenic attractions, and have brief halt at exquisite Kullu valley for shawl shopping and river rafting at your own expenses (for information take utmost care while rafting). Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Venture world arranges sightseeing for guest on the Rohtang road where ever permitted and not on Rohtang pass. Rohtang pass can be visited from May to October with permits. However, the availability of permit is limited. Interested guests should make their own arrangements to get permits.  <br />
                            2) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            3) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            4) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.32,500/- + GST 5%</td>
                                    <td>Rs.28,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.24,500/- + GST 5%</td>
                                    <td>Rs.20,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.28,750/- + GST 5%</td>
                                    <td>Rs.25,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.20,750/- + GST 5%</td>
                                    <td>Rs.17,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.47,500/- + GST 5%</td>
                                    <td>Rs.41,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.39,500/- + GST 5%</td>
                                    <td>Rs.33,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.43,750/- + GST 5%</td>
                                    <td>Rs.38,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.35,750/- + GST 5%</td>
                                    <td>Rs.30,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.32,500/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.24,500/- + GST 5%tour.
                        </td>
                    </tr>
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
                            <span> MANALI – SAGAR RESORT or its equivalent <br />
                            CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
                            
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
            
            <section id="tour-2">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 2</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/manikaran.jpg" alt="err"/>
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
                                    MANALI with MANIKARAN (4N) - CHANDIGARH *U.T(2N)
                                </td>
                                
                                    <td>
                                        7 Days / 6 Nights <br />
                                    </td>
                                
                            </tr>
                            
                            <tr className="red-color">
                                <td>COMPACT</td>
                                <td>
                                    MANALI with MANIKARAN (3N) - CHANDIGARH(1N) –  Night journey Chandigarh to Manali (1N)
                                </td>
                                <td>
                                    6 Days / 5 Nights <br />
                                    
                                </td>
                            </tr>
                            
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Manali. Late in the evening, arrive Manali. Enroute enjoy the glimpses of Shivalik Hills, enormous mountains, beautiful valleys, extensive gushing Beas River, Pandoh Dam, charming villages and towns. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Rohtang road to enjoy the snow point and view the picturesque panorama of gorgeous wide range Snow Capped Mountains Afternoon lunch on the location (dry lunch or local snacks available). Evening visit Hadimba Temple, Buddhist Temple and shopping in Mall Road. Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee enjoy Atal tunnel the delightful world&#39;s longest tunnel on high altitude and Sissu Waterfall. (However please note sometimes this tunnel is not operational due to unfavourable weather conditions and traffic jams). Afternoon visit Solang Valley lunch on the thrilling valley (dry lunch or local snacks available). There are several adventure activities like Paragliding, Mountain Biking, sliding, trekking etc. organised by locals. The guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Evening snacks tea / coffee at Mall Road. Night dinner and  stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee proceed for a full day trip to Manikaran a famous place for Gurudwara, Temples and Hot Springs. Also enjoy the view of gorgeous Harinder mountain, Parvati valley and river. Lunch in Manikaran Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Manali.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Venture world arranges sightseeing for guest on the Rohtang road where ever permitted and not on Rohtang pass. Rohtang pass can be visited from May to October with permits. However, the availability of permit is limited. Interested guests should make their own arrangements to get permits.  <br />
                            2) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            3) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            4) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.36,250/- + GST 5%</td>
                                    <td>Rs.32,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.28,250/- + GST 5%</td>
                                    <td>Rs.24,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.31,750/- + GST 5%</td>
                                    <td>Rs.28,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.23,750/- + GST 5%</td>
                                    <td>Rs.20,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.53,500/- + GST 5%</td>
                                    <td>Rs.47,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.45,500/- + GST 5%</td>
                                    <td>Rs.39,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.49,000/- + GST 5%</td>
                                    <td>Rs.43,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.41,000/- + GST 5%</td>
                                    <td>Rs.25,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.36,250/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.28,250/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> MANALI – SAGAR RESORT or its equivalent <br />
                            CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
                            
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
            
            <section id="tour-3">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 3</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/shimla.jpg" alt="err"/>
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
                                SHIMLA (3N) - CHANDIGARH *U.T(2N)
                            </td>
                            
                                <td>
                                    6 Days / 5 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                SHIMLA (3N) - CHANDIGARH(1N)
                            </td>
                            <td>
                                5 Days / 4 Nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Shimla. Enroute enjoy the scenic attractions, and lunch in dhabas. Afternoon arrive Shimla and check in hotel. Fresh up and visit Jakhoo Temple. Evening enjoy the stroll on Mall Road and visit (The Scandal Point, Ridge, Kali Bari Temple, Christ Church). Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Shimla.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast full day visit to Green Valley, Kufri, Himalayan National Park and Fagu. Experience spectacular views in tranquil atmosphere. There are several adventure activities, trekking etc. organised by locals, guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Lunch in Kufri, evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Shimla.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast half day visit to Mashobra a pleasant place to explore, relish and recall. Afternoon leisure at the town and shopping. Lunch in Mashobra, evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Shimla.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Enroute lunch, afternoon check in hotel. Fresh up and visit Rock Garden or Pinjore Garden and shopping. Evening snacks tea / coffee at Rock Garden or Pinjore Garden. Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Venture world arranges sightseeing for guest on the Rohtang road where ever permitted and not on Rohtang pass. Rohtang pass can be visited from May to October with permits. However, the availability of permit is limited. Interested guests should make their own arrangements to get permits.  <br />
                            2) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            3) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            4) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.34,000/- + GST 5%</td>
                                    <td>Rs.30,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.26,000/- + GST 5%</td>
                                    <td>Rs.22,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.30,250/- + GST 5%</td>
                                    <td>Rs.27,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.22,250/- + GST 5%</td>
                                    <td>Rs.19,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.49,000/- + GST 5%</td>
                                    <td>Rs.42,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.41,000/- + GST 5%</td>
                                    <td>Rs.34,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.45,250/- + GST 5%</td>
                                    <td>Rs.39,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.37,250/- + GST 5%</td>
                                    <td>Rs.31,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.34,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.26,000/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> SHIMLA – PINE RESIDENCY or its equivalent <br />
                            CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
                            
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
            
            <section id="tour-4">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 4</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/main9.jpeg" alt="err"/>
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
                                SHIMLA (2N) - MANALI (3N) - CHANDIGARH *U.T(2N)
                            </td>
                            
                                <td>
                                    8 Days / 7 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                SHIMLA (1N) - MANALI (2N) - CHANDIGARH (1N) – Night  journey Chandigarh to Manali (1N)
                            </td>
                            <td>
                                6 Days / 5 Nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Manali. Late in the evening, arrive Manali. Enroute enjoy the glimpses of Shivalik Hills, enormous mountains, beautiful valleys, extensive gushing Beas River, Pandoh Dam, charming villages and towns. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Rohtang road to enjoy the snow point and view the picturesque panorama of gorgeous wide range Snow Capped Mountains Afternoon lunch on the location (dry lunch or local snacks available). Evening visit Hadimba Temple, Buddhist Temple and shopping in Mall Road. Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee enjoy Atal tunnel the delightful world&#39;s longest tunnel on high altitude and Sissu Waterfall. (However please note sometimes this tunnel is not operational due to unfavourable weather conditions and traffic jams). Afternoon visit Solang Valley lunch on the thrilling valley (dry lunch or local snacks available). There are several adventure activities like Paragliding, Mountain Biking, sliding, trekking etc. organised by locals. The guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Shimla. Late in the evening, arrive Shimla. Enroute enjoy the scenic attractions, and have brief halt at exquisite Kullu valley for shawl shopping and river rafting at your own expenses (for information take utmost care while rafting). Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Shimla.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Enroute lunch, afternoon check in hotel. Fresh up and visit Rock Garden or Pinjore Garden and shopping. Evening snacks tea / coffee at Rock Garden or Pinjore Garden. Night dinner and stay at hotel in Chandigarh.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Venture world arranges sightseeing for guest on the Rohtang road where ever permitted and not on Rohtang pass. Rohtang pass can be visited from May to October with permits. However, the availability of permit is limited. Interested guests should make their own arrangements to get permits.  <br />
                            2) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            3) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            4) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.41,000/- + GST 5%</td>
                                    <td>Rs.33,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.33,000/- + GST 5%</td>
                                    <td>Rs.25,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.35,750/- + GST 5%</td>
                                    <td>Rs.29,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.27,750/- + GST 5%</td>
                                    <td>Rs.21,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.61,000/- + GST 5%</td>
                                    <td>Rs.48,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.53,000/- + GST 5%</td>
                                    <td>Rs.40,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.55,750/- + GST 5%</td>
                                    <td>Rs.44,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.47,750/- + GST 5%</td>
                                    <td>Rs.36,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.41,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.33,000/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> MANALI – SAGAR RESORT or its equivalent <br />
                            SHIMLA – PINE RESIDENCY or its equivalent
                            
                                <br /> CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
                            
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
            
            <section id="tour-5">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 5</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/dalhousie.jpg" alt="err"/>
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
                                DHARAMSHALA (2N) –DALHOUSIE (2N) - CHANDIGARH *U.T(2N))
                            </td>
                            
                                <td>
                                    7 Days / 6 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                DHARAMSHALA (1N) –DALHOUSIE (2N) - CHANDIGARH (1N)) – Night journey Chandigarh to Dharmshala (1N)
                            </td>
                            <td>
                                6 Days / 5 Nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Dharamshala. Enroute visit Kangra Fort. Late in the evening check in hotel. Lunch, evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Dharamshala.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Dalai Lama Monastery. The temple is famous for its beauty. There are many large statues of Buddha. Place for meditating and rituals. Latter visit Bhagsu Naag Temple. Evening visit Cricket Ground and shopping in McLeodganj. Lunch and evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dharamshala.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Dalhousie. Enroute enjoy the glimpses of beautiful mountain ranges. Enroute lunch, afternoon check in hotel. Fresh up and leisure at the town. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dalhousie.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Khajjiar also known as mini-Switzerland enjoy the scenic view. Guests can also enjoy the adventure activities organised by the locals at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Latter we vist Khajjiar Sanctuary for a pleasant walk / hike. Afternoon visit Chamera Dam and Chamba. Lunch on the location in Khajjia (dry lunch or local snacks available). Evening snacks tea / coffee at the town and shopping. Night dinner and stay at hotel in Dalhousie.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Venture world arranges sightseeing for guest on the Rohtang road where ever permitted and not on Rohtang pass. Rohtang pass can be visited from May to October with permits. However, the availability of permit is limited. Interested guests should make their own arrangements to get permits.  <br />
                            2) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            3) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            4) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.37,250/- + GST 5%</td>
                                    <td>Rs.33,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.29,250/- + GST 5%</td>
                                    <td>Rs.25,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.33,500/- + GST 5%</td>
                                    <td>Rs.30,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.25,500/- + GST 5%</td>
                                    <td>Rs.22,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.54,750/- + GST 5%</td>
                                    <td>Rs.48,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.46,750/- + GST 5%</td>
                                    <td>Rs.40,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.51,750/- + GST 5%</td>
                                    <td>Rs.45,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.43,750/- + GST 5%</td>
                                    <td>Rs.37,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.37,250/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.29,250/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> DHARAMSHALA – HOTEL SHIVA SANCTUARY or its equivalent <br />
                            DALHOUSIE – HOTEL MONGAS or its equivalent
                            
                                <br /> CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
                            
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
            
            <section id="tour-6">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 6</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/palampur-dharamshala.webp" alt="err"/>
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
                                PRAGPUR (2N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (2N) –  CHANDIGARH *U.T(2N))
                            </td>
                            
                                <td>
                                    10 Days / 9 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                PRAGPUR (2N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (2N) –  CHANDIGARH (1N))
                            </td>
                            <td>
                                9 Days / 8 Nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Pragpur. Enroute lunch, afternoon check in hotel. Fresh up and wander in the twin Heritage villages of Garli – Pragpur, enjoy sightseeing places The Judge’s Court, The Taal, Chamba Pattan Bridge. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Pragpur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee full day visit to famous temples around Pragpur - Jwalaji and Chintpurni Matta temple (Guests if not interested in pilgrimage can opt for other sightseeing close to Pragpur) Lunch, Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Pragpur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Palampur. Experience an eventful day - Enroute visit Kangra Fort, and proceed to visit Chamunda Devi Temple, the vast tea gardens and Andretta Pottery. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Palampur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Dalhousie. Enroute enjoy the glimpses of beautiful mountain ranges. Enroute lunch, afternoon check in hotel. Fresh up and leisure at the town. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dalhousie.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Dharamshala. Enroute enjoy the glimpses of beautiful valleys and mountain ranges. Enroute lunch, afternoon check in hotel. Fresh up and leisure at the town. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dharamshala.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Dalai Lama Monastery. The temple is famous for its beauty. There are many large statues of Buddha. Place for meditating and rituals. Latter visit Bhagsu Naag Temple. Evening visit Cricket Ground and shopping in McLeodganj, Afternoon lunch and evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dharamshala.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Evening, arrive Chandigarh. Enroute enjoy the glimpses of enormous mountains, beautiful valleys, charming villages and towns. If we reach Chandigarh early in the evening, we will visit Rock Garden or Pinjore Garden. Lunch, Evening snacks tea / coffee at dhabas on the way. Night dinner and stay at hotel in Chandigarh.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note:  <br />
                            1) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            2) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            3) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.49,000/- + GST 5%</td>
                                    <td>Rs.45,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.41,000/- + GST 5%</td>
                                    <td>Rs.37,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.42,250/- + GST 5%</td>
                                    <td>Rs.39,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.34,250/- + GST 5%</td>
                                    <td>Rs.31,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.74,000/- + GST 5%</td>
                                    <td>Rs.67,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.66,000/- + GST 5%</td>
                                    <td>Rs.59,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.67,250/- + GST 5%</td>
                                    <td>Rs.61,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.59,250/- + GST 5%</td>
                                    <td>Rs.53,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.49,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.41,000/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> PRAGPUR – HOTEL RIVER RETREAT or its equivalent <br />
                            PALAMPUR – HOTEL SURYADEV or its equivalent
                            
                                <br /> DHARAMSHALA – HOTEL SHIVA SANCTUARY or its equivalent
                            
                            
                                <br /> DALHOUSIE – HOTEL MONGAS or its equivalent
                            
                            
                                <br /> CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
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
            
            <section id="tour-7">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 7</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/amritsar.jpg" alt="err"/>
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
                                AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (2N) - CHANDIGARH *U.T(2N)
                            </td>
                            
                                <td>
                                    9 Days / 8 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (2N) - CHANDIGARH (1N)
                            </td>
                            <td>
                                8 Days / 7 Nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Amritsar and proceed to Wagah Border. Enroute enjoy the glimpses of massive green fields and aroma of Punjab. Lunch and Evening snacks tea / coffee at dhabas on the way. Late in the evening check in hotel fresh up and Dinner. Night stay at hotel in Amritsar.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Durgiana Temple and Golden Temple. Evening visit Jallianwala Baugh and shopping. lunch in Golden temple lungar or Hotel. Evening snacks tea / coffee at Jallianwala Baugh. Night dinner and stay at hotel in Amritsar.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Dalhousie. Enroute enjoy the glimpses of beautiful mountain ranges. Enroute lunch, afternoon check in hotel. Fresh up and leisure at the town. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dalhousie.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Khajjiar also known as mini-Switzerland enjoy the scenic view. Guests can also enjoy the adventure activities organised by the locals at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Latter we vist Khajjiar Sanctuary for a pleasant walk / hike. Afternoon visit Chamera Dam and Chamba. Afternoon lunch on the location in Khajjia (dry lunch or local snacks available). Evening snacks tea / coffee at the town and shopping. Night dinner and stay at hotel in Dalhousie.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Dalai Lama Monastery. The temple is famous for its beauty. There are many large statues of Buddha. Place for meditating and rituals. Latter visit Bhagsu Naag Temple. Evening visit Cricket Ground and shopping in McLeodganj, Afternoon lunch and evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dharamshala.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Enroute visit Kangra Fort and enjoy the glimpses of enormous mountains, beautiful valleys, charming villages and towns. Late in the evening check in hotel. If we reach Chandigarh early in the evening, we will visit Rock Garden or Pinjore Garden. Lunch, evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Chandigarh.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions.  <br />
                            2) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            3) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. <br />
                            
                            
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
                                    <td>Rs.45,250/- + GST 5%</td>
                                    <td>Rs.41,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.37,250/- + GST 5%</td>
                                    <td>Rs.33,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.39,250/- + GST 5%</td>
                                    <td>Rs.36,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.31,250/- + GST 5%</td>
                                    <td>Rs.28,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.67,750/- + GST 5%</td>
                                    <td>Rs.61,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.59,750/- + GST 5%</td>
                                    <td>Rs.53,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.61,750/- + GST 5%</td>
                                    <td>Rs.56,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.53,750/- + GST 5%</td>
                                    <td>Rs.48,250/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.45,250/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.37,250/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> AMRITSAR – SG RESORT or its equivalent <br />
                            DHARAMSHALA – HOTEL SHIVA SANCTUARY or its equivalent
                            
                                <br /> DALHOUSIE – HOTEL MONGAS or its equivalent
                            
                            
                                <br /> CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
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
            
            <section id="tour-8">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 8</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/chandigarh.jpg" alt="err"/>
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
                                AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (2N) - MANALI (3N) - CHANDIGARH *U.T(2N)
                            </td>
                            
                                <td>
                                    12 Days / 11 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                AMRITSAR *PB(2N) - DALHOUSIE (2N) – DHARAMSHALA  (1N) - MANALI (2N) - CHANDIGARH (1N)
                            </td>
                            <td>
                                9 Days / 8 Nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Amritsar and proceed to Wagah Border. Enroute enjoy the glimpses of massive green fields and aroma of Punjab. Lunch and Evening snacks tea / coffee at dhabas on the way. Late in the evening check in hotel fresh up and Dinner. Night stay at hotel in Amritsar.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Durgiana Temple and Golden Temple. Evening visit Jallianwala Baugh and shopping. lunch in Golden temple lungar or Hotel. Evening snacks tea / coffee at Jallianwala Baugh. Night dinner and stay at hotel in Amritsar.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Dalhousie. Enroute enjoy the glimpses of beautiful mountain ranges. Enroute lunch, afternoon check in hotel. Fresh up and leisure at the town. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dalhousie.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Khajjiar also known as mini-Switzerland enjoy the scenic view. Guests can also enjoy the adventure activities organised by the locals at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Latter we vist Khajjiar Sanctuary for a pleasant walk / hike. Afternoon visit Chamera Dam and Chamba. Afternoon lunch on the location in Khajjia (dry  lunch or local snacks available). Evening snacks tea / coffee at the town and shopping. Night dinner and stay at hotel in Dalhousie.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Dalai Lama Monastery. The temple is famous for its beauty. There are many large statues of Buddha. Place for meditating and rituals. Latter visit Bhagsu Naag Temple. Evening visit Cricket Ground and shopping in McLeodganj, Afternoon lunch and evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dharamshala.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Manali. Late in the evening, arrive Manali. Enroute enjoy the glimpses of enormous mountains and beautiful valleys. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Manali.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Rohtang road to enjoy the snow point and view the picturesque panorama of gorgeous wide range Snow Capped mountains Afternoon lunch on the location (dry lunch or local snacks available). Evening visit Hadimba Temple, Buddhist Temple and shopping in Mall Road. Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                Morning after breakfast tea / coffee enjoy Atal tunnel the delightful world&#39;s longest tunnel on high altitude and Sissu Waterfall. (However please note sometimes this tunnel is not operational due to unfavourable weather conditions and traffic jams). Afternoon visit Solang Valley lunch on the thrilling valley (dry lunch or local snacks available). There are several adventure activities like Paragliding, Mountain Biking, sliding, trekking etc. organised by locals. The guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 11
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Late in the evening, arrive Chandigarh. Have brief halt at exquisite Kullu valley for shawl shopping and river rafting at your own expenses (for information take utmost care while rafting). Enroute enjoy the glimpses of enormous mountains, beautiful valleys, extensive gushing Beas River, Pandoh Dam, Shivalik Hills, charming villages and towns. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Chandigarh.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 12
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Venture world arranges sightseeing for guest on the Rohtang road where ever permitted and not on Rohtang pass. Rohtang pass can be visited from May to October with permits. However, the availability of permit is limited. Interested guests should make their own arrangements to get permits.  <br />
                            2) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            3) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            4) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.57,000/- + GST 5%</td>
                                    <td>Rs.45,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.49,000/- + GST 5%</td>
                                    <td>Rs.37,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.48,750/- + GST 5%</td>
                                    <td>Rs.39,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.40,750/- + GST 5%</td>
                                    <td>Rs.31,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.87,000/- + GST 5%</td>
                                    <td>Rs.68,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.79,000/- + GST 5%</td>
                                    <td>Rs.60,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.78,750/- + GST 5%</td>
                                    <td>Rs.62,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.70,750/- + GST 5%</td>
                                    <td>Rs.54,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.57,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.49,000/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> DHARAMSHALA – HOTEL SHIVA SANCTUARY or its equivalent <br />
                            DALHOUSIE – HOTEL MONGAS or its equivalent
                            
                                <br /> MANALI – SAGAR RESORT or its equivalent
                            
                            
                                <br /> CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
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
            
            <section id="tour-9">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 9</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/pragpur.jpg" alt="err"/>
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
                                MANALI (3N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (1N) - PRAGPUR (2N) - CHANDIGARH *U.T(2N))
                            </td>
                            
                                <td>
                                    12 Days / 11 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                MANALI (2N) - PALAMPUR (1) - DALHOUSIE (2N) - DHARAMSHALA (1N) - PRAGPUR (2N) - CHANDIGARH (1N))
                            </td>
                            <td>
                                10 Days / 9 Nights <br />
                                
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Manali. Late in the evening, arrive Manali. Enroute enjoy the glimpses of Shivalik Hills, enormous mountains, beautiful valleys, extensive gushing Beas River, Pandoh Dam, charming villages and towns. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Rohtang road to enjoy the snow point and view the picturesque panorama of gorgeous wide range Snow Capped mountains Afternoon lunch on the location (dry lunch or local snacks available). Evening visit Hadimba Temple, Buddhist Temple and shopping in Mall Road. Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee enjoy Atal tunnel the delightful world&#39;s longest tunnel on high altitude and Sissu Waterfall. (However please note sometimes this tunnel is not operational due to unfavourable weather conditions and traffic jams). Afternoon visit Solang Valley lunch on the thrilling valley (dry lunch or local snacks available). There are several adventure activities like Paragliding, Mountain Biking, sliding, trekking etc. organised by locals. The guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Evening snacks tea / coffee at Mall Road. Night dinner and stay at hotel in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Palampur. Enroute enjoy the glimpses of beautiful valleys and mountain ranges. Enroute lunch. Evening check in hotel. Fresh up and leisure at the town. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Palampur.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Khajjiar also known as mini-Switzerland enjoy the scenic view. Guests can also enjoy the adventure activities organised by the locals at their own expenses (for information some of the  activities can be a bit risky take utmost care while doing these activities). Latter we vist Khajjiar Sanctuary for a pleasant walk / hike. Afternoon visit Chamera Dam and Chamba. Afternoon lunch on the location in Khajjia (dry lunch or local snacks available). Evening snacks tea / coffee at the town and shopping. Night dinner and stay at hotel in Dalhousie.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Dharamshala. Enroute enjoy the glimpses of beautiful valleys and mountain ranges. Enroute lunch, afternoon check in hotel. Fresh up and visit Cricket Ground and shopping in McLeodganj. Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Dharamshala.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Pragpur. Before proceeding to Pragpur visit Dalai Lama Monastery. The temple is famous for its beauty. There are many large statues of Buddha. Place for meditating and rituals. Latter visit Bhagsu Naag Temple, enroute also visit Kangra Fort. Late in the evening, arrive Pragpur and check in hotel. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Pragpur.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                Morning after breakfast tea / coffee full day wander in the twin Heritage villages of Garli – Pragpur, enjoy sightseeing places The Judge’s Court, The Taal, Chamba Pattan Bridge. Lunch, Evening snacks tea / coffee at the town. Night dinner and stay at hotel in Pragpur.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 11
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Evening, arrive Chandigarh. Enroute enjoy the glimpses of enormous mountains, beautiful valleys, charming villages and towns. If we reach Chandigarh early in the evening, we will visit Rock Garden or Pinjore Garden. Lunch, Evening snacks tea / coffee at dhabas on the way. Night dinner and stay at hotel in Chandigarh.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 12
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Venture world arranges sightseeing for guest on the Rohtang road where ever permitted and not on Rohtang pass. Rohtang pass can be visited from May to October with permits. However, the availability of permit is limited. Interested guests should make their own arrangements to get permits.  <br />
                            2) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions. <br />
                            3) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            4) In the snow points the locals rent winter jackets, shoes, gloves, and other gears / gadgets used for snow and extreme cold conditions. These are optional articles guests can avail those facilities at their own expense. 
                            
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
                                    <td>Rs.57,000/- + GST 5%</td>
                                    <td>Rs.49,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.49,000/- + GST 5%</td>
                                    <td>Rs.41,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.48,750/- + GST 5%</td>
                                    <td>Rs.42,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.40,750/- + GST 5%</td>
                                    <td>Rs.34,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                                    <td>Rs.87,000/- + GST 5%</td>
                                    <td>Rs.74,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.79,000/- + GST 5%</td>
                                    <td>Rs.66,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Accommodation Standard / Home Stay, Food all
                            meals fixed
                            menu, inclusive of transport, services and fees mentioned above
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.78,750/- + GST 5%</td>
                                    <td>Rs.67,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.70,750/- + GST 5%</td>
                                    <td>Rs.59,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.57,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.49,000/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> MANALI – SAGAR RESORT or its equivalent <br />
                            PRAGPUR – HOTEL RIVER RETREAT or its equivalent
                            
                                <br /> PALAMPUR – HOTEL SURYADEV or its equivalent
                            
                            
                                <br /> DHARAMSHALA – HOTEL SHIVA SANCTUARY or its equivalent
                            
                            
                                <br /> DALHOUSIE – HOTEL MONGAS or its equivalent
                            
                            
                                <br /> CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
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
            
            <section id="tour-10">
                <h4 className="font-weight"><span className="lightblue-color"> Fabulous Himachal </span>- Tour 10</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/himachal/manali-trek.webp" alt="err"/>
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
                                ADVENTURE TOUR (Trekking, Camping and adventure activities) MANALI (5N) -  CHANDIGARH *U.T(2N)
                            </td>
                            
                                <td>
                                    8 Days / 7 Nights <br />
                                    <span style={{"textDecoration": "underline", "textAlign": "center", "padding": "0 auto", "color": "black"}}>Operational only from
                                    mid-April to October</span>
                                </td>    
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                ADVENTURE TOUR (Trekking, Camping and adventure activities) MANALI (4N) - CHANDIGARH (1N) – Night journey Chandigarh to Manali (1N)
                            </td>
                            <td>
                                7 Days / 6 Nights <br />
                                
                                <span style={{"textDecoration": "underline", "textAlign": "center", "padding": "0 auto", "color": "black"}}>Operational only from
                                    mid-April to October</span>
                                    
                            </td>
                        </tr>
                        
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
                            Arrive Chandigarh Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting  and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Chandigarh.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Manali. Late in the evening, arrive Manali. Enroute enjoy the glimpses of Shivalik Hills, enormous mountains, beautiful valleys, extensive gushing Beas River, Pandoh Dam, charming villages and towns. Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel / Base Camp in Manali.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Full day trek or adventure activities Breakfast tea / coffee, lunch, evening snacks tea / coffee, dinner and stay at the  camp.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Full day trek or adventure activities Breakfast tea / coffee, lunch, evening snacks tea / coffee, dinner and stay at the  camp.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Full day trek or adventure activities Breakfast tea / coffee, lunch, evening snacks tea / coffee, dinner and stay at the  camp.
                        </td>
                    </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 7
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh. Late in the evening, arrive Chandigarh. Enroute enjoy the scenic attractions, and have brief halt at exquisite Kullu valley for shawl shopping and river rafting at your own expenses (for information take utmost care while rafting). Lunch, Evening snacks tea / coffee and dinner at dhabas on the way. Night stay at hotel in Chandigarh.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) In Himachal, there may be road blockages due to weather conditions and traffic jam. This can cause delay in reaching a place of visit or even avoiding a spot in extreme conditions.  <br />
                            2) Snow falls in Himachal between late Dec and mid-April. However, Himachal may receive heavy or less snowfall. <br />
                            
                            
                            
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
                                    <td>Rs.40,000/- + GST 5%</td>
                                    <td>Rs.36,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.32,000/- + GST 5%</td>
                                    <td>Rs.28,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
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
                                    <td>Rs.60,000/- + GST 5%</td>
                                    <td>Rs.53,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{"padding": "0%"}}>
                            <table style={{"marginBottom": "0%"}} className="table table-bordered">
                                <tr>
                                    <td>Rs.52,000/- + GST 5%</td>
                                    <td>Rs.45,750/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
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
                            Rs.40,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.32,000/- + GST 5%tour.
                        </td>
                    </tr>
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
                        <td colSpan={"3"} width="50%" className="font-weight" style={{"padding": "0%"}}>
                            <table className="table table-bordered border-secondary" style={{"marginBottom": "0%"}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"3"} className="font-weight">
                            <center>Guests booking their own air tickets and guests travelling by railway or other mode of transport. </center> <br />
                            <p style={{"display": "flex", "justifyContent": "space-between"}}>
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
                            <span> MANALI – TENT STAY AT CAMP SITES / SAGAR RESORT or its equivalent <br />
                            CHANDIGARH – HOTEL CLASSIC RESIDENCY or its equivalent
                            
                            
                            
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
            
        </div>
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="/tours/static/tours/main.js">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script> */}
    </>
}