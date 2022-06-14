import Link from "next/link";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Skiing from "../components/Skiing"

export default function Adventure(){
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
    <Navbar />
        <div className="my-container font-size-small">
            <center className="font-weight">THRILLING ADVENTURE</center>
            <div id="slideshow-example" data-component="slideshow">
                <div role="list">
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/adventure/rappeling.jpg" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/adventure/adventure-3.png" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/adventure/rock-climbing.bmp" alt="err"/>
                    </div>
                    <div className="slide banner-img">
                    <img className="ban-img" src="/images/adventure/adventure-side.jpeg" alt="err"/>
                    </div>
                </div>
            </div>
            <br />
            <table className="table table-bordered border-secondary">
                <tbody>
                    <tr className="text-center font-weight">
                        <td width={"25%"}>TREKKING</td>
                        <td width={"25%"}>CAMPING</td>
                        <td width={"25%"}><a className="new-content" style={{color:"blue"}} href="#skiing">SKIING</a></td>
                        <td width={"25%"}>JUNGLE SAFARI</td>
                    </tr>
                </tbody>
            </table>
            <p>For adventurous zeal - Camp, Trek and enjoy various activities on Snow, Desert and
                High Mountains.</p>
            <p><span className="font-weight">ACTIVITIES CONDUCTED</span> – Trekking, Hiking, Expedition, Skiing, Adventure Fitness,
                Rappelling, Zip Lining, Rock Climbing, Monkey Crawling, River Crossing, Commando
                Bridge, Rafting, Water Sports, Paragliding, Safari, Air Rifle / Pistol Shooting, Archery,
                Field Work, First Aid Training, Adventure Games, Personality Development, Night Sky
                Watching, Slideshow and Lectures and more.</p>
                <center className="font-weight">Trekking, Camping and Adventure Activities Destinations</center>
            <table className="table table-bordered border-secondary">
                    <thead>
                        <tr>
                            <td>No. of
                            Days</td>
                            <td>Destination</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td width={"20%"}>One Day</td>
                            <td width={"80%"}> <center className="underline">MAHARASHTRA</center><span className="underline">Transfer Point: Mumbai / Pune</span> - Bhimashankar, Nane Ghat,
                            Harishchandragad. </td>
                        </tr>
                        <tr className="text-center">
                            <td width={"20%"}>2 Days</td>
                            <td width={"80%"}> <center className="underline">MAHARASHTRA</center><span className="underline">Transfer Point: Mumbai / Pune</span> - Bhimashankar, Matheran,
                            Harishchandragad, Malsej Ghat, Kalsubai, Bhandardara, Igatpuri,
                            Lonavala. </td>
                        </tr>
                        <tr className="text-center">
                            <td width={"20%"}>2 to 5 Days</td>
                            <td width={"80%"}> <center className="underline">MAHARASHTRA</center><span className="underline">Transfer Point: Mumbai / Pune</span> - Bhimashankar, Matheran, Malsej Ghat,
                            Bhandardara, Igatpuri, Lonavala, Mahabaleshwar, Saputara (Gujarat).
                            GOA – Dudsagar </td>
                        </tr>
                        <tr className="text-center">
                            <td width={"20%"}>5 to 7 Days</td>
                            <td width={"80%"}><span className="underline">RAJASTHAN</span> - <span className="underline">Pick up and Drop - Ahmedabad / Udaipur</span> - Mount Abu <br />
                            <span className="underline">KARNATAKA</span> - <span className="underline">Pick up and Drop - Bangalore / Mangalore</span> - Coorg, Chikmagalur. <br />
                            <span className="underline">KERALA</span> - <span className="underline">Pick up and Drop - Cochin</span> - Wayanad, Munnar. <br />
                            <span className="underline">TAMILNADU</span> - <span className="underline">Pick up and Drop - Bangalore / Coimbatore</span> - Ooty,
                            Kodaikanal.<br />
                            <span className="underline">MADHYA PRADESH</span> - <span className="underline">Pick up and Drop - Bhopal / Jabalpur</span>Pachmarhi<br />
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td width={"20%"}>7 Days and above</td>
                            <td width={"80%"}> <center className="underline">HIMACHAL PRADESH</center><br /><center className="underline">Pick up and Drop - Chandigarh / Delhi</center><br /> 
                            <span className="underline">Transfer Point: Manali / Kullu</span> - Jogini Waterfall, Bijli Mahadev, Patalsu,
                            Rani sui lake, Bhrigu Lake, Chandratal / Hampta pass, Chandrakani /
                            Malana, Beas Kund, Deo Tibba.<br />

                            <span className="underline">Transfer Point: Manikaran / Kasol</span> - Kheer Ganga, Tosh, Chalal, Rasol,
                            Buddhaban, Rudranag, Grahan, Kalga, Kutla Glacier.<br />

                            <span className="underline">Transfer Point: Dharamshala / Dalhousie / Chamba</span> - Kareri Lake,
                            Kalatop, Indrahar, Minkiani, Drakund, Donali, Triund, Jalsu Pass, Kugti
                            Pass.<br />
                            
                            <span className="underline">Transfer Point: Shimla / Solan / Narkanda</span> - Hatu Peak, Churdhar Peak,
                            Kuppar - Bughyal, Shali Tibba, Karol Tibba, Jalori Pass,<br /><span className="underline">Sarahan  -
                            Sangla -  Rampur.</span> <br />

                            <center className="underline">UTTARAKHAND</center>
                            <center className="underline">Pick up and Drop - Delhi</center>
                            <span className="underline">Transfer Point: Dehradun / Mussoorie</span> - Kedarkantha, Har Ki Dun, Nag
                            Tibba.<br />
                            <span className="underline">Transfer Point: Rudraprayag</span> - Chopta, Chandrashila, Deoria Tal,
                            Kartikswami, Rudranath.<br />
                            <span className="underline">Transfer Point: Joshimath</span> - Valley of flowers / Hemkund Sahib, Kuari
                            Pass, Gorson Bugyal.<br />
                            <span className="underline">Transfer Point: Uttarkashi</span> - Dayara Bugyal, Dodital.<br />
                            <span className="underline">Transfer Point: Kathgodam </span>- Brahmatal.<br />

                            <center className="underline">DARJEELING &amp; SIKKIM</center>
                            Tonglu, Gorkhey / Sandakphu / Phalut, Chatakpur, Singalila Ridge,
                            Kamala Falls, Rohini, Bamunpukhuri Jungle, Purbikhola, Lhaba Tarum
                            Tsachu, Varsey Dzongri, Barsey, Mulkarkha Lake, Phoktey Dara.
                            </td>
                        </tr>
                    </tbody>
            </table>
            <br />
            <table className="table table-bordered border-secondary text-center">
                <tbody>
                    <tr>
                        <td>No. of Days</td>
                        <td colSpan={3} style={{padding:0}}>
                            <table className="table-bordered boder-secondary adventure-table">
                                <tbody>
                                    <tr><td colSpan={2}>Trekking and Adventure Camp Cost per person</td></tr>
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
                            1 day
                        </td>
                        <td>
                            Rs.4,500/-
                        </td>
                        <td>
                            Rs.3,700/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2 days 1 night
                        </td>
                        <td>
                            Rs.9,300/-
                        </td>
                        <td>
                            Rs.8,400/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3 days 2 night
                        </td>
                        <td>
                            Rs.14,000/-
                        </td>
                        <td>
                            Rs.12,600/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4 days 3 night
                        </td>
                        <td>
                            Rs.18,600/-
                        </td>
                        <td>
                            Rs.16,800/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5 days 4 night
                        </td>
                        <td>
                            Rs.23,250/-                        
                        </td>
                        <td>
                            Rs.21,000/-                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6 days 5 night
                        </td>
                        <td>
                            Rs.27,900/-
                        </td>
                        <td>
                            Rs.25,200/-                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            7 days 6 night
                        </td>
                        <td>
                            Rs.32,550/-
                        </td>
                        <td>
                            Rs.29,400/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            8 days 7 night
                        </td>
                        <td>
                            Rs.37,200/-
                        </td>
                        <td>
                            Rs.33,600/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            9 days 8 night
                        </td>
                        <td>
                            Rs.41,850/-
                        </td>
                        <td>
                            Rs.37,800/-
                        </td>
                    </tr>
                    <tr>
                        <td>
                            10 days 9 night
                        </td>
                        <td>
                            Rs.46,500/-
                        </td>
                        <td>
                            Rs.42,000/-
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>The above rates exclude Air / train fare. Please refer below tour cost include</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <Skiing />
        </div>
        
    </>
}