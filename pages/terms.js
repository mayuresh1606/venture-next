import Navbar from "../components/Navbar"
export default function Terms(){
    return <>
        <Navbar />
        <div className="my-container">
        <div className="terms-condition">
                <h3>Terms & Conditions</h3>
            </div>
            <hr />
            <div className="all-terms">
                <ul>
                    <li>On request by the tour participant, to travel by higher class of Air, we assure to
                    arrange for the same. But if we cannot fulfill the request, the tour participant will
                    have to travel, as per the ticket arranged, according to initial request. Non-
                    availability of higher class cannot be a reason to cancel the tour.</li>
                    <li>Participants, must read and follow all the points mentioned in TOUR COST
                    INCLUDE and TOUR COST DOES NOT INCLUDE.</li>
                    <li>Venture World has the right 
                        <ul>
                            <li>To change / modify the route of the tour or cancel the tour if it is deemed advisable or necessary due to natural
                            calamities or
                            unavoidable circumstances.</li>
                            <li>To ask the participant to leave the tour immediately If he/she misbehaves
                            causing inconvenience or annoyance to any tour participant or causes
                            damage to the property. There will not be any compensation, whatsoever,
                            in such cases.</li>
                            {/* <li>To ask the participant to leave the tour immediately If he/she misbehaves causing inconvenience or annoyance to any tour
                            participant or causes damage to the property. There will not be any compensation, whatsoever, in such cases.</li> */}
                        </ul>
                    </li>
                    <li>Venture World
                        <ul>
                            <li>Shall in no circumstances whatsoever be liable for any damage/ loss caused to the tour participant due to reasons beyond
                            the control of the organizers.</li>
                            <li>Shall not be liable for the loss / damage of the baggage and personal belongings of the tour participant it is his/her
                            responsibility.</li>
                            <li>Strictly prohibits smoking and drinking alcohol during bus journey / in the dining halls.</li>
                            <li>Is co-ordinating and conducting camps, tours, yatra and picnics under its brand name. We are tour organizers only. We do
                            not control or operate any airline, railway, coach company or shipping, transport, hotel, restaurant or any other
                            facility/ services advertised. We are not responsible for any delay, deficiency or improper services provided by the
                            outside agencies.</li>
                            <li>Does not have any control on schedules of opening and closing timings of the tourist attractions.</li>
                            <li>Shall not be responsible for the tour participant, before joining the group, it will be sole responsibility of the tour
                            participant to join the group at the right time and place.</li>
                        </ul>
                    </li>
                    <li>For the road travel, vehicles will be arranged according to group size.</li>
                    <li>There will be separate rules and regulations for different packages. These will be
                    supplement to the main terms and conditions and will be informed to participant
                    at the time of booking.</li>
                    <li>We may arrange shooting during tours, the tour participants shall have no objection to the shot material being used as
                    publicity material (stills / video) with the participant’s permission.</li>
                    <li>Package tour maximum liability of the Venture World is to the package cost only.</li>
                    <li>Tour participants are requested to collect their rail/ air tickets, tour itinerary and list of necessary things to be
                    carried from the Venture World office, only after making the full payment.</li>
                    <li className="font-weight">Any disputes arising in respect of the tour shall be subject to Thane Jurisdiction.</li>
                </ul>
                <div className="note">
                <h4>Note</h4>
                <ul>
                    {/* <li>Train Travel by A/C coach/air will be arranged with additional cost for Standerd & Deluxe Package.</li>
                    <li>Air Travel will be arranged with additional cost for Premium Package.</li>
                    <li>Doctor throughout the tour will be complimentary subject to availability & minimum student strength of 60</li>
                    <li>Detailed Tour ltinerary & Name of the Hotels will be provided after selecting the tour.</li> */}
                    <li>Detailed Tour itinerary &amp; Name of the Hotels will be provided after selecting the tour.</li>
                </ul>
            </div>
            </div>
    </div>
    </>
}