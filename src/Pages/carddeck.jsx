import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import { React, useRef } from 'react';


export const CardDeck = () => {

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };

    return (
        <div className="container mt-4">

            <h4 className="text-primary">Our Products</h4>

            <div className="d-flex align-items-center">

                {/* Left Arrow */}
                {/* <button className="btn btn-light me-4" onClick={scrollLeft}>
                    ◀
                </button> */}

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="d-flex overflow-auto"
                    style={{ scrollBehavior: "smooth", gap: "20px" }}
                >

                    <Card style={{ minWidth: "220px" }}>
                        <Card.Img variant="top" src={p1} />
                        <Card.Body>
                            <Card.Title>Wast Heat Recovery Boiler</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ minWidth: "220px" }}>
                        <Card.Img variant="top" src={p2} />
                        <Card.Body>
                            <Card.Title>AFBC Boiler</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ minWidth: "220px" }}>
                        <Card.Img variant="top" src={p3} />
                        <Card.Body>
                            <Card.Title>Solid Fual HMT Boiler</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ minWidth: "220px" }}>
                        <Card.Img variant="top" src={p4} />
                        <Card.Body>
                            <Card.Title>Ricemill Boiler</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ minWidth: "220px" }}>
                        <Card.Img variant="top" src={p5} />
                        <Card.Body>
                            <Card.Title>Radiant Expenal Furnace Water Wall Boiler</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{ minWidth: "220px" }}>
                        <Card.Img variant="top" src={p6} />
                        <Card.Body>
                            <Card.Title>Oil/Gas Fired Boiler</Card.Title>
                        </Card.Body>
                    </Card>

                </div>

                {/* Right Arrow */}
                {/* <button className="btn btn-light ms-4" onClick={scrollRight}>
                    ▶
                </button> */}

            </div>

        </div>
    );
};