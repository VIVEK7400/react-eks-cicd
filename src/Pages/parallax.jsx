import ma from '../assets/Malaysia.jpg';
import ke from '../assets/Kenya.jpg';
import sa from '../assets/SaudiArabia.jpg';
import sl from '../assets/srilanka.jpg';
import soa from '../assets/southafrica.jpg';
import ba from '../assets/bangladesh.jpg';
import ta from '../assets/tanzania.jpg';
import ni from '../assets/nigeria.jpg';
import '../Styles/parallax.css';

export const Parallax = () => {
    return (
        <div>
            {/* Parallax Section */}
            <div className="parallax mt-4">
                {/* Black Overlay */}
                <div className="overlay"></div>

                {/* Text on Overlay */}
                <div className="overlay-text">
                    <h1>So far, we sell to lots of countries and regions</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="content">
                <h3>Global Reach: Countries We Serve</h3>
                <h6 style={{ textAlign: 'justify', marginLeft: '5%', marginRight: '5%', lineHeight:'2'}}>
                    We currently sell our products to numerous countries and regions around the world.
                    These include, but are not limited to, Malaysia, Kenya, Saudi Arabia, Sri Lanka,
                    South Africa, Bangladesh, Tanzania, and Nigeria. Each of these markets represents a
                    unique opportunity, and we are proud to have established a strong presence in these
                    diverse locations. Our aim is to continue expanding our reach and delivering quality
                    products to even more countries in the future.
                </h6>
                <div className='container mt-4'>
                    <div className='card card-body '>
                        <div className='row g-3 mt-1'>
                            <div className='col-sm-3'>
                                <img src={ma} alt="" width={150} />
                                <h6>MALAYSIA</h6>
                            </div>
                            <div className='col-sm-3'>
                                <img src={ke} alt="" width={150} />
                                <h6>KENYA</h6>
                            </div>
                            <div className='col-sm-3'>
                                <img src={sa} alt="" width={150} />
                                <h6>SAUDI ARABIA</h6>
                            </div>
                            <div className='col-sm-3'>
                                <img src={sl} alt="" width={150} />
                                <h6>SRI LANKA</h6>
                            </div>
                            <div className='col-sm-3'>
                                <img src={soa} alt="" width={150} />
                                <h6>SOUTH AFRICA</h6>
                            </div>
                            <div className='col-sm-3'>
                                <img src={ba} alt="" width={150} />
                                <h6>BANGLADESH</h6>
                            </div>
                            <div className='col-sm-3'>
                                <img src={ta} alt="" width={150} />
                                <h6>TANZANIA</h6>
                            </div>
                            <div className='col-sm-3'>
                                <img src={ni} alt="" width={150} />
                                <h6>NIGERIA</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};