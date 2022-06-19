import {useEffect} from "react"
export default function Skiing(){
    useEffect(() => {
            // adding limit to package names inside individual package
        let currentYearDOM = document.querySelector(".current-year")
        let tourInfo = document.body.querySelectorAll('.tour-info')
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
        <center><h3 className="skiing" id="skiing">SKIING CAMP</h3></center>
            <div id="slideshow-example" data-component="slideshow">
                <div role="list">
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/main6.jpg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/adventure/skiing-1.jpeg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/adventure/skiing-3.jpeg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/adventure/skiing-2.jpeg" alt="err"/>
                    </div>
                </div>
            </div>
            <p className="font-weight">VENTURE WORLD organizes skiing training camps by expert and professional
            instructors in Manali during the months of January, February and March. The
            duration of the camp is 2 days to 15 days. The camp is conducted for basic as
            well as advanced courses. The duration of the camp including transfer from
            Chandigarh - Manali - Chandigarh is minimum 5 days onwards.</p>
            <br />
            <table className="table table-bordered border-secondary text-center">
                <tbody>
                    <tr>
                        <td>No. of Days</td>
                        <td colSpan={2} style={{padding:0}}>
                            <table className="table-bordered boder-secondary adventure-table">
                                <tbody>
                                    <tr><td colSpan={2}>Skiing Camp Cost per person</td></tr>
                                    <tr>
                                        <td width={"50%"}>Couple / Family  
                                        travel by car</td>
                                        <td>Group 7 person &amp; above travel by tempo
                                        traveller / bus</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5 days 4 night
                        </td>
                        <td>
                            Rs.25,000/-
                        </td>
                        <td>
                            Rs.22,500/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6 days 5 night
                        </td>
                        <td>
                            Rs.30,000/-
                        </td>
                        <td>
                            Rs.27,500/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            7 days 6 night
                        </td>
                        <td>
                            Rs.35,550/-
                        </td>
                        <td>
                            Rs.32,500/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            8 days 7 night
                        </td>
                        <td>
                            Rs.41,000/-
                        </td>
                        <td>
                            Rs.36,350/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            9 days 8 night
                        </td>
                        <td>
                            Rs.46,000/-
                        </td>
                        <td>
                            Rs.42,300/-                     
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10 days 9 night
                        </td>
                        <td>
                            Rs.51,500/-
                        </td>
                        <td>
                            Rs.47,250/-                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            11 days 10 night
                        </td>
                        <td>
                            Rs.56,900/-
                        </td>
                        <td>
                            Rs.52,200/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            12 days 11 night
                        </td>
                        <td>
                            Rs.62,300/-
                        </td>
                        <td>
                            Rs.57,150/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            13 days 12 night
                        </td>
                        <td>
                            Rs.67,700/-
                        </td>
                        <td>
                            Rs.62,100/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            14 days 13 night
                        </td>
                        <td>
                            Rs.73,000/-
                        </td>
                        <td>
                            Rs.67,000/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            15 days 14 night
                        </td>
                        <td>
                            Rs.78,400/-
                        </td>
                        <td>
                            Rs.72,000/-
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>The above rates exclude Air / train fare. Please refer below tour cost include</td>
                    </tr>
                </tbody>
            </table>
            <section id="jungle-safari">
                <center><p className="font-weight" style={{fontSize:"x-large"}}>JUNGLE SAFARI</p></center>
                <p className="font-weight">Experience the thrill of Jungle and sight, rich wildlife species with Venture World.
                For more details, contact us.</p>
                <p className="font-weight">Some of the famous wildlife safari in India is mentioned below (note the safaris
                have a best time for sighting the wildlife and are opened only on particular
                months)</p>
                <br />
                <p> <span className="font-weight">Madhya Pradesh - </span>Panna National Park, Bandhavgarh National Park, Pench
                National Park, Satpura National Park, Kanha National Park.</p>
                <br />

                <p> <span className="font-weight">Karnataka - </span>Bandipur National Park, Nagarhole National Park.</p>
                <br />

                <p> <span className="font-weight">Assam - </span>Kaziranga National Park, Manas Wildlife Sanctuary</p>
                <br />

                <p> <span className="font-weight">Rajasthan - </span>Ranthambore National Park. <span className="font-weight">Gujarat - </span>Sasan-Gir Wildlife Sanctuary.</p>
                <br />

                <p> <span className="font-weight">Uttar Pradesh - </span>Dudhwa National Park. <span className="font-weight">West Bengal - </span>Sunderbans National Park.</p>
                <br />

                <p> <span className="font-weight">Maharashtra - </span>Tadoba National Park. <span className="font-weight">Kerala - </span>Periyar Wildlife Sanctuary.</p>
                <br />

                <p> <span className="font-weight">Ladakh - </span>Hemis National Park. <span className="font-weight">Uttarakhand - </span>Jim Corbett.</p>
                <br />

                <p className="font-weight">For the bird lovers list of paradise for birdwatching is furnished below</p>
                <br />
                <p className="font-weight">Bharatpur – Rajasthan, Chilka Lake – Odisha, Kumarakom - Kerala, Nal Sarovar –
                Gujarat, Salim Ali - Goa, Ranganathittu - Karnataka</p>
                <br />
            </section>
            <table className="table table-striped table-bordered border-secondary">
                    <th>
                        <center>TOUR COST INCLUDE</center>
                    </th>
                    <tbody>
                        <tr>
                            <td>
                                <h6 className="font-weight">ACCOMODATION: </h6>
                                In Deluxe Hotels at transfer points and Tent or Camp stay
(single/
two/ triple/ four sharing)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="font-weight">TRANSPORTATION:</h6><span className="font-weight">For couple / family:</span>Car – A/c<br />
                                <span className="font-weight">For group and scheduled tour:</span>Ac - luxury Bus, Tempo Traveller, Car (According to group size)<br />
                                <span className="font-weight">Note:</span> A/c in car and bus may not operate in hilly areas.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className="font-weight">FOOD:</h6>All meals - (Breakfast tea/ coffee, Lunch, Evening Snacks tea/coffee &amp; Dinner
along with 1 litre Water bottle per person)
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
                            *Any upgradation in airline , vehicle, hotel or hotel room category.
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
    </>
}