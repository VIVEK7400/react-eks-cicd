import Logo from '../assets/ennaarlogo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white text-center text-sm-start">
      {/* Top Section */}
      <div className=" p-4">
        <div className="row">


          {/* Column 1: About */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <center><img src={Logo} alt="" width={230} /><br />Since - 2006</center>
          </div>

          {/* Column 1: About */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About us</h5>
            <p>
              Ennaar Energy Systems provides innovative solutions for steam and power systems since 2006.
              We are committed to delivering high-quality, sustainable energy solutions.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-lg-1 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Marketing Branches</h5>
            <p>
              Ennaar Engineers
              No: 11, Vavila Complex,
              1st Floor, Palladam Road,
              Tirupur – 641605.<br />
              Ph: 0421-2214618 |
              Fax: 0421-221214
            </p>

          </div>
          {/* Column 3: Contact */}
          <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Head Office</h5>
            <p>
              Ennaar Energy Systems
              Plot No: C-1, SIPCOT,
              Industrial Growth Centre,
              Perundurai, Erode – 638 052,<br />
              E-mail : boiler@ennaarenergysystems.in<br />
              Phone: 04294 – 234184, 234185
              Fax: 04294 – 234186<br />
              Mobile: 094437 63027, 098430 30547
            </p>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {currentYear} Ennaar Energy Systems. All Rights Reserved.
      </div>
    </footer>
  );
}