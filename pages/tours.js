import Navbar from "../components/Navbar"
import Link from "next/link"
export default function Tours(){
    return <>
        <Navbar />
        <div className="my-container">
        <div className="tours">
            <h3>Tours</h3>
            <a className="tour-links" href="#himachal"><span className="tour-package-names">Fabulous Himachal</span></a>
            <a className="tour-links" href="#karnataka"><span className="tour-package-names">Majestic Karnataka</span></a>
            <hr />
            <section id="himachal">
                <div className="venture-info">
                    <div className="tour-img">
                        <img className="tour-img-bordered" src="/images/himachal/manali.jpg" alt="err" />
                    </div>
                    <div className="tour-info">
                        <h3>Fabulous Himachal</h3>
                        <hr />
                        <p>This is popularly renowned for its Himalayan landscapes and popular hill-stations. Many outdoor activities such as rock climbing, mountain biking, paragliding, ice-skating, trekking, rafting, and heli-skiing are popular tourist attractions in Himachal Pradesh.</p>
                        <span className="match-width package-name">MANALI, CHANDIGARH, MANIKARAN, SHIMLA, DHARAMSHALA, DALHOUSIE, PRAGPUR, PALAMPUR, AMRITSAR</span>
                        <br/>
                        <button className="btn btn-info"><Link href="/himachal">Click to know more</Link></button>
                    </div>
                </div>
                <br />
            </section>
            <section id="karnataka">
                <div className="venture-info">
                    <div className="tour-img">
                        <img className="tour-img-bordered" src="/images/karnataka/mysore.jpg" alt="err" />
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
            </section>
        </div>
    </div>
    </>
}