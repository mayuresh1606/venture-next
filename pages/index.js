import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Document from 'next/document'
import "bootstrap/dist/css/bootstrap.min.css"
import {useEffect} from "react"
export default function Home() {
  useEffect(() => {
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
  return (
    <>
  <Head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Venture World</title>
  </Head>
  {/* <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'></Script> */}
    <header>
      <nav class="navbar">
        <div class="nav-contents">
          <div style={{"textAlign":"center"}} class="site-logo">
            <h1 class="venture-logo">VENTURE WORLD</h1>
            <h6 class="venture-logo-desc">Tour, Trek, Picnic, Pilgrimage</h6>
          </div>
          <div class="site-navigations">
            <ul class="ul">
              <li class="ul-background">
                <a class="nav-link darkblue-color" aria-current="page" href="{% url 'index' %}">Home</a>
              </li>
              <li class="ul-background">
                <a class="nav-link darkblue-color" href="{% url 'tours' %}">Tours</a>
              </li>
              <li class="ul-background">
                <a class="nav-link darkblue-color" href="{% url 'services' %}">Services</a>
              </li>
              <li class="ul-background">
                <a class="nav-link darkblue-color" href="{% url 'contact-us' %}">Contact Us</a>
              </li>
              <li class="ul-background">
                <a class="nav-link darkblue-color" href="{% url 'terms' %}">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="my-container">
        <center><h5 class="venture-slogan">VENTURE WORLDS GLORIOUS 25 YEARS OF TOURING EXPERINCE</h5></center>
        

        <div id="slideshow-example" data-component="slideshow">
          <div role="list">
            <div class="slide banner-img">
              <img class="ban-img" src="/1banner.jpg" alt="err"/>
            </div>
            <div class="slide banner-img">
              <img class="ban-img" src="/3banner.jpg" alt="err"/>
            </div>
            <div class="slide banner-img">
              <img class="ban-img" src="/7banner.jpg" alt="err"/>
            </div>
          </div>
        </div>
        <div class="imp-pack-top">
          <div class="left-boxes">
            <a class="tour-links" href="#tours-tables"><div class="box box-bg-yellow">
              <p class="box-heading">Couple</p>
            </div></a>
            <a class="tour-links" href="#tours-tables"><div class="box box-bg-pink">
              <p class="box-heading">HoneyMoon Special</p>
            </div></a>
            <a class="tour-links" href="#tours-tables"><div class="box box-bg-green">
              <p class="box-heading">Family</p>
            </div></a>
          </div>
          <div class="right-box">
            <table class="table table-bordered group-table border-secondary">
              <thead class='thead-dark'>
                <th colSpan={2}>
                  <center class="darkblue-color font-weight"><a href="#tours-tables" class="darkblue-color tour-links">GROUP</a></center>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td><p class="box-heading"><a href="#tours-tables" class="tour-links maroon-color">STUDENTS</a></p></td>
                  <td><p class="box-heading"><a href="#tours-tables" class="tour-links maroon-color">CORPORATE</a></p></td>
                </tr>
                <tr>
                  <td><p class="box-heading"><a href="#tours-tables" class="tour-links maroon-color">SOCIETIES</a></p></td>
                  <td><p class="box-heading"><a href="#tours-tables" class="tour-links maroon-color">LADIES EXCLUSIVE</a></p></td>
                </tr>
                <tr>
                  <td><p class="box-heading"><a href="#tours-tables" class="tour-links maroon-color">SENIOR CITIZENS</a></p></td>
                  <td><p class="box-heading"><a href="#tours-tables" class="tour-links maroon-color">BUDDIES</a></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="my-tables">
          <div class="imp-packs">
            <section id="tours-tables">
              <h3 class="imp-heading"></h3>
              <hr />
              <table class="table table-striped table-light table-responsive">
                <thead>
                  <tr>
                    <th class="table-bordered" scope="col">Destination</th>
                    <th scope="col">Starting @</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="font-weight blue-color">FABULOUS HIMACHAL –</span> <br/>
                      SHIMLA / MANALI / DHARAMSHALA / DALHOUSIE /
                      PALAMPUR / PRAGPUR / CHANDIGARH (U.T) / AMRITSAR (PB)
                    </td>
                    <td class="font-weight">Rs.17,750/- per person</td>
                    <td><a href="/himachal">Click for more
                      details</a></td>
                    </tr>
                  <tr>
                    <td>
                      <span class="font-weight purple-color">MAJESTIC KARNATAKA –</span> <br/>
                      BENGALURU / MYSURU / OOTY (TN) / HASSAN / COORG /
                      CHIKMAGALUR / CHITRADURGA / HAMPI / BADAMI /
                      MANGALURU / GOA
                    </td>
                    <td class="font-weight">Rs.16,750/- per person</td>
                    <td><a href="karnataka">Click for more
                      details</a></td>
                    </tr>
                  </tbody>
                </table>
            </section>
            
          </div>
          <div class="aside-tables">
            <a style={{"textDecoration": "none"}} href="{% url 'educational_tours' %}">
              <div class="box-2">
                <p class="box-heading">Educational Tours</p>
              </div>
            </a>
            <a style={{"textDecoration": "none"}} href="/adventure">
              <div class="box-2 box-bg-darkgreen">
                <p class="box-heading">Adventure Camp</p>
              </div>
            </a>
            <a style={{"textDecoration": "none"}} href="{% url 'tour_details' 'pilgrimage' %}">
              <div class="box-2 box-bg-red-orange">
                <p class="box-heading">Pilgrimage</p>
              </div>
            </a>
          </div>
        </div>
        <hr />
        <p class="venture-description blue-color">Welcome to the Venture World to enjoy great getaways. Whilst assuring you the
          lifetime holiday experience & take you
          to
          places dreams are made of. We aim to provide you a complete holiday package.
        
          Discover nature’s hidden treasure with venture world in the high picturesque and majestic mountains, the snow covered
          glaciers, the golden deserts and the awe inspiring sand dunes, get a closer look at the flora and fauna in their
          natural
          environment and enjoy natures bounty. Relax and enjoy the water sports at the sun kissed beaches. Widen your horizons
          by
          visiting historical monuments and places and rediscover the varied rich culture, tradition, eternal costumes and
          vibrant
          colors spread all over the world.</p>
    </div>
    <footer>
      <div class="footer-details">
        <div class="copyright">
          <span>Copyright <span class="current-year">2012</span> | Venture World Tours & Travels.</span>
        </div>
        <div class="dev-details">
          <span class="dev">Developed by - Mayuresh Ovhal</span><br />
          <span class="dev">mayureshovhal16@gmail.com</span>
        </div>
      </div>
    </footer>
</>
  )
}
