

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css'
import './contact.css'
import Conta from '../assets/lab.jpeg'
import Footer from './footer.jsx'
import { faWhatsapp, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <>
    <section>
            <h2>Contact Us</h2>
            <h3>We are Here To Assist You</h3>
            <p>
                At Neostat Laboratories, we are committed to providing timely support and clear communication.Whether you would like to 
                inquire about our sevices,confirm test availability, or seek further information, our team is ready to assist you.<br/>
                please feel free to reach out through any of the channels below: 
            </p>
            <div className="num1">
                <h3>Send Us A Message</h3>
                <div className="box">
                    <div className="frm">
                        <form action="">
                    <div className="input-field">
                        <input type="text" placeholder="Your name e.g Shermin"  disabled/>
                    </div>
                    <div className="input-field">
                        <input type="email" name="" id="" placeholder="your email e.g exapmle@gmail.com" disabled/>
                    </div>
                    <div className="input-field">
                        <input type="tel" name="" id="" placeholder="your phone number" disabled/>
                    </div>
                    <div className="input-field">
                       <select name="" id="">
                        <option value="" disabled>....Select an option...</option>
                        <option value="">general Inquiry</option>
                        <option value="">Book an Appointment</option>
                        <option value="">Book a Test</option>
                        <option value="">Customer Support</option>
                         <option value="">Request Result</option>
                          <option value="">Request Collaboration</option>
                       </select>
                    </div>
                    <div className="input-field">
                        <textarea name="" id="" placeholder='write a message' disabled></textarea>
                    </div>
                    <div className="batn"><button type="submit" disabled>submit</button></div>
                </form>
                    </div>
                    <div className="image-container2">
                        <div className="image">
                            <img src={Conta} alt="Neostat Lab"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="num2">
                <h3>Visit Our Facility</h3>
                <p>
                    You are welcome to visit our facility for testing services or inquiries during operating hours.<br/>Our team will guide you 
                    through the process professionally and efficiently.
                </p>
            </div>
            <div className="num3">
                <h3>Business Hours</h3>
                <p>Monday to Friday:: 8:00 AM - 5:00 PM <br/>
                    Saturday:: 8:00 AM - 1:00 PM
                </p>
            </div>
            <h3>Contact Information</h3>
            <div className="num4">
                <div className="social-links">
                    <a href=""className='fb'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
                <div className="other-link">
                    <p>phone:: 0102 720 800 </p>
                    <p> Message:: 0790 207 019</p>
                </div>
            </div>
            <p>
                All inquiries and patient information shared with Neostat Laboratories are handled with strict confidentiality and in accordance with
                professional data protection standards.
            </p>
        </section>
        <Footer/>
        </>
        )
}
export default Contact;