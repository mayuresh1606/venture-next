import Navbar from "../components/Navbar"
export default function Services(){
    return <>
        <Navbar />
        <div className="my-container">
        <div className="heading"><h2>
            Services we Offer</h2>
        </div>
        <hr />
        <div className="serving-packages">
            <p>Individual, couple, family, group, educational institutes, corporate, industries, inbound & outbound tourist.</p>
        </div>
        <div className="bookings">
            <h3>Bookings</h3>
            <p>Accommodation – hotels & resorts (budget, standard, deluxe, luxury & star category)</p>
            <p>We specialize in Hotel / resort bookings for individual, couple, family, group, educational institutes, corporates,
            industries, inbound & outbound tourist. Hotel category can be budget, standard, deluxe, luxury & star according to
            traveler’s choice. All hotels provide comfort & valued service.</p>
            <p className="contact-enquire">Contact us for Hotel booking / Enquiry.</p>
        </div>
        <div className="transportation">
            <h3>Transportation – Air (Domestic & International)</h3>
            <p>Car(2 or 4 seater)/Bus hire a/c & non a/c (tempo traveller, mini bus, semi – luxury, luxury, volvo etc. Daily out station route bus) Cruise
            (River, Backwater, House boat, Package cruise domestic & international)</p>
        </div>
        <div className="package-tour">
            <h3>PACKAGE TOUR</h3>
            <ul>
                <li>Domestic & international (Sight seeing / Fun tour, Excursion / Study tour, Corporate / Industrial tour, Special
                Honeymoon Tour)</li>
                <li>Short Escape.</li>
                <li>Daily Package.</li>
                <li>Bharat Bharaman Program Tour</li>
                <li>Yatra / Pilgrimage tour.</li>
                <li>Adventure Camps.</li>
                <li>Jungle Saffari.</li>
                <li>Picnic, conferences & workshops.</li>
            </ul>
        </div>
        <div className="world-tours">
            <h4>AMAZING WORLD TOUR</h4>
            <p>FRANCE, ENGLAND, HOLLAND, BELGIUM, GERMANY, ITALY, GREECE, ROME, SWITZERALND, AUSTRIA, SPAIN, SCOTLAND, PORTUGAL, EGYPT,
            DUBAI, U.S.A., CANADA, AUSTRAILIA, NEWZEALAND, CARRABEAN&apos;S SOUTH AFRICA, KENYA, SINGAPORE, THAILAND, MALASIYA, HONG
            KONG, CHINA, JAPAN, TIBET, NEPAL, BHUTAN, SRILANKA etc.</p>
        </div>
    </div>
    </>
}