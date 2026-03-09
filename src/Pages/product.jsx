import React, { useEffect, useState } from 'react';
import { Navbar } from '../Components/navbar';
import { Footer } from '../Components/footer';
import { Message, Nav, Panel, PanelGroup, Tag } from 'rsuite';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pro1, pro2, pro3, pro4, pro5, pro6, Bg3, Pattern } from '../Elements/imports';
import { Link } from 'react-router-dom';




function Product() {
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
                    <h3 style={{ fontSize: "28px", margin: "10px 0" }}>Product / Equipment</h3>
                    <p style={{ fontSize: "16px", margin: "0" }}>~ Solution For Steam and Power ~</p>
                </div>
            </div>
            <div className='container-fluid mt-3' style={{ width: "90%", color: 'purple' }}>
                <h3 style={{ textAlign: 'left' }}>Our Product</h3>
            </div>
            <div>
                <Productlist />
            </div>
            <div className='container-fluid mt-3' style={{ width: "90%", color: 'purple' }}>
                <h3 style={{ textAlign: 'left' }}>Industrial Equipment</h3>
            </div>
            <div>
                <EquipmentList />
            </div>
            {/* <div className='container'><DataTable/></div> */}
            <Footer />
        </>
    );
}

export default Product;

export const Productlist = () => {

    return (
        <>
            <div className='container-fluid' style={{ width: "90%" }}>
                <p style={{ lineHeight: 2, textAlign: 'justify' }}>
                    At Ennaar Energy Systems, we specialize in manufacturing high-quality steam boilers tailored to meet the diverse needs of our clients.
                    Our boilers are engineered for efficiency, durability, and sustainability, with capacities ranging from 100 kg/hr to 40 tons/hr,
                    capable of operating on all types of fuels. Whether for industrial or domestic applications, our boilers are designed to deliver optimal
                    performance while adhering to strict safety and environmental standards. Our expert team makes sure that the boiler is manufactured under professional engineers
                    supervision to meet our company’s quality standards to customers satisfaction.
                </p>

                <h4 style={{ color: 'blueviolet' }}>
                    What makes ENNAAR boilers special?
                </h4>

                <div className='row g-3 mb-2 mt-2'>
                    <div className='col-sm-2'>
                        <Message type="info">
                            <strong style={{ fontSize: '15px', fontStyle: 'italic', color: '#1E3E62' }}>Quantity</strong>
                        </Message>
                    </div>
                    <div className='col-sm-2'>
                        <Message type="success">
                            <strong style={{ fontSize: '15px', fontStyle: 'italic', color: '#1E5128' }}>Durability</strong>
                        </Message>
                    </div>
                    <div className='col-sm-2'>
                        <Message type="warning">
                            <strong style={{ fontSize: '15px', fontStyle: 'italic', color: '#D49B54' }}>Performance</strong>
                        </Message>
                    </div>
                    <div className='col-sm-2'>
                        <Message type="error">
                            <strong style={{ fontSize: '15px', fontStyle: 'italic', color: '#E95793' }}>Efficiency</strong>
                        </Message>
                    </div>
                    <div className='col-sm-2'>
                        <Message style={{ backgroundColor: '#D49B54', color: '#D49B54' }}>
                            <strong style={{ fontSize: '15px', fontStyle: 'italic' }}>Services</strong>
                        </Message>
                    </div>
                    <div className='col-sm-2'>
                        <Message style={{ backgroundColor: '#77B0AA' }}>
                            <strong style={{ fontSize: '15px', fontStyle: 'italic', color: '#135D66' }}>Reliability</strong>
                        </Message>
                    </div>
                    <div>
                        <h4 style={{ color: 'black' }}>Comprehensive Solutions for IBR Boilers and Industrial Equipment</h4>
                        <p style={{ lineHeight: 2, textAlign: 'justify' }}>
                            We specialize in the fabrication, design, and supply of IBR-certified boilers.
                            In addition, we offer a comprehensive range of industrial boiler equipment to meet diverse industry needs.
                            We are also dedicated to providing a wide variety of boiler-related products, ensuring end-to-end solutions for our customers.
                        </p>
                    </div>
                </div>
            </div >

            <div className='container-fluid mb-5 ' style={{ width: "90%" }}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" className="container">
                    <Row className='g-3'>
                        {/* Sidebar with Links */}
                        <Col sm={2}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Wood & Coal Fired Boiler
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Oil & Gas Fired Boiler
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link3">
                                    Biomass Fired Boiler
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link4">
                                    Husk Fired Boiler
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link5">
                                    Briquettes Fired Boiler
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link6">
                                    Hot Water/Air Generator
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                        {/* Tab Content */}
                        <Col sm={10}>
                            <Tab.Content >
                                <Tab.Pane eventKey="#link1">
                                    <div className='row g-3'>
                                        <div className='col-sm-3'>
                                            <div className='card'>
                                                <div className='card-body bg-warning'>
                                                    <Link to='/productdetails1'><center><img src={pro1} alt="" width={280} /></center></Link>
                                                </div>
                                                <div className='card-footer'>
                                                    Wast-Heat Recovery Boiler
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='card'>
                                                <div className='card-body bg-warning'>
                                                    <Link to='/productdetails2'><center><img src={pro2} alt="" width={310} /></center></Link>
                                                </div>
                                                <div className='card-footer'>
                                                    AFBC BOILER
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='card'>
                                                <div className='card-body bg-warning'>
                                                    <Link to='/productdetails3'><center><img src={pro3} alt="" width={310} /></center></Link>
                                                </div>
                                                <div className='card-footer'>
                                                    SOLID FUAL HMT BOILER
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='card'>
                                                <div className='card-body bg-warning'>
                                                    <Link to='/productdetails4'><center><img src={pro4} alt="" width={350} /></center></Link>
                                                </div>
                                                <div className='card-footer'>
                                                    RICEMILL BOILER
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='card'>
                                                <div className='card-body bg-warning'>
                                                    <Link to='/productdetails5'><center><img src={pro5} alt="" width={280} /></center></Link>
                                                </div>
                                                <div className='card-footer'>
                                                    RADIANT EXPERNAL FURNACE WATER WALL BOILER
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='card'>
                                                <div className='card-body bg-warning'>
                                                    <Link to='/productdetails6'><center><img src={pro6} alt="" width={280} /></center></Link>
                                                </div>
                                                <div className='card-footer'>
                                                    OIL/GAS FIRED BOILER
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    <h5>Tab Pane Content 2</h5>
                                    <p>This is the content for the second tab.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </>
    )
}

export const EquipmentList = () => {
    const equipmentData = [
        { title: 'Chimney', image: 'https://images.jdmagicbox.com/v2/comp/erode/c6/9999px424.x424.181219200849.x1c6/catalogue/ennaar-energy-systems-erode-machinery-manufacturers-zsu8hklegx.jpg' },
        { title: 'Feed water tank', image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/CW/AA/UK/5106758/puff-insulated-water-storage-tank-500x500.jpg' },
        { title: 'Dust collecting equipment', image: Pattern },
        { title: 'Water softener', image: Pattern },
        { title: 'Wet scrubber', image: Pattern },
        { title: 'Water treatment plant', image: Pattern },
        { title: 'Hot water generator', image: Pattern },
        { title: 'Flue gas ducting', image: Pattern },
        { title: 'Erection of steam and condensate pipe line', image: Pattern },
    ];

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with transparency
        zIndex: 1, // Place the overlay above the background
    };

    const contentStyle = {
        position: 'relative', // Position above the overlay
        zIndex: 2, // Ensure text is above the overlay
    };

    return (
        <>
            <div style={{ width: '90%' }} className='container-fluid'>
                <h5 >Premium-Quality Boiler Accessories for Diverse Industrial Applications</h5>
                <p style={{ lineHeight: 2, textAlign: 'justify' }}>
                    We offer a range of high-quality Boiler Accessories widely used across various industries.
                    Each product undergoes rigorous testing before dispatch to ensure superior performance and reliability.
                    Manufactured using premium-grade materials and advanced technology, these accessories are designed for a
                    variety of applications and are renowned for their durability.
                </p>
                <div className='mt-4 mb-4' >
                    <div className='row g-3'>
                        {equipmentData.map((equipment, index) => {
                            const columnClass =
                                equipment.title === 'Dust collecting equipment' || equipment.title === 'Erection of steam and condensate pipe line'
                                    ? 'col-sm-3' : 'col-sm-2';

                            return (


                                <div className={columnClass} key={index}>
                                    <Panel
                                        shaded
                                        style={{
                                            backgroundImage: `url(${equipment.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            position: 'relative',
                                            padding: '20px',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                            color: 'white',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        }}
                                    >
                                        <div style={overlayStyle}></div>
                                        <div style={contentStyle}>
                                            <strong>{equipment.title}</strong>
                                        </div>
                                    </Panel>
                                </div>

                            );
                        })}
                    </div>
                </div>
                <div style={{ lineHeight: 2 }}>
                    <h4>Comprehensive Boiler Solutions and Critical Component Services</h4>
                    <p style={{ textAlign: 'justify' }}>
                        We specialize in providing a comprehensive range of solutions, including boiler capacity enhancement, boiler retrofitting, performance studies, and energy audits.
                        <br />
                    </p>
                    <span><b>Our offerings include:</b></span>
                    <ul >

                        <li>Boiler Pressure Parts: Superheated tubes, economizer tubes, evaporator tubes, etc.</li>
                        <li>Non-Pressure Parts: Ducting, air heater tubes, expansion joints, etc.</li>
                        <li>Fans: Impellers, blades, casings, along with performance studies and energy audits.</li>
                        <li>ESP / Bag Filters: Collecting electrodes, bags, as well as performance studies and energy audits.</li>
                    </ul>
                </div>

            </div>
        </>
    );
};