
import React from 'react';
import Footer from './footer';
import './services.css'
function About(){
    return(
        <>
    <section>
            <h2>About Us</h2>
            <div className="overview">
                <h3>Lab Overview</h3>
                <p>
                Neostat Laboratories is a trusted diagnostic service provider committed to delivering, accurate, reliable,
                and timely laboratory results.,<br/>We support clinicians, healthcare instituitions and patients with hogh  quality 
                diagnostic testing designed to aid informed medical decision-making.
            </p>
            <p>
                 Our Laboratory operates with modern diagnostic technology that follows strict control procedures to ensure precision at
                every stage of the testing process.<br/> We undrstand that accurate diagnosis forms the foundation of effective treatment,
                and we are dedicated to maintaining the highest professional and ethical standards in all our services.
            </p>
            </div>
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>
                        To provide accurate, timely,reliable diagnostic services that support quality healthcare delivery
                        while upholding the highest standards of professionalism,integrity and confidentiality.
                    </p>
                </div>
                <div className="vision">
                    <h3>Our Vission</h3>
                    <p>
                        To be a leading and trusted diagnostic laboratory recognized for excellence, innovation and commitment to improving
                         health outcomes. 
                    </p>
                </div>
                <div className="values">
                    <h3>Our Core Values</h3>
                    <div className='value'>
                        <h4>Integrity</h4>
                        <p>
                            We operate with honesty,transparency and ethical responsibility in all our processes
                        </p>
                    </div>
                    <div className='value'>
                        <h4>Accuracy</h4>
                        <p>
                            We are commited to delivering precise and dependable laboratory results.
                        </p>
                    </div>
                    <div className='value'>
                        <h4>Confidentiality</h4>
                        <p>
                            We safeguard patient information with strict data protection and privacy standards.
                        </p>
                    </div>
                    <div className='value'>
                        <h4>professionalism</h4>
                        <p>
                            Our team maintains the highest level of competence, accountablity and respect in every interaction.
                        </p>
                    </div>
                    <div className='value'>
                        <h4>Excellence</h4>
                        <p>
                            We continuously improve our systems, technology and services to meet evolving healthcare needs.
                        </p>
                    </div>
                </div>
                <div className="assurance">
                    <h3>Quality Assurance</h3>
                    <p>
                        Quality is at the core of our operations.We adhere to standardized laboratory procedures and implement rigorous
                        internal quality control measures to ensure consistency and accuracy.
                    </p>
                    <div className='proces'>
                        Our laboratory processes include :<br/>
                        <ul>
                            <li>Routine Equipment calibration and maintenance </li>
                            <li>Standard Operating Procedures.</li>
                            <li>Continuous staff training</li>
                            <li>Strict Specimen handling protocols</li>
                            <li>Internal quality control checks</li>
                        </ul>
                    </div>
                    <p>These measures ensure that every result issued meets professional diagnostic standards.</p>
                </div>
                <div className="team">
                    <h3>Our Team</h3>
                    <p>
                        Our laboratory is staffed by qualified and experienced professionals dedicated to delivering dependable diagnostic
                        services. Through continuous professional development and adherence to best laboratory practices,our team ensures 
                        efficiency,precision and excelence in service dellivery.
                    </p>
                </div>
                <div className="commitment">
                    <h3>Our Committment to the Community</h3>
                    <p>
                        Neostat Laboratories is committed to supporting healthcare providers and the community by promoting accesible and
                         dependable diagnostic services.<br/>We believe that quality laboratory testing plays a critical role in disease 
                         prevention, early detection and effective treatment.
                    </p>
                </div>
                <div className="why">
                    <h3>Why Choose Us</h3>
                    <div className='choose'>
                        <ul>
                            <li>Reliable and accurate results</li>
                            <li>Timely turnaround of tests</li>
                            <li>Professional and courteous service</li>
                            <li>Advanced diagnostic technology</li>
                            <li>Confidential handling of patient information</li>
                        </ul>
                    </div>
                </div>
        </section>
        <Footer/>
        </>
        )
}
export default About;