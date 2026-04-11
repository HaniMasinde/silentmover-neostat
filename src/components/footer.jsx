
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import './footer.css'
function Footer(){
    return(
         <footer>
            <div className="columns">
                <div className="about">
                    <h2>Neostat Laboratories</h2>
                    <p>
                        Providing accurate, reliable and timely diagnostic services. Our laboratories are committed to maintaining the 
                        highest standards of quality, professionalism and confidentiality in all testing services.
                    </p>
                </div>
                <div className="links">
                    <h2>quick links</h2>
                    <Link to="">Home</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
                <div className="services">
                    <h2>Our Services</h2>
                        <ul>
                            <li>Immunoassays & Hormonal Profiles</li>
                            <li>Clinical Chemistry</li>
                            <li>Hematology</li>
                            <li>Parasitology</li>
                            <li>Microbiology & Culture</li>
                            <li>Histopathology & Cytology</li>
                            <li>Molecular Testing</li>
                            <li>Infectious Disease Testing</li>
                        </ul>
                </div>
                <div className="contact">
                <div className="all-links">
                    <div className="social">
                    <a href="" className='Fb'><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href=""className='Wh'><FontAwesomeIcon icon={faWhatsapp} /></a>
                </div>
                <div className="other-links-1">
                    <a href=""className='Li'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="" className='En'><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                </div>
                <div className="other-links">
                    <p>:: 0102 720 800</p>
                    <p> :: 0790 207 019</p>
                </div>
            <p>Website:www.neostatlab.co.ke</p>
                </div>
            </div>
            <div className="botom">
                <div className="copy">
                    <p>&copy;2026</p>
                    <p>Neostat Laboratories</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className="dev">
                    <p>Designed and Developed by:<b>Haningtone Omondi</b></p>
                    <div className="my-links">
                    <a href="https//wa.me/254794358892?text=Hello%20dev%20Haningtone"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    <a href=""><FontAwesomeIcon icon={faPhone} /></a>
                    <a href="https//facebook.com/profile.php?id=61557081552035" className='fb'><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
                </div>
            </div>
        </footer>
        )
}
export default Footer;