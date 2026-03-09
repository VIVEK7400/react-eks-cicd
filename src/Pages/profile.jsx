import React, { useEffect, useState } from 'react';
import Bg1 from '../assets/bg1.jpg';
import P1 from '../assets/p1.png';
import Img1 from '../assets/boiler-spairs.jpg';
import Profilepic1 from '../assets/working-desk.png';
import { Navbar } from '../Components/navbar';
import { Footer } from '../Components/footer';
import { Panel } from 'rsuite';
import { AutoSizer } from 'rsuite/esm/internals/Windowing';

export default function Profile() {

    const [scrollY, setScrollY] = useState(0);

    // Update scroll position on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY); // Track scroll position
        };

        window.addEventListener("scroll", handleScroll); // Add scroll listener

        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
        };
    }, []);

    // Calculate the background position based on scroll position
    const parallaxStyle = {
        backgroundImage: `url(${Bg1})`,
        backgroundPosition: `center ${scrollY * 0.5}px`, // Parallax effect
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "30vh",
        display: "flex",
        alignItems: "center", // Center the text vertically
        justifyContent: "center", // Center the text horizontally
        position: "relative",
        overflow: "hidden", // Prevent content overflow
        borderBottom: "5px solid #1520A6"
    };

    // Overlay style for black opacity
    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.41)", // Black overlay with opacity
        zIndex: 1, // Ensures overlay is above the image
    };

    // Text style
    const textStyle = {
        color: "white",
        textAlign: "left",
        zIndex: 2, // Ensures text is above the overlay
        position: "relative",
        padding: "0 20px", // Add padding for responsiveness
    };

    return (
        <>
            <Navbar />
            {/* Parallax Image Section */}
            <div className="parallax-image mt-5" style={parallaxStyle}>
                {/* Black Overlay */}
                <div style={overlayStyle} />
                {/* Text Content */}
                <div style={textStyle}>
                    <p style={{ fontSize: "18px", marginTop: "50px" }}></p>
                    <h3 style={{ fontSize: "32px", margin: "10px 0" }}>
                        Profile
                        {/* Company Name */}
                    </h3>
                    <p style={{ fontSize: "20px", margin: "0" }}>
                        ~ Solution For Steam and Power ~
                    </p>
                    {/* <div className="btn-group mt-3" role="group" aria-label="Basic example">
                        <button type="button" onClick={onSubmit} className="btn btn-outline-warning">Enquiry</button>
                        <button type="button" className="btn btn-outline-info">Learn More</button>
                    </div> */}
                </div>
            </div>

            <div className='container mt-5'>
                
                    <div className='row'>

                        <h3><b style={{ color: 'purple' }}>Company Profile</b></h3>
                        <div className='col-sm-7'>
                            <p style={{ lineHeight: 2, textAlign: 'justify' }}>
                                <span><b>ENNAAR ENERGY SYSTEMS</b></span> was founded in 2006 by <span className='text-primary'><b>Mr. RAJAMANICKAM N.</b></span>, whose visionary leadership has propelled the company to remarkable heights.
                                Under his guidance, ENNAAR has established itself as one of the leading  manufacturers of high-performance industrial steam boilers in Tamil Nadu.
                                At ENNAAR, we provide a comprehensive range of products, services, and solutions for global power generation, cogeneration, industrial, refinery,
                                petrochemical, biomass, and waste-to-energy markets, etc...
                            </p>
                            <p style={{ lineHeight: 2, textAlign: 'justify' }}>
                                Our greatest strength lies in our team of highly experienced engineers,
                                who possess the expertise to address any challenges in boilers or power plants.
                                We specialize in offering a comprehensive range of industrial steam boilers,
                                including boiler capacity enhancement, FBC systems, industrial furnaces,
                                and heat recovery units. These solutions are available in various specifications
                                to cater to the diverse requirements of industrial applications.

                                Our range of industrial steam boilers is renowned for its consistent performance, high efficiency, and long service life.
                            </p>
                        </div>
                        <div className='col-sm-5'>
                            <center><img src={Profilepic1} alt="" width={'80%'} /></center>
                        </div>

                        <h3 style={{ color: 'purple' }} >Expanding Global Horizons with ENNAAR Steam Boilers</h3>
                        <p style={{ lineHeight: 2, textAlign: 'justify' }}>
                            Our boundaries extend far beyond India, reflecting our commitment to delivering world-class industrial steam boilers globally. ENNAAR steam boilers are not only a preferred choice within India but have also earned recognition and trust across international markets.

                            With a steadfast focus on quality, innovation, and customer satisfaction, we have consistently expanded our global footprint by exporting an increasing number of boilers to neighboring countries, including <span><b>MALAYSIA, KENYA, SAUDI ARABIA, SRI LANKA, SOUTH AFRICA, BANGLADESH, TANZANIA and NIGERIA. </b></span> 
                            Our products are designed to meet diverse industrial needs, offering reliable performance and efficiency that align with international standards.

                            This growing demand for ENNAAR steam boilers is a testament to our expertise, dedication, and the enduring relationships we have built with clients worldwide. We continue to strive for excellence, aiming to reach new horizons in the global market.
                        </p>

                    </div>
                
            </div>


           

            {/* SPARES & SERVICE */}

            <div className='container mb-5'>
                <h3 style={{color:'purple'}}>Spares & Service</h3>
                <div className='row g-3'>
                    <div className='col-sm-8 g-3' style={{ lineHeight: 2 }}>
                        <div className=''>
                            <p style={{textAlign:'justify'}}>
                                We are engaged in offering a wide range of Boiler Spares, which is reckoned for its superior quality.
                                Precisely engineered and quality approved, the boiler spares made by us can be availed in different specifications, sizes and capacities.
                                To suit the exact demands of our esteemed customers, we manufacture these spares in customised specifications.
                            </p>
                            <ul>
                                <li>We are engaged in providing a wide range of solution such as boiler capacity enhancement, retrofit of boilers, Performance study and energy audit.</li>
                                <li>Boiler pressure parts (Superheater tubes, Economiser tubes, Evaporator tubes, etc.)</li>
                                <li>Non pressure parts (Ducting, Airheater tubes, Expansion joints, etc.)</li>
                                <li>Fans (Impellor, blades, casing, performance study / energy audit)</li>
                                <li>ESP / Bag filter (Collecting electrodes, bags & Performance study / Energy audit)</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className=''>
                            <center><img src={Img1} alt="" width={380} style={{ borderRadius: 0 }} /></center>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

