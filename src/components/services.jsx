
import React from 'react'
import Hormonal from '../assets/hormonal.jpeg'
import clinical from '../assets/clinical.jpg'
import hematology from '../assets/hematology.jpg'
import parasite from '../assets/parasite.jpg'
import culture from '../assets/culture.jpg'
import histo from '../assets/histop.jpg'
import molecular from '../assets/molecular.jpg'
import infectious from '../assets/infectious.jpg'

import './services.css'

import Footer from './footer.jsx'


function Services(){
    return(
        <>
        <div className="servic">
            <h2> Our Services</h2>
            <p>
                Neostat Laboratories provide a wide range of diagnostic services designed to support accurate medical evaluations
                ,disease detection and treatment monitoring.<br/> Our laboratory isequipped with modern technology and guided by 
                strict quallity standards to ensure reliable results.
            </p>
            <div className="service">
                <h3>Immunoassays & Hormonal Profiles</h3>
                <p>
                    These are blood tests that check your hormonal levels.They help doctors understand issues related to thyroid problems,
                    fertility, pregnancy and other body changes.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={Hormonal} alt="Immunoassays"/>
                    </div>
                </div>
                <p>
                    At our facility, immunoassay testing is performed using modern laboratory equipment to measure hormonal levels accurately
                    .<br/>This tests help identify conditions related to the thyroid, fertility, pregnancy and other hormonal imbalances.
                    <p>
                        Our trained laboratory proffesionals ensure careful sample handling and precise analysis to support proper
                         diagnosis and treatment planning.
                    </p>
                </p>
            </div>
            <div className="service">
                <h3>Clinical Chemistry</h3>
                <p>
                    We conduct blood and body fluid tests to check how well organs such as the liver,kidney and heart are functioning
                    and to monitor conditions like diabetes and high cholesterol.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={clinical} alt="Clinical Chemistry"/>
                    </div>
                </div>
                <p>
                    At our facility, clinical tests are conducted to evaluate how well vital organs such as the liver, kidney and
                    heart are functioning.<br/>These tests are commonly used to monitor blood sugar levels,cholesterol and other other 
                    important health indicators.
                    <p>
                        We follow strict quality control procedures  to ensure reliable and consistent results for both routine health
                         checks and ongoing treatment monitoring.
                    </p>
                </p>
            </div>
            <div className="service">
                <h3>Hematology</h3>
                <p>
                    In Neostat Laboratories, we analyse blood samples to detect infections,anaemia,clotting problems, and other blood 
                    related conditions.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={hematology} alt="Hematology"/>
                    </div>
                </div>
                <p>
                    Hematology testing at our facility involves detailed analysis of blood cells to detect infections, anaemia,
                    clotting problems and other blood related conditions.
                    <p>
                        Our laboratory team uses standardized procedures and calibrated equipment to privide accurate results 
                        that assist healthcare providers in making informed decisions.
                    </p>
                </p>
            </div>
            <div className="service">
                <h3>Parasitology</h3>
                <p>
                    At our facility, we test blood and stool samples to identify parasitic infections such as malaria and intestinal
                     parasites.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={parasite} alt="parasitology"/>
                    </div>
                </div>
                <p>
                    This test helps detect parasites in blood or stool samples.Early detction is essential for proper treatment and
                     prevent complictions.
                     <p>
                        We caefully examine samples using approved laboratory techniques to ensure dependable results.
                     </p>
                </p>
            </div>
            <div className="service">
                <h3>Microbiology & Culture</h3>
                <p>
                    We identify bacteria and fungi that cause infections and perform tests to help deternime the most effective treatment
                    options.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={culture} alt="Microbiology"/>
                    </div>
                </div>
                <p>
                    Microbiology tests at our facility identifies bacteria and fungi resposnsible for infections. Through cullture and
                     sensitivity testing, we are able to deternime which medications are most effective for treatment.
                     <p>
                        This approach supports targeted therapy and reduces unneccesary antibiotic needs.
                     </p>
                </p>
            </div>
            <div className="service">
                <h3>histopathology & Cytology</h3>
                <p>
                    In Neostat Laboratories, we examine tissues and cells under microscope to detect abnormal changes, including
                     inflammation and cancers.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={histo} alt="Histopathology"/>
                    </div>
                </div>
                <p>
                    We focus on detailed microscopic examination of tissues and cells mainly  to investigate abnormal growths,
                    inflamatory conditions and cancerous changes.<br/>Early detecton through tissues and cell analysis significantly
                     improves treatment outcomes.
                     <p>
                        Our laboratory proffesionals handle specimens with precision and confidentiality to ensure accurate
                         diagnostic evaluation.
                     </p> 
                </p>
            </div>
            <div className="service">
                <h3>Molecular Testing</h3>
                <p>
                    We use advanced PCR technology to detect diseases at early stages by identifying genetic materials from viruses and 
                    bacterias.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={molecular} alt="Molecular testing"/>
                    </div>
                </div>
                <p>
                    Our facilty offers advanced molecular testing using PRC technology to detect diseases with high sensitivity
                    and accuracy.
                    <p>
                        This allows for early detection of infections by identifying genetic materials from viruses or bacterias,
                        supporting timely medical inventions.
                    </p>
                </p>
            </div>
            <div className="service">
                <h3>Infection Disease Testing</h3>
                <p>
                    We provide screening and diagnostic testing to detect communicable and infectious diseases for early treament
                    and preventions.
                </p>
                <div className="image-Container">
                    <div className="Image">
                        <img src={infectious} alt="infectious disease"/>
                    </div>
                </div>
                <p>
                    Infectious disease testing includes screening and diagnostic services for communicable illness. Early detection 
                    of infectious agents allows for prompt treatment, effective management,and preventon of disease transmission.
                </p>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Services;