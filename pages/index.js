import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link"
import {useEffect, useState} from "react"
import Navbar from '../components/Navbar'
import axios from "axios"
import { connectToDatabase } from '../lib/mongodb'

export default function Home({isConnected}) {
  const [tourHeads, setTourHeads] = useState([]);
  useEffect( async() => {
        const {data} = await axios.get("/api/tourhead");
        const {tour:myTour} = data
        setTourHeads(myTour)
            // adding limit to package names inside individual package
        let currentYearDOM = document.querySelector(".current-year")
        let tourInfo = document.body.querySelectorAll('.tour-info')
        let packageName = document.body.querySelectorAll('.package-name')
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

        async function initSlideShow(slideshow) {
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
  return (
    <>
    <main>
  <Head>
    <meta name="description" content="Home page of ventureworld.in" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Venture World</title>
  </Head>
  {/* <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'></Script> */}
    <Navbar />
    {isConnected && <>
    <div className="my-container">
        <center><h5 className="venture-slogan">VENTURE WORLDS GLORIOUS 25 YEARS OF TOURING EXPERINCE</h5></center>
        

        <div id="slideshow-example" data-component="slideshow">
          <div role="list">
            <div className="slide banner-img">
              <img className="ban-img" src="/images/main5.jpg" alt="err"/>
            </div>
            <div className="slide banner-img">
              <img className="ban-img" src="/images/main7.jpg" alt="err"/>
            </div>
            <div className="slide banner-img">
              <img className="ban-img" src="/images/main4.jpeg" alt="err"/>
            </div>
            <div className="slide banner-img">
              <img className="ban-img" src="/images/main.jpeg" alt="err"/>
            </div>
            <div className="slide banner-img">
              <img className="ban-img" src="/images/main2.jpg" alt="err"/>
            </div>
            <div className="slide banner-img">
              <img className="ban-img" src="/images/main9.jpeg" alt="err"/>
            </div>
            <div className="slide banner-img">
              <img className="ban-img" src="/images/main3.jpeg" alt="err"/>
            </div>
          </div>
        </div>
        <div className="imp-pack-top">
          <div className="left-boxes">
            <a className="tour-links" href="#tours-tables"><div className="box box-bg-yellow">
              <p className="box-heading">Couple</p>
            </div></a>
            <a className="tour-links" href="#tours-tables"><div className="box box-bg-pink">
              <p className="box-heading">HoneyMoon Special</p>
            </div></a>
            <a className="tour-links" href="#tours-tables"><div className="box box-bg-green">
              <p className="box-heading">Family</p>
            </div></a>
          </div>
          <div className="right-box">
            <table className="table table-bordered border-secondary group-table">
              <thead>
                <th className='group-cd' colSpan={2}>
                  <center className="darkblue-color font-weight"><a href="#tours-tables" className="darkblue-color tour-links group-text">GROUP</a></center>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td><p className="box-heading"><a href="#tours-tables" className="tour-links maroon-color">STUDENTS</a></p></td>
                  <td><p className="box-heading"><a href="#tours-tables" className="tour-links maroon-color">CORPORATE</a></p></td>
                </tr>
                <tr>
                  <td><p className="box-heading"><a href="#tours-tables" className="tour-links maroon-color">SOCIETIES</a></p></td>
                  <td><p className="box-heading"><a href="#tours-tables" className="tour-links maroon-color">LADIES EXCLUSIVE</a></p></td>
                </tr>
                <tr>
                  <td><p className="box-heading"><a href="#tours-tables" className="tour-links maroon-color">SENIOR CITIZENS</a></p></td>
                  <td><p className="box-heading"><a href="#tours-tables" className="tour-links maroon-color">BUDDIES</a></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-tables">
          <div className="imp-packs">
            <section id="tours-tables">
              <h3 className="imp-heading"></h3>
              <hr />
              { tourHeads && tourHeads.map((tour, index) => {
              return <table key={tour._id} className="table table-striped table-light table-responsive">
                <thead>
                  <tr>
                    <th className="table-bordered" scope="col">Destination</th>
                    <th scope="col">Starting @</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>
                        <span className={`font-weight ${index % 2 === 0 ? "blue-color" :"purple-color" }`}>{tour.tourName} –</span> <br/>
                        <p>{tour.tourDescription}</p>
                      </td>
                      <td className="font-weight">{tour.startingPrice} per person</td>
                      <td><Link href={`${tour.tourName}`}>Click for more
                        details</Link></td>
                    </tr>
                  </tbody>
                </table>
                  }) }
                  {/* <tr>
                    <td>
                      <span className="font-weight purple-color">MAJESTIC KARNATAKA –</span> <br/>
                      BENGALURU / MYSURU / OOTY (TN) / HASSAN / COORG /
                      CHIKMAGALUR / CHITRADURGA / HAMPI / BADAMI /
                      MANGALURU / GOA
                    </td>
                    <td className="font-weight">Rs.16,750/- per person</td>
                    <td><a href="karnataka">Click for more
                      details</a></td>
                    </tr> */}
            </section>
            
          </div>
          <div className="aside-tables">
            <Link style={{"textDecoration": "none"}} href="/educational">
              <div className="box-2">
                <p className="box-heading">Educational Tours</p>
              </div>
            </Link>
            <Link style={{"textDecoration": "none"}} href="/adventure">
              <div className="box-2 box-bg-darkgreen">
                <p className="box-heading">Adventure Camp</p>
              </div>
            </Link>
            <Link style={{"textDecoration": "none"}} href="/pilgrimage">
              <div className="box-2 box-bg-red-orange">
                <p className="box-heading">Pilgrimage</p>
              </div>
            </Link>
          </div>
        </div>
        <hr />
        <p className="venture-description blue-color">Welcome to the Venture World to enjoy great getaways. Whilst assuring you the
          lifetime holiday experience & take you
          to
          places dreams are made of. We aim to provide you a complete holiday package.
        
          Discover nature&quot;s hidden treasure with Venture World in the high picturesque and majestic mountains, the snow covered
          glaciers, the golden deserts and the awe inspiring sand dunes, get a closer look at the flora and fauna in their
          natural
          environment and enjoy natures bounty. Relax and enjoy the water sports at the sun kissed beaches. Widen your horizons
          by
          visiting historical monuments and places and rediscover the varied rich culture, tradition, eternal costumes and
          vibrant
          colors spread all over the world.</p>
    </div>
    <footer>
      <div className="footer-details">
        <div className="copyright">
          <span>Copyright <span className="current-year">2012</span> | Venture World Tours & Travels.</span>
        </div>
        <div className="dev-details">
          <span className="dev">Developed by - Mayuresh Ovhal</span><br />
          <span className="dev">mayureshovhal16@gmail.com</span>
        </div>
      </div>
    </footer></>
    }
    </main>
</>
  )
}

export async function getStaticProps(context) {
  try {
    const {db} = await connectToDatabase();
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
