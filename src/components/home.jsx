
import React from 'react'

import Neostat from '../assets/blacklogo.jpg'
import Neosta from '../assets/blacklab.jpg'
import './home.css'
import Footer from './footer'
import { Link } from 'react-router-dom'
import { FaSun } from 'react-icons/fa'
function Home(){
    return(
    <>
    <div className="modes">
        <FaSun/>
    </div>
    <div className='home'>
        <section>
            <nav>
        <ul>
            <li className='h'><Link to="/">Home</Link></li>
            <li> <Link to="/Services">Services</Link> </li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </nav>
    <div className="logo-container">
        <img src={Neostat} alt="" />
    </div>
        <h2>neostat laboratories</h2>
        <h3>trusted diagnostics</h3>
        <div className="image1">
            <img src={Neosta} alt="" />
        </div>
            <h2>Welcome to Neostat Laboratories</h2>
        <p>
            Neostat Laboratories is a trusted diagnostic partner commited to delivering precise and reliable results.<br/>
            Our facility is equiped with modern technology and operated by qualified professionals dedicated to maintaining
            the highest standards of accuracy and efficiency.
        </p>
        <p>We understand tha timely diagnosis is essential to effective treatment, that`s why we prioritize fast turn around times
            without compromising quality.
        </p>
        </section>
        <div className="Image-container">
                <img src={Neosta} alt="" />
        </div>
    </div>
    <Footer/>
    </>
    )
}
export default Home;