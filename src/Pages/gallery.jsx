import { Navbar } from '../Components/navbar';
import React, { useEffect, useState } from 'react';
import { Footer } from '../Components/footer';
import Bg3 from '../assets/bg2.jpg';
import { p1, p2, p3, p4, p5, p6, gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10, gp11, gp12, gp13, gp14, gp15 } from '../Elements/imports';


export default function Gallery() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const parallaxStyle = {
        backgroundImage: `url(${Bg3})`,
        backgroundPosition: `center ${scrollY * 0.5}px`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "5px solid #1520A6",
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.41)",
        zIndex: 1,
    };

    const textStyle = {
        color: "white",
        textAlign: "center", // Changed for better centering on smaller screens
        zIndex: 2,
        position: "relative",
        padding: "10px", // Adjusted padding
    };

    return (
        <>
            <Navbar />
            <div className="parallax-image mt-5" style={parallaxStyle}>
                <div style={overlayStyle} />
                <div style={textStyle}>
                    <p style={{ fontSize: "18px", marginTop: "20px" }}></p>
                    <h3 style={{ fontSize: "28px", margin: "10px 0" }}>Gallery </h3>
                    <p style={{ fontSize: "16px", margin: "0" }}>~ Solution For Steam and Power ~</p>
                </div>
            </div>
            {/* <div className='container mt-4'><h3 className='text-warning'>Gallery - Ennaar Energy Systems</h3></div> */}
            <div className='card bg-warning' style={{ marginTop: '0%' }}>
                <div className='container-fluid mt-4 mb-4' style={{ width: '90%' }}>
                    <div className='mt-2'>
                        <div className='row g-3'>
                            <div className='col-sm-8 mb-4'>
                                <div className='row g-3'>
                                    {/* Repeat the image card structure for all images */}
                                    {[p1, p2, p3, p4, p5, p6].map((image, index) => (
                                        <div className='col-sm-4' key={index}>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <center><img src={image} alt="" className="img-fluid" /></center>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <h4 style={{ color: 'darkblue' }}><b>Gallery of Ennaar Energy Systems</b></h4>
                                <h6 style={{ lineHeight: 1.5, textAlign: 'justify' }}>
                                    Welcome to the Gallery section of Ennaar Energy Systems, where you can explore the expertise and craftsmanship that define our legacy as a leading boiler manufacturing company. Through this collection, we provide a comprehensive view of our state-of-the-art facilities, high-quality production processes, and industry-leading innovations.
                                </h6>
                                <h4 className='mt-4'>What You’ll Find in Our Gallery:</h4>

                                <ul>
                                    <li><span><b>Modern Infrastructure:</b></span><br />
                                        <p>A showcase of our advanced manufacturing units equipped with cutting-edge technology to ensure precision and quality in every product.</p>
                                    </li>
                                    <li><span><b>Team Excellence:</b></span><br />
                                        <p>Meet the dedicated professionals and skilled workforce behind our success, working tirelessly to deliver customized solutions.</p>
                                    </li>
                                    <li><span><b>Innovative Engineering:</b></span><br />
                                        <p>Witness our robust design and development processes that cater to diverse industrial needs and sustainability standards.</p>
                                    </li>
                                    <li><span><b>Client Installations:</b></span><br />
                                        <p>A glimpse into successful installations and operational boilers across various industries, reflecting our commitment to performance and reliability.</p>
                                    </li>
                                    <p>Explore our gallery to see how Ennaar Energy Systems brings together technology, innovation, and excellence to provide energy solutions that stand the test of time.</p>
                                </ul>
                            </div>
                        </div>

                        {/* Displaying the second set of images */}
                        <div className='row g-3'>
                            {[gp1, gp2, gp3, gp4, gp5, gp6, gp7, gp8, gp9, gp10, gp11, gp12, gp13, gp14, gp15].map((image, index) => (
                                <div className='col-sm-3' key={index}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <center><img src={image} alt="" className="img-fluid" /></center>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};




