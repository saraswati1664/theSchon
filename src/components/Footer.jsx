import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faPinterest,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/logo.png"
function Footer(){
    return(
        <>
        <section className="footer-sec">
            <Container>
                <Row className="footer">
                    <Col lg={3} md={6} sm={12}>
                    <div className="footer-1">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer-para">
                            <p>India’s trusted name in premium aluminium doors and windows, blending world-class German engineering with refined Indian craftsmanship.</p>
                        </div>
                        <div className="footer-icons">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faPinterest} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                    </Col> 
                    <Col lg={3} md={6} sm={12}>
                    <div className="footer-2">
                        <h3>Our Existence</h3>
                        <ul>
                            <li><a href="mailto:contact@theschon.com">contact@theschon.com</a></li>
                            <li><a href="tel:+91 9535359481">+91 9535359481</a></li>
                            <li><a href="tel:+91 7019209490">+91 7019209490</a></li>
                        </ul>
                    </div>
                    </Col> 
                    <Col lg={2} md={6} sm={6} xs={6}>
                    <div className="footer-2">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Our Blogs</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    </Col> 
                    <Col lg={2} md={6} sm={6} xs={6}>
                    <div className="footer-2">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#">Doors</a></li>
                            <li><a href="#">Windows</a></li>
                            <li><a href="#">Railings</a></li>
                            <li><a href="#">Glasses</a></li>
                            <li><a href="#">Cubicles</a></li>
                        </ul>
                    </div>
                    </Col> 
                </Row>
                <div className="lower-footer">
                    <p>All Rights Reserved</p>
                </div>
            </Container>        
        </section>
        </>
    )
}

export default Footer;