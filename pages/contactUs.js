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
                <h4>Venture World</h4>
                <p>CHHAJED HOUSE, JAIL GROUND, NEAR OLD R. T. O., THANE - 400601.</p>
                
                <p>Mobile: 9869850055, <br/> 9833993740<br/></p>
                <p>Email Id : <span className="email-id">yashodhar_raj@yahoo.com</span></p>
            </div>
            <div className="address-location">
                <center>
                <iframe className="map-venture" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.951769998783!2d72.98059441490297!3d19.197308787018414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaddfddeb7ab1bc05!2zMTnCsDExJzUwLjMiTiA3MsKwNTgnNTguMCJF!5e0!3m2!1sen!2sin!4v1655273016000!5m2!1sen!2sin" width="40vw" height="40vh" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
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