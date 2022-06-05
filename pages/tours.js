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
            {tourHeads && tourHeads.map((tour) => {
            return <a className="tour-links" href={`#${tour.tourName}`}><span className="tour-package-names">{tour.tourName}</span></a>
            })
            }
            <hr />
            {tourHeads && tourHeads.map((tour) => {
            return <section id={tour.tourName}>
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
            }
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