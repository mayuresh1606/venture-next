import Navbar from "../components/Navbar"
export default function Contact(){
    return <>
        <Navbar />
        <div className="my-container">
        <div className="contact-Us">
            <h3>Contact Us</h3>
        </div>
        <hr />
        {/* {% if request.method == "POST" %} */}
        {/* {% else %} */}
        <div className="address">
            <div className="address-info">
                <h4>Venture World,
                Swagath Travels</h4>
                <p>CHHAJED HOUSE, JAIL GROUND, NEAR OLD R. T. O., THANE - 400601.</p>
                    
                <span>Tel:022-25474298</span>
                <p>Mobile: 9869850055, <br/> 9969829065 <br/>9869840335</p>
                <p>Email Id : <span className="email-id">yashodhar_raj@yahoo.com</span><br/> yash@ventureworld.org <br/> rajendra@ventureworld.org <br/> info@ventureworld.org</p>
            </div>
            <div className="address-location">
                <center>
                <iframe className="map-venture"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7767842473795!2d72.97602834621483!3d19.204949392817387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9396dd09805%3A0xe7e9ce84f716aebd!2sVenture%20World%2C%20Swagath%20Travels!5e0!3m2!1sen!2sin!4v1627115862443!5m2!1sen!2sin"
                    width="40vw" height="40vh" style={{border:0}} allowFullScreen="" loading="lazy">
                </iframe>
                </center>
            </div>
        </div>
        {/* <h4>Any queries? Write us below</h4>
        <hr /> */}
        {/* <form action="{% url 'contact-us' %}" method="POST">
            <div className="email-field">
                {/* {% csrf_token %} 
                <div className="senders-name">
                    <input type="text" name="senders-name" id="field" placeholder="Enter your name"/>
                </div>
                <div className="senders-email">
                    <input type="email" name="senders-email" id="field" placeholder="Enter your E-mail"/>
                </div>
            </div>
            <div className="message">
                <textarea name="message" id="field-2" cols="50" rows="10" placeholder="Write your query"/>
                <div className="btn submit-btn">
                    <input type="submit" id="submit-button" value="Send Email"/>
                </div>
            </div>
        </form> */}
        {/* {% endif %} */}
        </div>
    </>
}