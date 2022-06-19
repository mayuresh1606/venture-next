import Navbar from "../components/Navbar"
import Link from "next/link"
import axios from "axios";
import { useEffect, useState } from "react"
export default function Tours(){
    const [tourHeads, setTourHeads] = useState([]);
    useEffect(async() => {
        const {data} = await axios.get("/api/tourhead");
        const {tour:myTour} = data
        setTourHeads(myTour)
    }, []);
    return <>
        <Navbar />
        <div className="my-container">
        <div className="tours">
            <h3>Tours</h3>
            <p>Venture World organizes and arrange Domestic & international tours (Sightseeing / Fun
            tour, Excursion / Study tour, Conference / Business / Industrial tour, Special
            Honeymoon Tour) for couples, family, buddies, corporates, students, societies.
            Exclusive special tours for – ladies / senior citizens.</p>
            {/* {tourHeads && tourHeads.map((tour) => {
            return <a key={tour._id} className="tour-links" href={`#${tour.tourName}`}><span className="tour-package-names">{tour.tourName}</span></a>
            })
            } */}
            <hr />
            <h3 className="font-weight">Exclusive PACKAGE TOUR</h3>
            <ul>
                <li><p><span className="font-weight">Short Escape</span> - for 2 to 3 days</p></li>
                <li><p><span className="font-weight">Daily Package</span> - regular tour on any day throughout the year.</p></li>
                <li><p><span className="font-weight">Bharat Bharaman</span> - Program Tour and scheduled tour</p></li>
                <li><p><span className="font-weight">Yatra / Pilgrimage tour</span> - for Temple Darshan in various states</p></li>
                <li><p><span className="font-weight">Adventure Camps / Activities</span> - on Mountains, Deserts, Jungles, Water source’s
                and arial.</p></li>
                <li><p><span className="font-weight">Jungle Saffari / Camp</span> - in various amazing National Parks.</p></li>
                <li><p><span className="font-weight">Picnic, conferences & workshops</span> - in hotels / resorts / sites with natural
                environments.</p></li>
            </ul>
            <br />
            <p>The above package is organized in various destinations mentioned below they are
            popular and <span className="grey-highlight">attract visitors from far and beyond</span> for their <span className="grey-highlight">landscapes, hill-stations,
            Ghats, forests, plantations, coast, beaches, waterfalls, rivers, lakes, historically
            significant monuments, pilgrimage, outdoor activities, cuisines, shopping and all the
            bounties of nature.</span></p>
            
            <h4 className="blue-color">FABULOUS HIMACHAL –</h4>
            <p>SHIMLA / MANALI / DHARAMSHALA / DALHOUSIE /PALAMPUR / PRAGPUR /
            CHANDIGARH (U.T) / AMRITSAR (PB)</p>
            <br />
            
            <h4 className="purple-color">MAJESTIC KARNATAKA –</h4>
            <p>BENGALURU / MYSURU / OOTY (TN) / HASSAN / COORG / CHIKMAGALUR /
            CHITRADURGA / HAMPI / BADAMI / MANGALURU / GOA</p>
            <p className="font-weight">For the above destination our guest can click and view on this site a detailed
            itinerary / tour details / tour cost and book for the same.</p>
            <p className="font-weight">For the destinations mentioned below we request our guest to contact us
            (Venture World) for detailed itinerary / tour details / tour cost and do the
            booking.</p>
            <br />

            <h4 className="red-color">MARVELOUS MAHARASHTRA –</h4>
            <p>MUMBAI / ELEPHANTA CAVES / KARNALA / ALIBAUG / KASHID /
            HARIHARESHWAR / RATNAGIRI / GANAPATIPULE / MALVAN / AMBOLI /
            MATHERAN / KHANDALA / LONAVALA / PUNE / PANCHGANI / MAHABALESHWAR /
            MALSHEJ GHAT / JAWHAR / IGATPURI / NASHIK / KOROLI / TORANMAL /
            TADOBA / CHIKHALDARA / AURANGABAD / AJANTA CAVES / ELLORA CAVES /
            KOLHAPUR / SHOLAPUR</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Goa, Karnataka and Gujarat can also be combined</p>
            <br />

            <h4 className="lightblue-color">DELIGHTFUL GOA –</h4>
            <p>TITO'S STREET / ANJUNA BEACH / CALANGUTE BEACH / DUDHSAGAR
            WATERFALLS / FORT AGUADA / BAGA BEACH / CANDOLIM BEACH / SINQUERIM
            BEACH / ANJUNA FLEA MARKET / GRAND ISLAND / DIVAR ISLAND / MANDOVI
            RIVER CRUISE / PALOLEM BEACH / CHAPORA RIVER / CHAPORA FORT /
            VAGATOR BEACH / BUTTERFLY BEACH / BOM JESUS BASILICA / ARAMBOL BEACH
            / DONA PAULA BEACH / ASHVEM BEACH / GALGIBAGA BEACH / BENAULIM BEACH
            / MOBOR BEACH / COLVA BEACH / BAMBOLIM BEACH / BONDLA WILDLIFE
            SANCTUARY / SPICE PLANTATIONS/ VERNA SPRINGS / TODO FALLS / ARVALEM
            WATERFALL / LAMGAU CAVES / CORJUEM FORT / MANGUESHI TEMPLE / BATS
            ISLAND / FORT TIRACOL</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Maharashtra and Karnataka can also be combined</p>
            <br />

            <h4 className="lightblue-color">VIBRANT GUJARAT–</h4>
            <p>AHMEDABAD / RANN OF KUTCH / SUN TEMPLE, MODHERA / AMBAJI / LOTHAL /
            RANI KI VAV, PATAN / VADODARA / STATUE OF UNITY, KEVADIA / CHAMPANER-
            PAVAGADH / SABARKANTHA / DWARKA / SOMNATH / GIR NATIONAL PARK /
            JUNAGADH / GIRNAR HILLS / PALITANA / SURAT / SAPUTARA / SILVASSA</p>
            <p>Tour can also be conducted along with <span className="lightblue-color">DADRA & NAGAR HAVELI AND DAMAN &
            DIU</span></p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Maharashtra and Rajasthan can also be combined</p>
            <br />

            <h4 className="brown-color">GLORIOUS RAJASTHAN –</h4>
            <p>JAIPUR / UDAIPUR / CHITTORGARH / RANAKPUR / NATHDWARA /
            KUMBHALGARH / MOUNT ABU / JODHPUR / BHARATPUR / JAISALMER /
            BIKANER / PUSHKAR / AJMER / RANTHAMBORE / KOTA / BUNDI</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Gujarat, Uttar Pradesh and Delhi can also be combined</p>
            <br />

            <h4 className="yellow-color">GLOWING UTTAR PRADESH –</h4>
            <p>MATHURA / VRINDAVAN / AYODHYA / VARANASI / PRAYAGRAJ / JHANSI /
            SARNATH / KUSHINAGAR / GORAKHPUR / HASTINAPUR / CHITRAKOOT / AGRA
            / FATEHPUR SIKRI / LUCKNOW /</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Rajasthan, Madhya Pradesh, Uttar Pradesh, Uttarakhand and Delhi can also be combined</p>
            <br />

            <h4 className="purple-color">ENCHANTING UTTARAKHAND –</h4>
            <p>RISHIKESH / HARIDWAR / DEHRADUN / MUSSOORIE / NAINITAL / RANIKHET / JIM
            CORBETT / ALMORA / AULI / CHAKRATA / CHOPTA / LANSDOWNE / VALLEY OF
            FLOWERS and HEMKUND SAHIB / CHARDHAM (YAMNOTRI, GANGOTRI,
            BADRINATH and KEDARNATH) / GAUMUKH / MUKTESHWAR / UTTARKASHI /
            CHAMOLI / PITHORAGARH / MUNSIYARI / JOSHIMATH / GUPTAKASHI /
            RUDRAPRAYAG / DEVPRAYAG</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Uttar Pradesh and Delhi can also be combined</p>
            <br />

            <h4 className="red-color">MAGNIFICENT MADHYA PRADESH –</h4>
            <p>INDORE / UJJAIN / MAHESHWAR / OMKARESHWAR /AMARKANTAK / MANDU /
            BHOPAL / SANCHI / BHIMBETKA / PACHMARHI / JABALPUR / CHANDERI /
            KHAJURAHO / PANNA / SHIVPURI / SATNA / BANDHAVGARH / PENCH / KANHA /
            UDAYAGIRI CAVES / GWALIOR / ORCHHA</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Maharashtra, Gujarat, Rajasthan and Uttar Pradesh can also be combined</p>
            <br />

            <h4 className="lightblue-color">EXCITING KERALA –</h4>
            <p>COCHIN / ALLEPPEY / KUMARAKOM / THEKKADY / WAYANAD / MUNNAR /
            KOVALAM / KOLLAM / VAGAMON / BEKAL / GURUVAYUR /
            THIRUVANANTHAPURAM / THRISSUR</p>
            <p>Tour can also be conducted along with <span className="lightblue-color">LAKSHADWEEP</span></p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Karnataka and Tamil Nadu can also be combined</p>
            <br />

            <h4 className="purple-color">SPLENDID TAMIL NADU –</h4>
            <p>CHENNAI / KANCHIPURAM / KANYAKUMARI / MADURAI / RAMESHWARAM /
            KODAIKANAL / MAHABALIPURAM / OOTY</p>
            <p>Tour can also be conducted along with <span className="purple-color">PUDUCHERRY</span></p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Karnataka and Kerala can also be combined</p>
            <br />

            <h4 className="green-color">FANTASTIC ANDHRA PRADESH –</h4>
            <p>VISAKHAPATNAM / MANTRALAYAM / TIRUPATI / AHOBILAM / LEPAKSHI / ARAKU
            VALLEY / SRIKALAHASTI / SRISAILAM</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Telangana and Karnataka can also be combined</p>
            <br />

            <h4 className="darkblue-color">DAZZLING TELANGANA –</h4>
            <p>HYDERABAD / RAMOJI FILM CITY / GOLCONDA FORT</p>
            <p style={{padding:"0 5%"}}><span className="operationalFrom">Note:</span> Some of the tour destinations in Andhra Pradesh can also be combined</p>
            <br />

            <h4 className="yellow-color">BLISSFUL ODISHA –</h4>
            <p>BHUBANESWAR / PURI / KONARK / CUTTACK / GOPALPUR / CHILIKA LAKE</p>
            <br />

            <h4 className="grey-color">FANTASTIC JAMMU - KASHMIR</h4>
            <p>VAISHNO DEVI / PATNITOP / GULMARG · SONMARG / PAHALGAM / SRINAGAR</p>
            <br />

            <h4 className="grey-color">ENORMOUS LADAKH</h4>
            <p>PANGONG TSO LAKE / THIKSEY MONASTERY / KHARDUNG-LA PASS / MARKHA
            VALLEY / NUBRA VALLEY / TSO MORIRI LAKE / HEMIS NATIONAL PARK / DISKIT
            MONASTERY / CHANGLA PASS / DRAS WAR MEMORIAL / CONFLUENCE OF THE
            INDUS AND ZANSKAR RIVERS / ZANSKAR VALLEY / LAMAYURU / KARGIL /
            MAGNETIC HILL / SHANTI STUPA</p>
            <br />

            <h4 className="brown-color">CHARMING NORTH EAST –</h4>
            <p>SIKKIM / DARJEELING / NATHULA PASS / KAZIRANGA NATIONAL PARK /
            TSOMGO LAKE / CHERRAPUNJI / TAWANG MONASTERY / ZIRO VALLEY / TEA
            GARDENS / SHILLONG / GUWAHATI</p>
            <br />

            <h4 className="lightblue-color">AMAZING ANDAMAN –</h4>
            <p>RADHANAGAR BEACH / MAKRUZZ / MAHATMA GANDHI MARINE NATIONAL PARK
            / JAPANESE BUNKERS / CHATHAM SAW MILL / CORBYN&#39;S COVE / SAMUDRIKA /
            HAVELOCK ISLAND / BARREN ISLAND / CELLULAR JAIL / CHIDIYA TAPU / ROSS
            PARK / SADDLE PEAK / RED SKIN ISLAND / BUTLER BAY BEACH / DHANINALAH
            ISLAND / WANDOOR BEACH / JOLLY BUOY ISLAND / MOUNT HARRIET NATIONAL
            MANGROVE / NATURE WALKAWAY / WHITE SURF WATERFALL / LONG ISLAND /
            ANTHROPOLOGICAL MUSEUM</p>
            <br />
            {/* {tourHeads && tourHeads.map((tour) => {
            return <section key={tour._id} id={tour.tourName}>
                <div className="venture-info">
                    <div className="tour-img">
                        <img className="tour-img-bordered" src={`${tour.tourImageURL || "/images/himachal/manali.jpg"}`} alt="err" />
                    </div>
                    <div className="tour-info">
                        <h3>{tour.tourName}</h3>
                        <hr />
                        <p>{tour.tourInfo}</p>
                        <span className="match-width package-name">{tour.tourDescription}</span>
                        <br/>
                        <button className="btn btn-info"><Link href={`/${tour.tourName}`}>Click to know more</Link></button>
                    </div>
                </div>
                <br />
            </section>
            })
            } */}
            {/* <section id="karnataka">
                <div className="venture-info">
                    <div className="tour-img">
                        <img className="tour-img-bordered" src="/images/karnataka/coorg.jpg" alt="err" />
                    </div>
                    <div className="tour-info">
                        <h3>Majestic Karnataka</h3>
                        <hr />
                        <p>Located in the midst of Western Ghats, Deccan Plateau and Kannad Coast, Karnataka is home to various forests, beaches, waterfalls, coffee plantations, lakes and all the bounties of nature. The state also boasts of historically significant monuments and structures that attract visitors from far and beyond.</p>
                        <span className="match-width package-name">BENGALURU, MYSURU, OOTY, HASSAN, COORG, MANGULURU, CHIKMAGALUR, UDUPI, GOA</span>
                        <br/>
                        <button className="btn btn-info"><Link href="/karnataka">Click to know more</Link></button>
                    </div>
                </div>
                <br />
            </section> */}
        </div>
    </div>
    </>
}