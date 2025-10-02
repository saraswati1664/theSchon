import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"; 
import sidebar from "../assets/sidebar.png";

function Header() {
  const [navStyle, setNavStyle] = useState({
  backgroundColor: "transparent",
  boxShadow: "none"
});
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector(".banner-sec"); 
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY; 
        const triggerPoint = sectionTop + rect.height * 0.15; 

if (window.scrollY > triggerPoint) {
  setIsScrolled(true);
  setNavStyle({
          backgroundColor: "black",
          boxShadow: "0 0 10px 1px #ffffff71"
        });
} else {
  setIsScrolled(false);
  setNavStyle({
          backgroundColor: "transparent",
          boxShadow: "none"
        });
}

      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3"
          style={{
            ...navStyle,
            transition: "0.3s ease",
            position: "fixed",
            zIndex: "5",
            width: "100%"
          }}
        >
          <Container>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              as="div"
              className="border-0 bg-transparent p-0"
            >
              <img
                src={sidebar}
                alt="menu"
                style={{ width: "35px", cursor: "pointer" }}
              />
            </Navbar.Toggle>
            <Navbar.Brand href="#" className="ms-2">
              <img src={logo} alt="" style={{height: isScrolled ? "60px" : "80px",transition: "0.3s ease"}} />
            </Navbar.Brand>
            <button className="header-btn">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{
                backgroundColor: "#111111",
                width: "88%",
                paddingLeft: "80px"
              }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img className="theschon-logo" src={logo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-between flex-grow-1 pe-3 navbar-links">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <NavDropdown
                    title="Why Schon"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Product"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action2">Projects</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                </Nav>
                <div className="contact-btns">
                  <button className="header-btn">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <button className="oposite-hover header-btn">
              Become a Dealer  <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
