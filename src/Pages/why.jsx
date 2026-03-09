import q1 from '../assets/q1.jpg';
import gif from "../assets/machine.gif";
import '..Styles/prallax1.css';
import { Accordion } from 'react-bootstrap';

export const ParallaxComponent = () => {
    const styles = {
        container: {
            position: 'relative',
            overflow: 'hidden',
            height: '50vh',
        },
        parallaxImage: {
            backgroundImage: `url(${q1})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
        },
        overlayText: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center',
            fontSize: '24px',
            width: '80%',
        },
        accordion: {
            backgroundColor: 'transparent',
            color: '#fff',
            border: 'none',
        },
        accordionItem: {
            backgroundColor: 'transparent',
            color: '#fff',
        },
        accordionHeader: {
            backgroundColor: 'transparent',
            color: '#fff',
            // fontWeight: 'bold',
            border: 'none',
            lineHeight: '1.8', // Line spacing for header
        },
        accordionBody: {
            color: '#fff',
            lineHeight: '1.5', // Line spacing for body
        },
        paragraph: {
            textAlign: 'left',
            Height: '1.6', // Line spacing for paragraphs
            // marginBottom: '10px', // Add space between paragraphs
        },
    };

    return (
        <>
            <div style={styles.container}>
                <div style={styles.parallaxImage} />

                <div style={styles.overlayText}>
                    <h3 style={{ textAlign: 'left', marginTop: '1%' }}>Why Choose Ennaar Boilers?</h3>
                    <p style={styles.paragraph}>
                        Ennaar Boilers delivers high-quality, energy-efficient, and reliable
                        solutions tailored to your needs, backed by exceptional support and a
                        commitment to sustainability.
                    </p>

                </div>
            </div>

            <div className='card card-body'>
                <div className='row' style={{ padding: '2%' }}>
                    <div className='col-sm-6'>
                        <center><img src={gif} alt="" style={{ width: '80%' }} /></center>
                    </div>
                    <div className='col-sm-6'>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Steam and Power</Accordion.Header>
                                <Accordion.Body>
                                    (One point solution for STEAM & POWER), provides a wide range of products,
                                    services and solutions for the global power generation, co- generation, industrial, refinery, petrochemical, biomass
                                    and waste-to-energy markets. Our strength is our engineers having rich experience to solve any problem in boiler / power plant.
                                    We are engaged in providing a wide range of industrial steam boiler such as boiler capacity enhancement,
                                    FBC system, industrial furnaces and heat recovery unit. These are available in different specifications to meet the demands of various industrial applications.
                                    Our range of industrial steam boiler is appreciated for consistent performance, high efficiency and long service life.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>We offer Boiler Accessories</Accordion.Header>
                                <Accordion.Body>
                                    We offer Boiler Accessories which are commonly used in various industries.
                                    These are tested well before dispatch and are made from excellent quality material and advanced technology.
                                    These are used for various applications and are known for their durability.
                                    They are available at cost effective price. These are offered in various shapes and sizes based on the customers requirement.
                                    <ul>
                                        <li>Fans</li>
                                        <li>ESP / Bag filter</li>
                                        <li>Steel chimney</li>
                                        <li>Bunker / silo</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Spares and Service</Accordion.Header>
                                <Accordion.Body>
                                    We are engaged in offering a wide range of Boiler Spares, which is reckoned for its superior quality.
                                    Precisely engineered and quality approved, the boiler spares made by us can be availed in different specifications, sizes and capacities.
                                    To suit the exact demands of our esteemed customers, we manufacture these spares in customised specifications. <br />
                                    We are engaged in providing a wide range of solution such as boiler capacity enhancement, retrofit of boilers, Performance study and energy audit.
                                    <ul>
                                        <li>Boiler pressure parts (Superheater tubes, Economiser tubes, Evaporator tubes, etc.)</li>
                                        <li>Non pressure parts (Ducting, Airheater tubes, Expansion joints, etc.)</li>
                                        <li>Fans (Impellor, blades, casing, performance study / energy audit)</li>
                                        <li>ESP / Bag filter (Collecting electrodes, bags & Performance study / Energy audit)</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};