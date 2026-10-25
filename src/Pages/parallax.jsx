import ma from '../assets/Malaysia.jpg';
import ke from '../assets/Kenya.jpg';
import sa from '../assets/SaudiArabia.jpg';
import sl from '../assets/srilanka.jpg';
import soa from '../assets/southafrica.jpg';
import ba from '../assets/bangladesh.jpg';
import ta from '../assets/tanzania.jpg';
import ni from '../assets/nigeria.jpg';
import unisource from '../assets/Clients/unisource.jpg';
import maxima from '../assets/Clients/maxima_logo.jpg';
import vamani from '../assets/Clients/vamani.jpg';
import akrtextlies from '../assets/Clients/akrtextlies.png';
import euroline from '../assets/Clients/euroline.jpeg';
import swiftmerchandise from '../assets/Clients/swiftmerchandise.png';
import poongodhai from '../assets/Clients/poongodhai.jpg';
import shobikaa from '../assets/Clients/shobikaa.jpg';
import sweatersindia from '../assets/Clients/sweatersindia.png';
import Gateswears from '../assets/Clients/Gateswears.png';
import anthonygarments from '../assets/Clients/anthonygarments.png';
import shriammanknits from '../assets/Clients/shriammanknits.png';
import varshini from '../assets/Clients/varshini.png';
import voguesourcing from '../assets/Clients/voguesourcing.png';
import jacobi from '../assets/Clients/jacobi.png';
import vas from '../assets/Clients/vas.png';
import ucs from '../assets/Clients/ucs.jpg';
import mmd from '../assets/Clients/MMD.png';
import cowma from '../assets/Clients/cowma.png';
import nandini from '../assets/Clients/nandini.png';
import goa from '../assets/Clients/goa.png';
import amfpl from '../assets/Clients/amfpl.jpg';
import ambikaa from '../assets/Clients/ambikaa.png';
import cocoguru from '../assets/Clients/Cocoguru.webp';
import msr from '../assets/Clients/msr.png';
import pho from '../assets/Clients/pho.jpg';
import fruition from '../assets/Clients/fruition.png';
import shakthifruits from '../assets/Clients/shakthifruits.jpg';
import sreesannidhi from '../assets/Clients/sreesannidhi.jpg';
import christy from '../assets/Clients/christy.png';
import gd from '../assets/Clients/gd.jpg';
import kavi from '../assets/Clients/kavi.png';
import mohan from '../assets/Clients/mohan.png';
import balaji from '../assets/Clients/balaji.png';
import wicma from '../assets/Clients/wicma.jpg';
import knag from '../assets/Clients/knag.webp';
import pandian from '../assets/Clients/pandian.png';
import renacon from '../assets/Clients/renacon.png';
import tancoir from '../assets/Clients/tancoir.png';
import kumaran from '../assets/Clients/kumaran.png';
import everygreen from '../assets/Clients/everygreen.jpg';
import greenline from '../assets/Clients/greenline.png';
import amin from '../assets/Clients/amin.png';
import anpharma from '../assets/Clients/anpharma.jpg';
import invotech from '../assets/Clients/invotech.jpg';
import '../Styles/Parallax.css';
import Marquee from "react-fast-marquee";

export const Parallax = () => {
    const countries = [
        { src: ma, name: "MALAYSIA" },
        { src: ke, name: "KENYA" },
        { src: sa, name: "SAUDI ARABIA" },
        { src: sl, name: "SRI LANKA" },
        { src: soa, name: "SOUTH AFRICA" },
        { src: ba, name: "BANGLADESH" },
        { src: ta, name: "TANZANIA" },
        { src: ni, name: "NIGERIA" },
    ];

    const clientLogos1 = [
        { src: unisource, },
        { src: maxima, },
        { src: vamani, },
        { src: akrtextlies, },
        { src: euroline, },
        { src: swiftmerchandise, },
        { src: poongodhai, },
        { src: shobikaa, },
        { src: sweatersindia, },
        { src: Gateswears, },
        { src: anthonygarments, },
        { src: shriammanknits, },
        { src: varshini, },
        { src: voguesourcing, },
        { src: jacobi, },
    ];

    const clientLogos2 = [

        { src: vas, },
        { src: ucs, },
        { src: mmd, },
        { src: cowma, },
        { src: nandini, },
        { src: goa, },
        { src: amfpl, },
        { src: ambikaa, },
        { src: cocoguru, },
        { src: msr, },
        { src: pho, },
        { src: fruition, },
        { src: shakthifruits, },
        { src: gd, },
        { src: sreesannidhi, }

    ]

    const clientLogos3 = [

        { src: christy, },
        { src: kavi, },
        { src: mohan, },
        { src: balaji, },
        { src: wicma, },
        { src: knag, },
        { src: pandian, },
        { src: renacon, },
        { src: tancoir, },
        { src: kumaran, },
        { src: everygreen, },
        { src: greenline, },
        { src: amin, style:{backgroundColor:'blue'}, padding: 5, borderRadius: 5 },
        { src: anpharma, },
        { src: invotech, },
    ]

    return (
        <div>
            {/* Parallax Section */}
            <div className="parallax mt-4">
                <div className="overlay"></div>
                <div className="overlay-text">
                    <h1>So far, we sell to lots of countries and regions</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h3>Global Reach: Countries We Serve</h3>
                <h6 style={{ textAlign: 'justify', marginLeft: '5%', marginRight: '5%', lineHeight: '2' }}>
                    We currently sell our products to numerous countries and regions around the world.
                    These include, but are not limited to, Malaysia, Kenya, Saudi Arabia, Sri Lanka,
                    South Africa, Bangladesh, Tanzania, and Nigeria. Each of these markets represents a
                    unique opportunity, and we are proud to have established a strong presence in these
                    diverse locations. Our aim is to continue expanding our reach and delivering quality
                    products to even more countries in the future.
                </h6>

                {/* Static Country Grid */}
                <div className='container mt-4'>
                    <div className='card card-body'>
                        <div className='row g-3 mt-1'>
                            {countries.map((country, index) => (
                                <div className='col-sm-3' key={index}>
                                    <img src={country.src} alt={country.name} width={100} />
                                    <h6>{country.name}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Client Logos Marquee - Left to Right */}
                <div className="mt-4 mb-5">
                    <h4 className="text-center mb-3" style={{ shadow: '0 2px 4px rgba(210, 0, 0, 0.1)', fontWeight: 'bold' ,color:'darkmagenta'}}>Our Valued Clients</h4>
                    {/* <h4 style={{fontWeight:'bold', backgroundColor:'lightblue', color:'teal', padding: 5}}>TEXTILE INDUSTRY</h4> */}
                    <Marquee
                        direction="right"        // Left → Right scrolling
                        speed={50}
                        gradient={false}
                        pauseOnHover

                    >
                        {clientLogos1.map((client, index) => (
                            <div key={index} style={{ margin: "0 10px", textAlign: "center" }}>
                                <img
                                    src={client.src}
                                    alt={client.name}
                                    style={{
                                        width: "180px",
                                        height: "110px",
                                        objectFit: "contain",
                                        padding: "10px",
                                        // background: "#434343",
                                        borderRadius: "8px",
                                        // boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                    }}
                                />
                                <p style={{ marginTop: "10px", fontWeight: "600", color: "#333" }}>
                                    {client.name}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                    <hr />
                    {/* <h4 style={{fontWeight:'bold', backgroundColor:'lightblue', color:'teal', padding: 5}}>CARBON INDUSTRY</h4> */}
                    <Marquee
                        direction="left"        // Left → Right scrolling
                        speed={40}
                        gradient={false}
                        pauseOnHover

                    >
                        {clientLogos2.map((client, index) => (
                            <div key={index} style={{ margin: "0 10px", textAlign: "center" }}>
                                <img
                                    src={client.src}
                                    alt={client.name}
                                    style={{
                                        width: "180px",
                                        height: "110px",
                                        objectFit: "contain",
                                        padding: "10px",
                                        // background: "#434343",
                                        borderRadius: "8px",
                                        // boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                    }}
                                />
                                <p style={{ marginTop: "10px", fontWeight: "600", color: "#333" }}>
                                    {client.name}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                    <hr />
                    <Marquee
                        direction="right"        // Left → Right scrolling
                        speed={90}
                        gradient={false}
                        pauseOnHover

                    >
                        {clientLogos3.map((client, index) => (
                            <div key={index} style={{ margin: "0 10px", textAlign: "center" }}>
                                <img
                                    src={client.src}
                                    alt={client.name}
                                    style={{
                                        width: "180px",
                                        height: "110px",
                                        objectFit: "contain",
                                        padding: "10px",
                                        // background: "#434343",
                                        borderRadius: "8px",
                                        // boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                                    }}
                                />
                                <p style={{ marginTop: "10px", fontWeight: "600", color: "#333" }}>
                                    {client.name}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};