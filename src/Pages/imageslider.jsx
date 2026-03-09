import React, { useEffect, useState } from 'react';
import Img1 from '../assets/boiler.JPG';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'rsuite';
import { gp1, gp2, gp3, gp4 } from '../Elements/imports';

export function ImageSlider() {
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
        backgroundImage: `url(${Img1})`,
        backgroundPosition: `center ${scrollY * 0.5}px`, // Parallax effect
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "70vh",
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
        backgroundColor: "rgba(0, 0, 0, 0.64)", // Black overlay with opacity
        zIndex: 1, // Ensures overlay is above the image
    };

    // Text style
    const textStyle = {
        color: "white",
        textAlign: "center",
        zIndex: 2, // Ensures text is above the overlay
        position: "relative",
        padding: "0 20px", // Add padding for responsiveness
    };
    const Navigate = useNavigate();
    function onSubmit() {
        Navigate('/enquiry')
    }
    return (
        <div>
            {/* Parallax Image Section */}
            <div className="parallax-image" style={parallaxStyle}>
                {/* Black Overlay */}
                <div style={overlayStyle} />
                {/* Text Content */}
                <div style={textStyle}>
                    <p style={{ fontSize: "18px", marginTop: "50px" }}>Since 2006</p>
                    <h3 style={{ fontSize: "32px", margin: "10px 0" }}>
                        Ennaar Energy Systems
                        {/* Company Name */}
                    </h3>
                    <p style={{ fontSize: "20px", margin: "0" }}>
                        ~ Solution For Steam and Power ~
                    </p>
                    <div className="btn-group mt-3" role="group" aria-label="Basic example">
                        <button type="button" onClick={onSubmit} className="btn btn-outline-warning">Enquiry</button>
                        <button type="button" className="btn btn-outline-info">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Autoplay() {
    const [placement, setPlacement] = React.useState('bottom');
    const [shape, setShape] = React.useState('bar');
    return (
        <>
            <Carousel
                autoplay
                effect="" // Enables fade animation
                className="custom-slider"
                key={`${placement}.${shape}`}
                placement={placement}
                shape={shape}
                style={{ height: '700px'}}
            >
                <div
                    style={{
                        position: 'relative',
                        backgroundImage: `url(${Img1})`,
                        backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with opacity
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '20px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <h1>Ennaar Boilers</h1>
                        <p>
                            This is some sample text over the image. You can customize this content to match your
                            design requirements.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        position: 'relative',
                        backgroundImage: `url(${gp1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with opacity
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '20px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <h1>Another Title</h1>
                        <p>
                            Add a description for the second image here. Adjust the text styling as needed.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        position: 'relative',
                        backgroundImage: `url(${gp2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with opacity
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '20px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <h1>Another Title</h1>
                        <p>
                            Add a description for the second image here. Adjust the text styling as needed.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        position: 'relative',
                        backgroundImage: `url(${gp4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black with opacity
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '20px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <h1>Another Title</h1>
                        <p>
                            Add a description for the second image here. Adjust the text styling as needed.
                        </p>
                    </div>
                </div>
            </Carousel>

        </>
    )
}

export default Autoplay