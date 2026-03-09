import { Navbar } from '../Components/navbar';
import { Button, Container, Input, Panel, SelectPicker, VStack } from 'rsuite';
import React, { useEffect, useState } from 'react';
import { Footer } from '../Components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'; // Example icon
import Bg3 from '../assets/bg4.jpg';
import Enqbg from '../assets/locationbg.png';
import Map from './Map';

const Contact = () => {
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
        textAlign: "center",
        zIndex: 2,
        position: "relative",
        padding: "10px",
    };

    return (
        <>
            <Navbar />
            <div className="parallax-image mt-5" style={parallaxStyle}>
                <div style={overlayStyle} />
                <div style={textStyle}>
                    <h3 style={{ fontSize: "28px", margin: "10px 0" }}>Contact Us</h3>
                    <p style={{ fontSize: "16px", margin: "0" }}>~ Solution For Steam and Power ~</p>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <EnquiryForm />
            </div>
            <Footer />
        </>
    );
};

export const EnquiryForm = () => {
    const data = [
        { label: "Industrial Boiler", value: "Industrial Boiler" },
        { label: "Domestic Boiler", value: "Domestic Boiler" },
    ];

    const inputStyle = {
        WebkitAppearance: 'none',
        MozAppearance: 'textfield',
        appearance: 'textfield',
        margin: 0,
    };

    return (
        <>
            <Panel header="Ennaar Energy Systems - Ennaar Boilers">
                <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                        <h2 className='text-primary'>Contact & Find Us</h2>
                        <h4>We’re here to assist you with your inquiries and support needs.</h4>
                        <h6 style={{ lineHeight: 2 }}>
                            At Ennaar Boilers, Reach out to us via phone or email, or visit us at our location.
                            We’re committed to providing prompt and professional service.
                        </h6>
                        <img src={Enqbg} alt="Enquiry Background" style={{ maxWidth: "70%", height: "auto" }} className='mt-3' />
                    </div>
                    <div className="col-md-6">
                        <div className="mt-3 mb-3">
                            <label htmlFor="name">Name</label>
                            <Input id="name" type="text" size="lg" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact">Mobile Number</label>
                            <Input id="contact" type="number" size="lg" placeholder="Contact Number" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">E-Mail</label>
                            <Input id="email" type="email" size="lg" placeholder="E-Mail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject">Subject</label>
                            <Input id="subject" type="text" size="lg" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message">Message</label>
                            <Input id="message" as="textarea" size="lg" rows={3} placeholder="Any Other Details" />
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button color="green" appearance="primary">
                                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </Panel>
            <div className='row'>
                <div className='col-sm-12'>
                    <Map_Function />
                </div>
            </div>
        </>
    );
};

export const Map_Function = () => <Map />;

export default Contact;
