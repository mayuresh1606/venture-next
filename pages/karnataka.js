import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"
import Navbar from "../components/Navbar"
export default function Karnataka(){
    return <>
        <Navbar />
        <div className="my-container font-size-small">
            <center>
                <h1>Majestic Karnataka</h1>
            </center>
            <p className="font-weight font-size-smaller">VENTURE WORLD&quot;S packages: <span className="green-color"><span
                        style={{"textDecoration": "underline"}}>PACKAGE 1 -</span> LUXURY TOUR</span><br />
                <span style={{"color": "transparent"}}>VENTURE WORLD&quot;S packages: </span><span className="brown-color"><span
                        style={{"textDecoration": "underline"}}>PACKAGE 2 -</span> BUDGET TOUR</span>
            </p>
            <p className="blue-color font-weight">TOUR TYPE 1 COMFORT - We don&quot;t run in the tour -We stroll in the tour </p>
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
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-1"><p>Tour 1</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) - MYSURU (3N)
                        </td>
                        <td width="15%">
                            <p>6 Days / 5 Nights</p>
                        </td>
                        <td>26,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) - MYSURU (2N)
                        </td>
                        <td>
                            4 Days / 3 Nights
                        </td>
                        <td>16,750/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-2"><p>Tour 2</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) - MYSURU (3N) – OOTY *TN(2N)
                        </td>
                        <td width="15%">
                            <p>8 Days / 7 Nights</p>
                        </td>
                        <td>32,750/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) - MYSURU (2N) – OOTY *TN(2N)
                        </td>
                        <td>
                            6 Days / 5 Nights
                        </td>
                        <td>26,250/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-3"><p>Tour 3</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) – HASSAN (1N) - MYSURU (3N)
                        </td>
                        <td width="15%">
                            <p>7 Days / 6 Nights</p>
                        </td>
                        <td>27,000/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) – HASSAN (1N) - MYSURU (2N)
                        </td>
                        <td>
                            5 Days / 4 Nights
                        </td>
                        <td>19,500/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-4"><p>Tour 4</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) – HASSAN (1N) - MYSURU (3N) - OOTY *TN(2N)
                        </td>
                        <td width="15%">
                            <p>9 Days / 8 Nights</p>
                        </td>
                        <td>35,500/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) – HASSAN (1N) - MYSURU (2N) - OOTY  *TN(2N)
                        </td>
                        <td>
                            7 Days / 6 Nights
                        </td>
                        <td>27,000/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-5"><p>Tour 5</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) - MYSURU (3N) – COORG (2N) – MANGULURU – (1N)
                        </td>
                        <td width="15%">
                            <p>9 Days / 8 Nights</p>
                        </td>
                        <td>35,500/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) - MYSURU (2N) –COORG (2N) – MANGULURU – (1N)
                        </td>
                        <td>
                            7 Days / 6 Nights
                        </td>
                        <td>27,000/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-6"><p>Tour 6</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) – HASSAN (1N) - MYSURU (3N) - COORG (2N) – MANGALURU  (1N)
                        </td>
                        <td width="15%">
                            <p>10 Days / 9 Nights</p>
                        </td>
                        <td>40,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) – HASSAN (1N) - MYSURU (2N) - COORG  (2N) – MANGALURU (1N)
                        </td>
                        <td>
                            8 Days / 7 Nights
                        </td>
                        <td>32,750/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-7"><p>Tour 7</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) - MYSURU (3N) – HASSAN / CHIKMAGALUR (3N) – UDUPI / MANGALURU (1N)
                        </td>
                        <td width="15%">
                            <p>10 Days / 9 Nights</p>
                        </td>
                        <td>40,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) - MYSURU (2N) – HASSAN / CHIKMAGALUR (3N) – UDUPI / MANGALURU (1N)
                        </td>
                        <td>
                            8 Days / 7 Nights
                        </td>
                        <td>32,750/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-8"><p>Tour 8</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            BENGALURU (2N) – CHITRADURGA (1N) - HAMPI (2N) –  BADAMI (2N) – GOA (2N)
                        </td>
                        <td width="15%">
                            <p>10 Days / 9 Nights</p>
                        </td>
                        <td>40,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            BENGALURU (1N) – CHITRADURGA (1N) - HAMPI (2N) –  BADAMI (1N) – HUBLI (1N)
                        </td>
                        <td>
                            7 Days / 6 Nights
                        </td>
                        <td>27,000/-</td>
                    </tr>
                    
                    <tr className="blue-color" style={{height: "minContent"}}>
                        <td width="13%">
                            <a style={{margin: 0}} className="aside-content new-content" href="#tour-9"><p>Tour 9</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            MANGALURU (1N) –CHIKMAGALUR (3N) – UDUPI (1N)
                        </td>
                        <td width="15%">
                            <p>6 Days / 5 Nights</p>
                        </td>
                        <td>24,250/-</td>
                    </tr>
                    
                    <tr className="red-color">
                        <td>
                            
                        </td>
                        <td>COMPACT</td>
                        <td>
                            MANGALURU (1N) –CHIKMAGALUR (3N)
                        </td>
                        <td>
                            5 Days / 4 Nights
                        </td>
                        <td>19,500/-</td>
                    </tr>

                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-10"><p>Tour 10</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            MANGALURU (1N) – HASSAN (1N) –CHIKMAGALUR (2N) –  UDUPI (1N)
                        </td>
                        <td width="15%">
                            <p>6 Days / 5 Nights</p>
                        </td>
                        <td>24,250/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-11"><p>Tour 11</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            DESTINATION: MANGALURU (1N) – KUKKE SUBRAMANYA (1N) – CHIKMAGALUR (3N) – UDUPI (1N) VISIT SHREE RAJARAJESHWARI, SHREE DURGAPARAMESHWARI SHREE SUBRAMANYA, SHREE DHARMASTHALA, SHREE SHARADAMBA SHRINGERI, SHREE ANNAPOORNESHWARI HORANADU and SHREE KRISHNA TEMPLE
                        </td>
                        <td width="15%">
                            <p>7 Days / 6 Nights</p>
                        </td>
                        <td>27,000/-</td>
                    </tr>
                    
                    
                    <tr className="blue-color" style={{"height": "minContent"}}>
                        <td width="13%">
                            <a style={{"margin": "0"}} className="aside-content new-content" href="#tour-12"><p>Tour 12</p></a>
                        </td>
                        <td>COMFORT</td>
                        <td>
                            MANGALURU (1N) – KUKKE SUBRAMANYA (1N) - CHIKMAGALUR (3N) – UDUPI (1N) - GOKARNA (1N) – GOA (2N) VISIT SHREE RAJARAJESHWARI, SHREE DURGAPARAMESHWARI SHREE SUBRAMANYA, SHREE DHARMASTHALA, SHREE SHARADAMBA SHRINGERI, SHREE ANNAPOORNESHWARI HORANADU, SHREE KRISHNA TEMPLE, SHREE MOOKAMBIKA, SHREE MURUDESHWAR, SHREE MAHABALESHWARA SWAMI TEMPLE, SHREE MANGESHI and SHREE SHANTA DURGA TEMPLE.
                        </td>
                        <td width="15%">
                            <p>10 Days / 9 Nights</p>
                        </td>
                        <td>40,750/-</td>
                    </tr>
                    
                    
                </tbody>
            </table>
            
            <section id="tour-1">
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 1</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/bengaluru.jpg" alt="err"/> 
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
                                BENGALURU (2N) - MYSURU (3N)
                            </td>
                            
                                <td>
                                    6 Days / 5 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) - MYSURU (2N)
                            </td>
                            <td>
                                4 Days / 3 Nights <br />
                                
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Mysuru. Evening, arrive Mysuru. Enroute visit Bannerghatta National Park a sanctuary for a large variety of flora and fauna, enjoy the safari by spotting the wildlife very closely. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Shree Chamundeshwari Temple and latter visit magnificent edifice the Mysore Palace one of the most visited monuments in India. Afternoon proceed to Srirangapatna and visit Shree Ranganatha Swamy temple, Tipu Palace, Krishna Raja Sagara Dam and Brindavan Garden one of the most beautifully laid out terrace gardens in the world. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit St Philomena&quot;s church and Zoological Garden one of the oldest and most popular zoos in India, possessing wide range of species. Afternoon visit Jaganmohan Palace Art Gallery one of the largest collections of artifacts in South India. Evening enjoys shopping. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Bengaluru. Afternoon arrive Bengaluru and visit Nandi Temple said to be the biggest temple to Nandi in the world and Visvesvaraya Industrial and Technological Museum which houses a treasure trove of machines and artifacts related to science and technology. Evening  visit Iskcon temple and latter check in hotel. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Bengaluru.
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
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.36,000/- + GST 5%</td>
                                    <td>Rs.27,000/- + GST 5%</td>
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
                                    <td>Rs.28,000/- + GST 5%</td>
                                    <td>Rs.19,000/- + GST 5%</td>
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
                                    <td>Rs.32,250/- + GST 5%</td>
                                    <td>Rs.24,750/- + GST 5%</td>
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
                                    <td>Rs.26,250/- + GST 5%</td>
                                    <td>Rs.16,750/- + GST 5%</td>
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
                                    <td>Rs.49,900/- + GST 5%</td>
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
                                    <td>Rs.41,900/- + GST 5%</td>
                                    <td>Rs.28,000/- + GST 5%</td>
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
                                    <td>Rs.46,150/- + GST 5%</td>
                                    <td>Rs.33,750/- + GST 5%</td>
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
                                    <td>Rs.38,150/- + GST 5%</td>
                                    <td>Rs.25,750/- + GST 5%</td>
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
                            Rs.36,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.28,000/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            MYSURU – HOTEL THE PRESIDENT or its equivalent
                            
                            
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 2</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/mysore.jpg" alt="err"/>
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
                                BENGALURU (2N) - MYSURU (3N) – OOTY *TN(2N)
                            </td>
                            
                                <td>
                                    8 Days / 7 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) - MYSURU (2N) – OOTY *TN(2N)
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Mysuru. Evening, arrive Mysuru. Enroute visit Bannerghatta National Park a sanctuary for a large variety of flora and fauna, enjoy the safari by spotting the wildlife very closely. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Shree Chamundeshwari Temple and latter visit magnificent edifice the Mysore Palace one of the most visited monuments in India. Afternoon proceed to Srirangapatna and visit Shree Ranganatha Swamy temple, Tipu Palace, Krishna Raja Sagara Dam and Brindavan Garden one of the most beautifully laid out terrace gardens in the world. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit St Philomena&quot;s church and Zoological Garden one of the oldest and most popular zoos in India, possessing wide range of species. Afternoon visit Jaganmohan Palace Art Gallery one of the largest collections of artifacts in South India. Evening enjoys shopping. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to the Queen of Hill station Ooty. Enroute enjoy the glimpses of beautiful green and blue hills and valleys covered in eucalyptus, pine trees, coffee and tea plantations. Afternoon arrive Ooty and check in hotel. After refreshing, adjusting and setting up comfortably visit Doddabetta Peak the highest mountain in the  Nilgiri . Lunch at restaurants on the way to Ooty. Evening snacks tea / coffee at Doddabetta Peak. Night dinner and stay at hotel in Ooty.
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
                                Morning after breakfast tea / coffee hotel check out and depart to Bengaluru. Late in the evening arrive Bengaluru, if we reach Bengaluru early in the evening, we will visit Nandi Temple / Iskcon temple. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Bengaluru.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Bengaluru airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.46,000/- + GST 5%</td>
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
                                    <td>Rs.38,000/- + GST 5%</td>
                                    <td>Rs.28,000/- + GST 5%</td>
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
                                    <td>Rs.40,750/- + GST 5%</td>
                                    <td>Rs.32,250/- + GST 5%</td>
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
                                    <td>Rs.32,750/- + GST 5%</td>
                                    <td>Rs.26,250/- + GST 5%</td>
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
                                    <td>Rs.64,000/- + GST 5%</td>
                                    <td>Rs.49,900/- + GST 5%</td>
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
                                    <td>Rs.56,000/- + GST 5%</td>
                                    <td>Rs.41,900/- + GST 5%</td>
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
                                    <td>Rs.58,750/- + GST 5%</td>
                                    <td>Rs.46,150/- + GST 5%</td>
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
                                    <td>Rs.50,750/- + GST 5%</td>
                                    <td>Rs.38,150/- + GST 5%</td>
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
                            Rs.46,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.38,000/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            MYSURU – HOTEL THE PRESIDENT or its equivalent
                            
                                <br /> OOTY – HOTEL VINAYAGA INN or its equivalent
                            
                            
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 3</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/hassan.jpg" alt="err"/>
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
                                BENGALURU (2N) – HASSAN (1N) - MYSURU (3N)
                            </td>
                            
                                <td>
                                    7 Days / 6 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) – HASSAN (1N) - MYSURU (2N)
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Hassan. Evening, arrive Hassan. Enroute visit Bannerghatta National Park a sanctuary for a large variety of flora and fauna, enjoy the safari by spotting the wildlife very closely. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Hassan.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Mysuru. Late evening, arrive Mysuru. Enroute visit historical Belur and Halebidu Temples of the Hoysala dynasty a glimpse of Hindu Temple art and the regal past of the state, famous for their carvings and splendid architecture. Afternoon visit historical Shravanabelagola the Jain Temple famous for 18m. high statue of Gommateshwara Bahubali. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Shree Chamundeshwari Temple and latter visit magnificent edifice the Mysore Palace one of the most visited monuments in India. Afternoon proceed to Srirangapatna and visit Shree Ranganatha Swamy temple, Tipu Palace, Krishna Raja Sagara Dam and Brindavan Garden one of the most beautifully laid out terrace gardens in the world. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit St Philomena&quot;s church and Zoological Garden one of the oldest and most popular zoos in India, possessing wide range of species. Afternoon visit Jaganmohan Palace Art Gallery one of the largest collections of artifacts in South India. Evening enjoys shopping. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
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
                                Morning after breakfast tea / coffee hotel check out and depart to Bengaluru airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.39,500/- + GST 5%</td>
                                    <td>Rs.30,500/- + GST 5%</td>
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
                                    <td>Rs.31,500/- + GST 5%</td>
                                    <td>Rs.22,500/- + GST 5%</td>
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
                                    <td>Rs.35,000/- + GST 5%</td>
                                    <td>Rs.27,500/- + GST 5%</td>
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
                                    <td>Rs.27,000/- + GST 5%</td>
                                    <td>Rs.19,500/- + GST 5%</td>
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
                                    <td>Rs.58,000/- + GST 5%</td>
                                    <td>Rs.44,000/- + GST 5%</td>
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
                                    <td>Rs.50,500/- + GST 5%</td>
                                    <td>Rs.36,000/- + GST 5%</td>
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
                                    <td>Rs.54,000/- + GST 5%</td>
                                    <td>Rs.41,000/- + GST 5%</td>
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
                                    <td>Rs.46,000/- + GST 5%</td>
                                    <td>Rs.33,000/- + GST 5%</td>
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
                            Rs.39,500/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.31,500/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            MYSURU – HOTEL THE PRESIDENT or its equivalent
                            
                                <br /> HASSAN – HOTEL RAAMA or its equivalent
                            
                            
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 4</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/ooty.jpg" alt="err"/>
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
                                BENGALURU (2N) – HASSAN (1N) - MYSURU (3N) - OOTY *TN(2N)
                            </td>
                            
                                <td>
                                    9 Days / 8 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) – HASSAN (1N) - MYSURU (2N) - OOTY  *TN(2N)
                            </td>
                            <td>
                                7 Days / 6 Nights <br />
                                
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and  visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Hassan. Evening, arrive Hassan. Enroute visit Bannerghatta National Park a sanctuary for a large variety of flora and fauna, enjoy the safari by spotting the wildlife very closely. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Hassan.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Mysuru. Late evening, arrive Mysuru. Enroute visit historical Belur and Halebidu Temples of the Hoysala dynasty a glimpse of Hindu Temple art and the regal past of the state, famous for their carvings and splendid architecture. Afternoon visit historical Shravanabelagola the Jain Temple famous for 18m. high statue of Gommateshwara Bahubali. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Shree Chamundeshwari Temple and latter visit magnificent edifice the Mysore Palace one of the most visited monuments in India. Afternoon proceed to Srirangapatna and visit Shree Ranganatha Swamy temple, Tipu Palace, Krishna Raja Sagara Dam and Brindavan Garden one of the most beautifully laid out terrace gardens in the world. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit St Philomena&quot;s church and Zoological Garden one of the oldest and most popular zoos in India, possessing wide range of species. Afternoon visit Jaganmohan Palace Art Gallery one of the largest collections of artifacts in South India. Evening enjoys shopping. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
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
                                Morning after breakfast tea / coffee proceed to Coonoor and visit dolphin&quot;s nose, Lamb&quot;s Rock, Sim&quot;s Park, Tea Garden and factory. Afternoon visit the fascinating Botanical Garden. Evening visit and admire the beautiful Ooty Lake, guests can also enjoy various activities organised by the locals at their own expenses. Later the guests can also enjoy shopping. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Ooty.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Bengaluru. Late in the evening arrive Bengaluru, if we reach Bengaluru early in the evening, we will visit Nandi Temple / Iskcon temple. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Bengaluru.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Bengaluru airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.49,500/- + GST 5%</td>
                                    <td>Rs.39,500/- + GST 5%</td>
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
                                    <td>Rs.41,500/- + GST 5%</td>
                                    <td>Rs.31,500/- + GST 5%</td>
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
                                    <td>Rs.43,500/- + GST 5%</td>
                                    <td>Rs.35,000/- + GST 5%</td>
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
                                    <td>Rs.35,500/- + GST 5%</td>
                                    <td>Rs.27,000/- + GST 5%</td>
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
                                    <td>Rs.72,500/- + GST 5%</td>
                                    <td>Rs.58,000/- + GST 5%</td>
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
                                    <td>Rs.64,500/- + GST 5%</td>
                                    <td>Rs.50,000/- + GST 5%</td>
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
                                    <td>Rs.66,500/- + GST 5%</td>
                                    <td>Rs.53,500/- + GST 5%</td>
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
                                    <td>Rs.58,500/- + GST 5%</td>
                                    <td>Rs.45,500/- + GST 5%</td>
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
                            Rs.49,500/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.41,500/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            MYSURU – HOTEL THE PRESIDENT or its equivalent
                            
                                <br /> HASSAN – HOTEL RAAMA or its equivalent
                            
                            
                                <br /> OOTY – HOTEL VINAYAGA INN or its equivalent
                            
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 5</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/coorg.webp" alt="err"/>
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
                                BENGALURU (2N) - MYSURU (3N) – COORG (2N) – MANGULURU – (1N)
                            </td>
                            
                                <td>
                                    9 Days / 8 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) - MYSURU (2N) –COORG (2N) – MANGULURU – (1N)
                            </td>
                            <td>
                                7 Days / 6 Nights <br />
                                
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Nandi Temple said to be the biggest temple to Nandi in the world and Visvesvaraya Industrial and Technological Museum which houses a treasure trove of machines and artifacts related to science and technology. Afternoon visit the old, delightful and popular Lalbagh botanical garden a home to a variety of flora and fauna with a glass house, an aquarium and a lake. Evening visit Iskcon temple and shopping. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Mysuru. Evening, arrive Mysuru. Enroute visit Bannerghatta National Park a sanctuary for a large variety of flora and fauna, enjoy the safari by spotting the wildlife very closely. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Shree Chamundeshwari Temple and latter visit magnificent edifice the Mysore Palace one of the most visited monuments in India. Afternoon proceed to Srirangapatna and visit Shree Ranganatha Swamy temple, Tipu Palace, Krishna Raja Sagara Dam and Brindavan Garden one of the most beautifully laid out terrace gardens in the world. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit St Philomena&quot;s church and Zoological Garden one of the oldest and most popular zoos in India, possessing wide range of species. Afternoon visit Jaganmohan Palace Art Gallery one of the largest collections of artifacts in South India. Evening enjoys shopping. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
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
                                Morning after breakfast tea / coffee visit Talacauvery, the birthplace of the sacred River Kaveri. Afternoon visit Abbey Falls (only during monsoon), Raja&quot;s Tomb, Madikeri Fort Omkareshwara Temple and Raja&quot;s Seat and shopping specially the locally grown coffee and spice products. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Madikeri.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Mangaluru. Evening arrive Mangaluru and check in  hotel. After refreshing, adjusting and setting up comfortably you can visit a local seashore.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Mangaluru airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.49,500/- + GST 5%</td>
                                    <td>Rs.39,500/- + GST 5%</td>
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
                                    <td>Rs.41,500/- + GST 5%</td>
                                    <td>Rs.31,500/- + GST 5%</td>
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
                                    <td>Rs.43,500/- + GST 5%</td>
                                    <td>Rs.35,000/- + GST 5%</td>
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
                                    <td>Rs.35,500/- + GST 5%</td>
                                    <td>Rs.27,000/- + GST 5%</td>
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
                                    <td>Rs.72,500/- + GST 5%</td>
                                    <td>Rs.58,000/- + GST 5%</td>
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
                                    <td>Rs.64,500/- + GST 5%</td>
                                    <td>Rs.50,000/- + GST 5%</td>
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
                                    <td>Rs.66,500/- + GST 5%</td>
                                    <td>Rs.53,500/- + GST 5%</td>
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
                                    <td>Rs.58,500/- + GST 5%</td>
                                    <td>Rs.45,500/- + GST 5%</td>
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
                            Rs.49,500/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.41,500/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            MYSURU – HOTEL THE PRESIDENT or its equivalent
                            
                                <br /> COORG – HOTEL COORG INTERNATIONAL or its equivalent
                            
                            
                                <br /> MANGULURU – HOTEL METRO PLAZA or its equivalent
                            
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 6</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/main4.jpeg" alt="err"/>
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
                                BENGALURU (2N) – HASSAN (1N) - MYSURU (3N) - COORG (2N) – MANGALURU  (1N)
                            </td>
                            
                                <td>
                                    10 Days / 9 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) – HASSAN (1N) - MYSURU (2N) - COORG  (2N) – MANGALURU (1N)
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Nandi Temple said to be the biggest temple to Nandi in the world and Visvesvaraya Industrial and Technological Museum which houses a treasure trove of machines and artifacts related to science and technology. Afternoon visit the old, delightful and popular Lalbagh botanical garden a home to a variety of flora and fauna with a glass house, an aquarium and a lake. Evening visit Iskcon temple and shopping. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Hassan. Evening, arrive Hassan. Enroute visit Bannerghatta National Park a sanctuary for a large variety of flora and fauna, enjoy the safari by spotting the wildlife very closely. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Hassan.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Mysuru. Late evening, arrive Mysuru. Enroute visit historical Belur and Halebidu Temples of the Hoysala dynasty a glimpse of Hindu Temple art and the regal past of the state, famous for their carvings and splendid architecture. Afternoon visit historical Shravanabelagola the Jain Temple famous for 18m. high statue of Gommateshwara Bahubali. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Shree Chamundeshwari Temple and latter visit magnificent edifice the  Mysore Palace one of the most visited monuments in India. Afternoon proceed to Srirangapatna and visit Shree Ranganatha Swamy temple, Tipu Palace, Krishna Raja Sagara Dam and Brindavan Garden one of the most beautifully laid out terrace gardens in the world. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
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
                                Morning after breakfast tea / coffee hotel check out and depart to the Western Ghats Mountain range Coorg also known as Kodagu. A land of misty hills, lush green woody forests, acres and acres of coffee plantations and its aroma, cascading falls and breath-taking landscapes. Evening arrive Madikeri. Enroute visit Tibetan Golden Temple, Namdroling Monastery and Cauvery Nisargadhama. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Madikeri.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Talacauvery, the birthplace of the sacred River Kaveri. Afternoon visit Abbey Falls (only during monsoon), Raja&quot;s Tomb, Madikeri Fort Omkareshwara Temple and Raja&quot;s Seat and shopping specially the locally grown coffee and spice products. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Madikeri.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Mangaluru. Evening arrive Mangaluru and check in  hotel. After refreshing, adjusting and setting up comfortably you can visit a local seashore.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Mangaluru airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.55,000/- + GST 5%</td>
                                    <td>Rs.46,000/- + GST 5%</td>
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
                                    <td>Rs.47,000/- + GST 5%</td>
                                    <td>Rs.38,000/- + GST 5%</td>
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
                                    <td>Rs.48,250/- + GST 5%</td>
                                    <td>Rs.40,750/- + GST 5%</td>
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
                                    <td>Rs.40,250/- + GST 5%</td>
                                    <td>Rs.32,750/- + GST 5%</td>
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
                                    <td>Rs.79,500/- + GST 5%</td>
                                    <td>Rs.64,000/- + GST 5%</td>
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
                                    <td>Rs.71,500/- + GST 5%</td>
                                    <td>Rs.56,000/- + GST 5%</td>
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
                                    <td>Rs.72,750/- + GST 5%</td>
                                    <td>Rs.58,750/- + GST 5%</td>
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
                                    <td>Rs.66,750/- + GST 5%</td>
                                    <td>Rs.50,750/- + GST 5%</td>
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
                            Rs.55,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.47,000/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            MYSURU – HOTEL THE PRESIDENT or its equivalent
                            
                                <br /> COORG – HOTEL COORG INTERNATIONAL or its equivalent
                            
                            
                                <br /> MANGULURU – HOTEL METRO PLAZA or its equivalent
                            
                            
                                <br /> HASSAN – HOTEL RAAMA or its equivalent
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 7</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/vrindavan-garden-mysore.jpg" alt="err"/>
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
                                BENGALURU (2N) - MYSURU (3N) – HASSAN / CHIKMAGALUR (3N) – UDUPI / MANGALURU (1N)
                            </td>
                            
                                <td>
                                    10 Days / 9 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) - MYSURU (2N) – HASSAN / CHIKMAGALUR (3N) – UDUPI / MANGALURU (1N)
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Nandi Temple said to be the biggest temple to Nandi in the world and Visvesvaraya Industrial and Technological Museum which houses a treasure trove of machines and artifacts  related to science and technology. Afternoon visit the old, delightful and popular Lalbagh botanical garden a home to a variety of flora and fauna with a glass house, an aquarium and a lake. Evening visit Iskcon temple and shopping. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Mysuru. Evening, arrive Mysuru. Enroute visit Bannerghatta National Park a sanctuary for a large variety of flora and fauna, enjoy the safari by spotting the wildlife very closely. Lunch and evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Shree Chamundeshwari Temple and latter visit magnificent edifice the Mysore Palace one of the most visited monuments in India. Afternoon proceed to Srirangapatna and visit Shree Ranganatha Swamy temple, Tipu Palace, Krishna Raja Sagara Dam and Brindavan Garden one of the most beautifully laid out terrace gardens in the world. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit St Philomena&quot;s church and Zoological Garden one of the oldest and most popular zoos in India, possessing wide range of species. Afternoon visit Jaganmohan Palace Art Gallery one of the largest collections of artifacts in South India. Evening enjoys shopping. Lunch, Evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Mysuru.
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
                                Morning after breakfast tea / coffee visit charming destination with rich sightseeing attractions - Mullayanagiri. The highest peak in Karnataka and Chandra Drona Parvatha also known as Datta Peeta and Baba Budangiri range. Afternoon visit the ancient Shree Veeranarayana temple Belavadi and Hirekolale lake or Ayyanakere Lake. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Chikmagalur.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Kalasa enroute visit Sringeri Shree Sharada Peetham, one of the four mathas that were established by Adi Shankaracharya in different parts of the country. Located on the banks of the Tunga river and is surrounded by picturesque views and stunning beauty. Afternoon after darshan and lunch proceed to Horanadu Shree Annapoorneshwari Temple, situated on the banks of river Bhadra, surrounded by the natural vegetation, forest, green lands, and natural beauty of the Western Ghats. Late evening check in hotel. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in  Kalasa.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Udupi / Mangaluru. Enroute enjoy the glimpses of the scenic western ghats and Kudremukh National Park. Also halt at tea garden on the way. Afternoon visit jain statues and structure - Bahubali also known as Gomateshwara and Chaturmukha Basadi. Latter visit Shree Krishna Matha and a local seashore. Evening check in hotel. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Udupi / Mangaluru.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Mangaluru airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.55,000/- + GST 5%</td>
                                    <td>Rs.46,000/- + GST 5%</td>
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
                                    <td>Rs.47,000/- + GST 5%</td>
                                    <td>Rs.38,000/- + GST 5%</td>
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
                                    <td>Rs.48,250/- + GST 5%</td>
                                    <td>Rs.40,750/- + GST 5%</td>
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
                                    <td>Rs.40,250/- + GST 5%</td>
                                    <td>Rs.32,750/- + GST 5%</td>
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
                                    <td>Rs.79,500/- + GST 5%</td>
                                    <td>Rs.64,000/- + GST 5%</td>
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
                                    <td>Rs.71,500/- + GST 5%</td>
                                    <td>Rs.56,000/- + GST 5%</td>
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
                                    <td>Rs.72,750/- + GST 5%</td>
                                    <td>Rs.58,750/- + GST 5%</td>
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
                                    <td>Rs.64,750/- + GST 5%</td>
                                    <td>Rs.50,750/- + GST 5%</td>
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
                            Rs.55,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.47,000/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            MYSURU – HOTEL THE PRESIDENT or its equivalent
                            
                                <br /> CHIKMAGALUR – HOTEL ROBUSTAINN or its equivalent
                            
                            
                                <br /> KALASA - HOTEL ASHIRWAD or its equivalent
                            
                            
                                <br /> MANGULURU – HOTEL METRO PLAZA or its equivalent
                            
                            
                                <br /> HASSAN – HOTEL RAAMA or its equivalent
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 8</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/badami.webp" alt="err"/>
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
                                BENGALURU (2N) – CHITRADURGA (1N) - HAMPI (2N) –  BADAMI (2N) – GOA (2N)
                            </td>
                            
                                <td>
                                    10 Days / 9 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                BENGALURU (1N) – CHITRADURGA (1N) - HAMPI (2N) –  BADAMI (1N) – HUBLI (1N)
                            </td>
                            <td>
                                7 Days / 6 Nights <br />
                                
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
                            Arrive Bengaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local sightseeing or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit Nandi Temple said to be the biggest temple to Nandi in the world and Visvesvaraya Industrial and Technological Museum which houses a treasure trove of machines and artifacts related to science and technology. Afternoon visit the old, delightful and popular Lalbagh botanical garden a home to a variety of flora and fauna with a glass house, an aquarium and a lake. Evening visit Iskcon temple and shopping. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Bengaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Chitradurga. Afternoon arrive and visit Chitradurga fort and Chandravalli Caves. Evening check in hotel. Lunch at restaurants on the way, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Chitradurga.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Hampi. Afternoon visit Tungabhadra dam and Gardens also known as Pampa Sagar, one of the oldest Dams built in India post-independence. Evening arrive Hampi. Lunch at restaurants on the way, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Hampi.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee full day excursion in Hampi - a historical delight situated in the shadowed depth of hills and valleys, the city of enchanting remains of Vijayanagar Empire, a UNESCO World Heritage Site. experience the several ancient monuments, amazing temples, ruins of palaces, ancient market streets, royal  galleries, fortresses, platforms, treasury buildings, and many more. Evening shopping. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Hampi.
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
                                Morning after breakfast tea / coffee full day excursion in Badami an archaeological delight owing to its beautifully crafted sandstone cave temples, fortresses and carvings. Evening shopping. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Badami.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Goa. Evening arrive Madgaon / Panaji check in hotel. Fresh up and leisure at the town. Lunch at restaurants on the way, evening snacks tea / coffee at the town. Night dinner and stay at hotel in Madgaon / Panaji.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Fort Aguada. Afternoon visit Basilica de Bom Jesus Church. Evening visits a beach. There are several water sport activities and Cruise organised by locals. The guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Madgaon / Panaji.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Dabolim airport. (Flight details will be provided post  booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.55,000/- + GST 5%</td>
                                    <td>Rs.39,500/- + GST 5%</td>
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
                                    <td>Rs.47,000/- + GST 5%</td>
                                    <td>Rs.31,500/- + GST 5%</td>
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
                                    <td>Rs.48,250/- + GST 5%</td>
                                    <td>Rs.35,000/- + GST 5%</td>
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
                                    <td>Rs.40,250/- + GST 5%</td>
                                    <td>Rs.27,000/- + GST 5%</td>
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
                                    <td>Rs.79,500/- + GST 5%</td>
                                    <td>Rs.58,000/- + GST 5%</td>
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
                                    <td>Rs.71,500/- + GST 5%</td>
                                    <td>Rs.50,000/- + GST 5%</td>
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
                                    <td>Rs.72,750/- + GST 5%</td>
                                    <td>Rs.53,500/- + GST 5%</td>
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
                                    <td>Rs.64,750/- + GST 5%</td>
                                    <td>Rs.45,500/- + GST 5%</td>
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
                            Rs.55,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.47,000/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> BANGALURU – HOTEL WEST FORT or its equivalent <br />
                            CHITRADURGA – HOTEL AMOGHA INTERNATIONAL or its equivalent
                            
                                <br /> HAMPI – HOTEL MALLIGI or its equivalent
                            
                            
                                <br /> BADAMI – HOTEL RAJSANGAM INTERNATIONAL or its equivalent
                            
                            
                                <br /> GOA – HOTEL or its equivalent
                            
                            
                                <br /> HUBLI – HOTEL METROPOLIS or its equivalent
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 9</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/chikmagalur-new.jpeg" alt="err"/>
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
                                MANGALURU (1N) –CHIKMAGALUR (3N) – UDUPI (1N)
                            </td>
                            
                                <td>
                                    6 Days / 5 Nights <br />
                                </td>
                            
                        </tr>
                        
                        <tr className="red-color">
                            <td>COMPACT</td>
                            <td>
                                MANGALURU (1N) –CHIKMAGALUR (3N)
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
                    <p className="font-weight"><span style={{textDecoration: "underline"}}> TOUR ITINERARY </span>– (The itinerary is
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
                            Arrive Mangaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local seashore or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Mangaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Chikmagalur a scenic town with picturesque landscapes, different shades of green misty hills, waterfalls and extensive estate of aromatic coffee. Enroute enjoy the scenic glimpses of Charmadi Ghat. Afternoon visit the ancient Shree Veeranarayana temple Belavadi and Ayyanakere Lake or Hirekolale lake and check in hotel. Lunch evening snacks tea / coffee at sightseeing places.  Night dinner and stay at hotel in Chikmagalur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee full day excursion to Kemmangundi a trekkers bliss – experience the picturesque landscapes of valleys and mountains, wrapped by lush green vegetation, gardens, thrilling waterfalls (only in monsoon) and much more. Lunch evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Chikmagalur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee depart to Kalasa. Enroute visit charming destination with rich sightseeing attractions - Mullayanagiri. The highest peak in Karnataka and Chandra Drona Parvatha also known as Datta Peeta and Baba Budangiri range. Evening arrive Kalasa and check in hotel. Lunch evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Kalasa.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Udupi / Mangaluru. Enroute visit Horanadu Shree Annapoorneshwari Temple and enjoy the glimpses of the scenic western ghats and Kudremukh National Park. Also halt at tea garden on the way. Afternoon visit Jain statues and structure - Bahubali also known as Gomateshwara and Chaturmukha Basadi. Latter visit Shree Krishna Matha and a local seashore. Evening check in hotel. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Udupi / Mangaluru.
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
                                Day 6
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Chandigarh airport. (Flight details
                                will be provided
                                post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    
                    
                    <tr style={{fontWeight:600}}>
                        <td colSpan="2">
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                        <td colSpan="2">
                            <p className="font-weight">Regular tour for couple / family / Group is arranged on any date throughout the
                                year according to the time availability
                                and convenience of the guests.</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <p className="font-weight">Scheduled Tour is organised on specific dates.</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <center>
                                <p className="font-weight">TOUR COST per person on twin sharing basis, except vacations and long
                                    holidays.</p>
                            </center>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding:0}}>
                            <p className="font-weight"><span className="blue-color">REGULAR TOUR for</span><span className="red-color">
                                    Group</span><span className="blue-color"> 7 person and above</span>
                                Travel by Tempo Traveller / Bus</p>
                            <p>Travel by Tempo / Traveller Buses</p>
                        </td>
                        <td width="40%" style={{padding:0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td colSpan="2">
                                        <center>TOUR TYPE</center>
                                    </td>
                                </tr>
                                <tr style={{marginBottom: 0}}>
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
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.36,000/- + GST 5%</td>
                                    <td>Rs.30,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.28,000/- + GST 5%</td>
                                    <td>Rs.22,550/- + GST 5%</td>
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
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.32,250/- + GST 5%</td>
                                    <td>Rs.27,500/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.24,250/- + GST 5%</td>
                                    <td>Rs.19,500/- + GST 5%</td>
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
                        <td style={{padding:0}}>
                            <p className="font-weight"><span className="purple-color">REGULAR TOUR for couple / family <br /> Exclusively
                                    travel by car</span></p>
                        </td>
                        <td width="40%" style={{padding:0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td colSpan="2">
                                        <center>TOUR TYPE</center>
                                    </td>
                                </tr>
                                <tr style={{marginBottom: 0}}>
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
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.49,900/- + GST 5%</td>
                                    <td>Rs.44,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="green-color font-weight">LUXURY TOUR</span> Excluding Air Fare.
                        </td>
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.41,900/- + GST 5%</td>
                                    <td>Rs.36,000/- + GST 5%</td>
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
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.46,150/- + GST 5%</td>
                                    <td>Rs.41,000/- + GST 5%</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    
                    <tr>
                        <td>
                            <span className="brown-color font-weight">BUDGET TOUR </span>Excluding Air Fare.
                        </td>
                        <td style={{padding: 0}}>
                            <table style={{marginBottom: 0}} className="table table-bordered">
                                <tr>
                                    <td>Rs.38,150/- + GST 5%</td>
                                    <td>Rs.33,000/- + GST 5%</td>
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
                            Rs.36,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.28,000/- + GST 5%tour.
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
                        <td colSpan="3" width="50%" className="font-weight" style={{padding: 0}}>
                            <table className="table table-bordered border-secondary" style={{marginBottom: 0}}>
                                <tr>
                                    <td>20% discount for third person sharing same room</td>
                                    <td>Single occupancy – 50% additional charges on per person cost.</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="font-weight">
                            Guests booking their own air tickets and guests travelling by railway or other mode of transport. <br />
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{display: "grid", gridTemplateColumns: "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> CHIKMAGALUR – HOTEL ROBUSTAINN or its equivalent <br />
                            KALASA - HOTEL ASHIRWAD or its equivalent
                            
                                <br /> MANGULURU – HOTEL METRO PLAZA or its equivalent
                            
                            
                                <br /> UDUPI – HOTEL SHARADA INTERNATIONAL or its equivalent
                            
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI’s or foreign nationals varies, for more details kindly contact Venture World</p>
                {/* <!-- Tour cost does not include table --> */}
                <h6 className="font-weight" style={{textDecoration: "underline"}}>TOUR COST DOES NOT INCLUDE</h6>
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
                <p><span style={{textDecoration: "underline"}} className="font-weight">Baggage Allowance: </span>Participants are
                    requested to abide by the airline policy for the weight and size of Checked-in
                    baggage and
                    cabin hand baggage per person.</p>
                <br />
                <p><span className="font-weight" style={{textDecoration: "underline"}}>Cancellation:</span> - (refund on full amount)</p>
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
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 10</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/chikmagalur.jpg" alt="err"/>
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
                                MANGALURU (1N) – HASSAN (1N) –CHIKMAGALUR (2N) –  UDUPI (1N)
                            </td>
                            
                                <td>
                                    6 Days / 5 Nights <br />
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
                            Arrive Mangaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local seashore or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Mangaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee depart to Hassan. Enroute visit historical Shravanabelagola the Jain Temple famous for 18m. high statue of Gommateshwara Bahubali. Evening arrive Hassan and check in hotel. Lunch at restaurant on the way. Evening snacks tea / coffee at sightseeing place. Night dinner and stay at hotel in Hassan.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Chikmagalur a scenic town with picturesque landscapes, different shades of green misty hills, waterfalls and extensive estate of aromatic coffee. Enroute visit historical Halebidu and Belur Temples of the Hoysala dynasty a glimpse of Hindu Temple. Afternoon visit the ancient Shree Veeranarayana temple Belavadi and Ayyanakere Lake or Hirekolale lake and check in hotel. Lunch evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Chikmagalur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Kalasa. Enroute visit charming destination with rich sightseeing attractions - Mullayanagiri. The highest peak in Karnataka and Chandra Drona Parvatha also known as Datta Peeta and Baba Budangiri range. Evening arrive Kalasa and check in hotel. Lunch evening snacks tea / coffee  at restaurants on the way. Night dinner and stay at hotel in Kalasa.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Udupi / Mangaluru. Enroute visit Horanadu Shree Annapoorneshwari Temple and enjoy the glimpses of the scenic western ghats and Kudremukh National Park. Also halt at tea garden on the way. Afternoon visit Jain statues and structure - Bahubali also known as Gomateshwara and Chaturmukha Basadi. Latter visit Shree Krishna Matha and a local seashore. Evening check in hotel. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Udupi / Mangaluru.
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
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.36,000/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                                    <td>Rs.28,000/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                                    <td>Rs.32,250/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                                    <td>Rs.24,250/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                                    <td>Rs.49,900/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                                    <td>Rs.41,900/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                                    <td>Rs.46,150/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                                    <td>Rs.38,150/- + GST 5%</td>
                                    <td>------------------------- + GST 5%</td>
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
                            Rs.36,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.28,000/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> CHIKMAGALUR – HOTEL ROBUSTAINN or its equivalent <br />
                            KALASA - HOTEL ASHIRWAD or its equivalent
                            
                                <br /> MANGULURU – HOTEL METRO PLAZA or its equivalent
                            
                            
                                <br /> HASSAN – HOTEL RAAMA or its equivalent
                            
                            
                                <br /> UDUPI – HOTEL SHARADA INTERNATIONAL or its equivalent
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
            
            <section id="tour-11">
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 11</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/somnath-mandir.jpg" alt="err"/>
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
                                DESTINATION: MANGALURU (1N) – KUKKE SUBRAMANYA (1N) – CHIKMAGALUR (3N) – UDUPI (1N) VISIT SHREE RAJARAJESHWARI, SHREE DURGAPARAMESHWARI SHREE SUBRAMANYA, SHREE DHARMASTHALA, SHREE SHARADAMBA SHRINGERI, SHREE ANNAPOORNESHWARI HORANADU and SHREE KRISHNA TEMPLE
                            </td>
                            
                                <td>
                                    7 Days / 6 Nights <br />
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
                            Arrive Mangaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local seashore or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Mangaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out proceed to visit Shree Rajarajeshwari and Shree Durgaparameshwari Temple. Latter in the afternoon depart to Shree Kukke Subramanya. Late evening arrive Shree Kukke Subramanya and check in hotel. After refreshing, adjusting and setting up comfortably you can visit the temple for darshan, Pooja and enquiry for any rituals / sevas to be performed on the next day. Lunch, evening snacks tea / coffee at restaurant on the way. Night dinner and stay at hotel in Shree Kukke Subramanya.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Early morning visit the temple for darshan, Pooja and for any rituals / sevas to be performed. After visiting the temple have breakfast tea / coffee then hotel check out and depart to Chikmagalur a scenic town with picturesque landscapes, different shades of green misty hills, waterfalls and extensive estate of aromatic coffee. Enroute visit Shree Dharmasthala and latter enjoy the scenic glimpses of Charmadi Ghat on the way. Night arrive Chikmagalur and check in hotel. Lunch, evening snacks tea / coffee at restaurant on the way. Night dinner and stay at hotel in  Chikmagalur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit charming destination with rich sightseeing attractions - Mullayanagiri. The highest peak in Karnataka and Chandra Drona Parvatha also known as Datta Peeta and Baba Budangiri range. Afternoon visit the ancient Shree Veeranarayana temple Belavadi and Ayyanakere Lake or Hirekolale lake. Lunch evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Chikmagalur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Kalasa. Enroute visit Shree Sharadamba Shringeri Temple / Math. Evening arrive Kalasa and check in hotel. Lunch evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Kalasa.
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
                                Morning after breakfast tea / coffee hotel check out and depart to Mangaluru airport. (Flight details will be provided  post booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.39,500/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.31,500/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.35,000/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.27,000/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.58,500/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.50,000/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.54,000/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.46,000/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                            Rs.39,500/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.31,500/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> CHIKMAGALUR – HOTEL ROBUSTAINN or its equivalent <br />
                            KALASA - HOTEL ASHIRWAD or its equivalent
                            
                                <br /> MANGULURU – HOTEL METRO PLAZA or its equivalent
                            
                            
                                <br /> KUKKE SUBRAMANYA – HOTEL RAAMA or its equivalent
                            
                            
                                <br /> UDUPI – HOTEL SHARADA INTERNATIONAL or its equivalent
                            
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
            
            <section id="tour-12">
                <h4 className="font-weight"><span className="lightblue-color"> Majestic Karnataka </span>- Tour 12</h4>
                <div className="tour-img-info">
                    <img className="side-img" src="/images/karnataka/trimbakeshwar.jpg" alt="err"/>
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
                                MANGALURU (1N) – KUKKE SUBRAMANYA (1N) - CHIKMAGALUR (3N) – UDUPI (1N) - GOKARNA (1N) – GOA (2N) VISIT SHREE RAJARAJESHWARI, SHREE DURGAPARAMESHWARI SHREE SUBRAMANYA, SHREE DHARMASTHALA, SHREE SHARADAMBA SHRINGERI, SHREE ANNAPOORNESHWARI HORANADU, SHREE KRISHNA TEMPLE, SHREE MOOKAMBIKA, SHREE MURUDESHWAR, SHREE MAHABALESHWARA SWAMI TEMPLE, SHREE MANGESHI and SHREE SHANTA DURGA TEMPLE.
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
                            Arrive Mangaluru Airport and proceed to hotel (flight details will be provided post booking). After refreshing, adjusting and setting up comfortably you can visit a local seashore or shopping. (Lunch, Evening snacks tea / coffee and visiting places depends on the arrival time of the flight) Night dinner and stay at hotel in Mangaluru.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 2
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out proceed to visit Shree Rajarajeshwari and Shree Durgaparameshwari Temple. Latter in the afternoon depart to Shree Kukke Subramanya. Late evening arrive Shree Kukke Subramanya and check in hotel. After refreshing, adjusting and setting up comfortably you can visit the temple for darshan, Pooja and enquiry for any rituals / sevas to be performed on the next day. Lunch, evening snacks tea / coffee at restaurant on the way. Night dinner and stay at hotel in Shree Kukke Subramanya.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 3
                        </td>
                        <td>
                            Early morning visit the temple for darshan, Pooja and for any rituals / sevas to be performed. After visiting the temple have breakfast tea / coffee then hotel check out and depart to Chikmagalur a scenic town with picturesque landscapes, different shades of green misty hills, waterfalls and extensive estate of aromatic coffee. Enroute visit Shree Dharmasthala and latter enjoy the scenic glimpses of Charmadi Ghat on the way. Night arrive Chikmagalur and check in hotel. Lunch, evening snacks tea / coffee at restaurant on the way. Night dinner and stay at hotel in Chikmagalur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 4
                        </td>
                        <td>
                            Morning after breakfast tea / coffee visit charming destination with rich sightseeing attractions - Mullayanagiri. The highest peak in Karnataka and Chandra Drona Parvatha also known as Datta Peeta and Baba Budangiri range. Afternoon visit the ancient Shree Veeranarayana temple Belavadi and Ayyanakere Lake or Hirekolale lake. Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Chikmagalur.
                        </td>
                    </tr>
                    <tr>
                        <td width="06%">
                            Day 5
                        </td>
                        <td>
                            Morning after breakfast tea / coffee hotel check out and depart to Kalasa. Enroute visit Shree Sharadamba Shringeri Temple / Math. Evening arrive Kalasa and check in hotel. Lunch, evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Kalasa.
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
                                Morning after breakfast tea / coffee hotel check out and depart to Gokarna. Enroute visit Shree Mookambika and Shree Murudeshwar Temple. Evening arrive Gokarna and check in hotel. Lunch, evening snacks tea / coffee at restaurants on the way. Night dinner and stay at hotel in Gokarna.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 8
                            </td>
                            <td>
                                Early morning visit the Shree Mahabaleshwara Swami Temple for darshan, Pooja and for any rituals / sevas to be performed. After visiting the temple have breakfast tea / coffee then hotel check out and depart to Goa. Night arrive Goa and check in hotel. Lunch, evening snacks tea / coffee at restaurant on the way. Night dinner and stay at hotel in Madgaon / Panaji.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 9
                            </td>
                            <td>
                                Morning after breakfast tea / coffee visit Shree Mangeshi and Shree Shanta Durga Temple. Evening visits a beach. There are several water sport activities and Cruise organised by locals. The guests can enjoy them at their own expenses (for information some of the activities can be a bit risky take utmost care while doing these activities). Lunch, evening snacks tea / coffee at sightseeing places. Night dinner and stay at hotel in Madgaon / Panaji.
                            </td>
                        </tr>
                    
                    
                        <tr>
                            <td width="06%">
                                Day 10
                            </td>
                            <td>
                                Morning after breakfast tea / coffee hotel check out and depart to Dabolim airport. (Flight details will be provided post  booking) Tour ends. – Carry the moment of joy and thrill throughout your lifetime.
                            </td>
                        </tr>
                    
                    
                    
                    
                    <tr style={{"fontWeight":"600"}}>
                        <td colSpan={"2"}>
                            Note: 1) Some of the sightseeing places may be closed on specific days.  <br />
                            2) There may be road blockages due to traffic jam, bad weather, demonstrations etc. which can cause delay in reaching a place of visit. In both the above cases we may opt for other sightseeing places or we may even avoid any spot in extreme conditions. <br />
                            
                            
                            
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
                                    <td>Rs.55,000/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.47,500/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.48,250/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.79,500/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.71,500/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.72,750/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                                    <td>Rs.64,750/- + GST 5%</td>
                                    <td>--------------------------- + GST 5%</td>
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
                            Rs.55,000/- + GST 5%
                        </td>
                    </tr>
                    <tr>
                        <td width="75%">
                            <p>Excluding Air Fare.</p>
                        </td>
                        <td width="25%">
                            Rs.47,500/- + GST 5%tour.
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
                        <td>The above packages pick up and drop is from Bengaluru.</td>
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
                        <td className="font-weight" style={{"display": "grid", "gridTemplateColumns": "max-content auto"}}> 
                            <span> ACCOMODATION : </span>
                            <span> CHIKMAGALUR – HOTEL ROBUSTAINN or its equivalent <br />
                            KALASA - HOTEL ASHIRWAD or its equivalent
                            
                                <br /> MANGULURU – HOTEL METRO PLAZA or its equivalent
                            
                            
                                <br /> KUKKE SUBRAMANYA – HOTEL RAAMA or its equivalent
                            
                            
                                <br /> UDUPI – HOTEL SHARADA INTERNATIONAL or its equivalent
                            
                            
                                <br /> GOKARNA – HOTEL OM INTERNATIONAL &lt;br&gt; GOA- PARADISE VILLAGE BEACH RESORT
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>Tour cost for NRI&quot;s or foreign nationals varies, for more details kindly contact Venture World</p>
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
                            *Any upgradation in airline className= vehicle, hotel or hotel room category.
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
    
    {/* {/* <!-- Optional JavaScript; choose one of the two! --> */}

    {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous">
    </script>
    {/* <!-- JavaScript Bundle with Popper --> */}
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <script src="/tours/static/tours/main.js">
    </script>   */}

    {/* <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    --> */}
    </>
}