import { Navbar } from '../Components/navbar';
import { Button, Container, Input, Panel, SelectPicker, VStack } from 'rsuite';
import React, { useEffect, useState } from 'react';
import { Footer } from '../Components/footer';
import Bg3 from '../assets/bg3.jpg';
import Enqbg from '../assets/enqbg2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Enquiry = () => {
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
                    <h3 style={{ fontSize: "28px", margin: "10px 0" }}>Enquiry</h3>
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
        { label: "HMT PACKAGE BOILER", value: "HMT PACKAGE BOILER" },
        { label: "FULLY WET BACK BOILER", value: "FULLY WET BACK BOILER" },
        { label: "DRY BACK BOILER", value: "DRY BACK BOILER" },
        { label: "HUSK FIRED BOILER", value: "HUSK FIRED BOILER" },
        { label: "OIL AND GAS FIRED", value: "OIL AND GAS FIRED" },
        { label: "BIOMASS", value: "BIOMASS" },
        { label: "ELECTRICAL BOILER", value: "ELECTRICAL BOILER" },
        { label: "WATER WALL AND SHELL TYPE BOILER", value: "WATER WALL AND SHELL TYPE BOILER" },
        { label: "BI DRUM BOILER", value: "BI DRUM BOILER" },
        { label: "COAL FIRED BOILER", value: "COAL FIRED BOILER" },
        { label: "VCT BOILER", value: "VCT BOILER" },
        { label: "FBC BOILER", value: "FBC BOILER" },
        { label: "WASTE HEAT RECOVERY", value: "WASTE HEAT RECOVERY" },
    ];
   
    const data1 = [
        { label: "HMT PACKAGE BOILER", value: "HMT PACKAGE BOILER" },
        { label: "WASTE HEAT RECOVERY", value: "WASTE HEAT RECOVERY" },
        { label: "CUSTOM", value: "CUSTOM" },
    ];
    const [formValues, setFormValues] = useState({
        name: '',
        contact: '',
        email: '',
        organisation: '',
        boilerType: '',
        capacity: '',
        customCapacity: '',
        fuel: '',
        address: '',
        details: '',
    });

    const [showCustomInput, setShowCustomInput] = useState(false);
    const [customValue, setCustomValue] = useState('');

    const handleSelectChange = (value) => {
        if (value === "CUSTOM") {
            setShowCustomInput(true);
        } else {
            setShowCustomInput(false);
            setCustomValue(''); // Clear custom value when not needed
        }
    };

    return (
        <Panel header="Ennaar Energy Systems - Ennaar Boilers">
            <div className="row mb-4">
                <div className="col-md-6 mb-3">
                    <h3 className='text-primary'>Purchase Enquiry Form</h3>
                    <h4>We’re Here to Assist You</h4>
                    <h6 style={{ lineHeight: 2 }}>Have a question or need a customized boiler solution? Fill out the form and our experts will reach out to you promptly:</h6>
                    <p>
                        <span style={{ fontStyle: 'italic' }}>Submit your enquiry today, and let us provide you with a solution tailored to your industrial needs.</span>
                        <span> Let me know if you'd like a specific form design or additional features!</span>
                    </p>
                    <img src={Enqbg} alt="Enquiry Background" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <Input id="name" type="text" size="lg" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contact">Contact Number</label>
                        <Input id="contact" type="number" size="lg" placeholder="Contact Number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">E-Mail</label>
                        <Input id="email" type="email" size="lg" placeholder="E-Mail" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="organisation">Organisation</label>
                        <Input id="organisation" type="text" size="lg" placeholder="Organisation" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="boiler-type">Type of Boiler</label>
                        <SelectPicker label='Boiler Type' id="boiler-type" size="lg" data={data} style={{ width: "100%" }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="capacity">Capacity</label>
                        <SelectPicker label='Capacity' id="capacity" size="lg" data={data1} style={{ width: "100%" }} onChange={handleSelectChange} />
                    </div>

                    {showCustomInput && (
                        <div className="mb-3">
                            <label htmlFor="custom-capacity">Custom Capacity</label>
                            <Input id="custom-capacity" type="text" size="lg" placeholder="Enter Custom Capacity" value={customValue} onChange={(value) => setCustomValue(value)} />
                        </div>
                    )}

                    <div className="mb-3">
                        <label htmlFor="fuel">Fuel to be Used</label>
                        <Input id="fuel" type="text" size="lg" placeholder="Fuel to be Used" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address">Address</label>
                        <Input id="address" as="textarea" size="lg" rows={3} placeholder="Address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="details">Any Other Details</label>
                        <Input id="details" as="textarea" size="lg" rows={3} placeholder="Any Other Details" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-end">
                    <Button color="green" appearance="primary">
                        <FontAwesomeIcon icon={faPaperPlane} className='me-2' />
                        Submit
                    </Button>
                </div>
            </div>
        </Panel>
    );
};

export default Enquiry;
