import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from "react";
import { Modal} from "react-bootstrap";
import locationimg1 from "../assets/location-img-1.png";
import contactimg2 from "../assets/contactimg2.png";
import contactimg3 from "../assets/contactimg3.png";
import testo from "../assets/testo.png";
import anitha from "../assets/anitha.png";
import nikhil from "../assets/nikhil.png";
import karan from "../assets/karan-mehta.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Contact(){
     const [open, setOpen] = useState(false);
     const [open1, setOpen1] = useState(false);
     const [open2, setOpen2] = useState(false);
     const [open3, setOpen3] = useState(false);
     const [showModal, setShowModal] = useState(false);
     const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowModal(true); 
    e.target.reset(); 
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
        <>
        <section className="banner-sec">
        <Container>
            <div className="banner-content">
                <h4 className="banner-head">Let’s Build Something Exceptional Together</h4>
                <p className="banner-para">Connect with team Schon</p>
            </div>
        </Container>
        </section>
        <section className="location-sec">
        <Container>
            <div className="locaton-heading-sec">
                <h2 className="head-location">Let’s Connect</h2>
                <h3 className="para-location">Have a question, design brief, or project in mind? Our team is here to help you every step of the way—from product selection to final installation. Reach out to us and experience the precision, support, and professionalism that define Schon Doorways.</h3>
            </div>
            <Row className="justify-content-between align-items-center">
                <Col md={12} lg={5} xl={4}  className="d-flex location-info ">
                <div><img className="locatoin-img" src={locationimg1} alt="location 1" /></div>
                <div className="address">
                    <h3>Location</h3>
                    <p>19 Sharp Building, Queens Road, Vasanth Nagar, Bengaluru, Karnataka, India</p>
                </div>
                </Col>
                <Col xl={3} md={12} lg={5} className="location-info">
                <div className="address">
                    <h3>Informations</h3>
                    <div className="row-2">
                        <img src={contactimg2} alt="" />
                        <p><a href="mailto:contact@theschon.com">contact@theschon.com</a></p>
                    </div>
                    <div className="row-2 call">
                       <div><img src={contactimg3} alt="" /></div> 
                       <div><a href="tel:+91 9535359481">+91 9535359481</a>
                       <div><a href="tel:+91 7019209490">+91 7019209490</a>
                       </div>
                    </div>
                </div>
                </div>
                </Col>
                <Col xl={5} lg={12} md={12}>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16016.836709636833!2d77.597738!3d12.986026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17832a85e12f%3A0xd94992ee33974dee!2sThe%20Schon!5e1!3m2!1sen!2sin!4v1759262397786!5m2!1sen!2sin"width="100%"height="300"style={{ border: 0 }}allowFullScreenloading="lazy"referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                </Col>
            </Row>
        </Container>
        </section>
        <section className="form-section">
            <Container fluid>
        <Row className="justify-content-between align-items-center">
            <Col sm={12} md={12} lg={6}>
            <div className="form-left">
                <h2 className="head-location">Frequently Asked Questions</h2>
                <div className="mt-4">
      <div className={`contain-whole-card justify-content-between align-items-center rounded ${open ? "active" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <h5 className={`card-link mb-0 ${open ? "active" : ""}`}><span>Where are your Experience Centres located?</span></h5>
      <div className={`collapse ${open ? "show" : ""}` }>
        <div className="card card-body">
          <p>
            We are present in Bangalore, Chennai, and Hyderabad.
          </p>
        </div>
      </div>
      </div>

    </div>
    <div className="">
      <div 
        className={`contain-whole-card justify-content-between align-items-center rounded ${open1 ? "active" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen1(!open1)}
      >
        <h5 className={`card-link mb-0 ${open1 ? "active" : ""}`}><span>Do I need an appointment to visit?</span></h5>
      <div className={`collapse ${open1 ? "show" : ""}`}>
        <div className="card card-body">
          <p>
            We are present in Bangalore, Chennai, and Hyderabad.
          </p>
        </div>
      </div>
      </div>

    </div>
    <div className="">
      <div 
        className={`contain-whole-card justify-content-between align-items-center rounded ${open2 ? "active" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen2(!open2)}
      >
        <h5 className={`card-link mb-0 ${open2 ? "active" : ""}`}><span>Do you take up small residential projects?</span></h5>
      <div className={`collapse ${open2 ? "show" : ""}` }>
        <div className="card card-body">
          <p>
            We are present in Bangalore, Chennai, and Hyderabad.
          </p>
        </div>
      </div>
      </div>

    </div>
    <div className="">
      <div 
        className={`contain-whole-card justify-content-between align-items-center rounded ${open3 ? "active" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={() => setOpen3(!open3)}
      >
        <h5 className={`card-link mb-0 ${open3 ? "active" : ""}`}><span>Can I speak directly to a product expert?</span></h5>
      <div className={`collapse ${open3 ? "show" : ""}` }>
        <div className="card card-body">
          <p>
            We are present in Bangalore, Chennai, and Hyderabad.
          </p>
        </div>
      </div>
      </div>
    </div>
                
                
            </div>
            </Col>
            <Col sm={12} md={12} lg={6} >
            <div className="form-right">
            <h4>We’re just a step away!</h4>
            <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name*" required />
            <input type="email" placeholder="Email Address*" required />
            <input type="tel" placeholder="Contact No.*" required />
            <textarea placeholder="Message"></textarea>
            <button className="formbtn header-btn">
              Get in Touch <FontAwesomeIcon icon={faArrowRight} />
            </button>
            </form>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your message has been submitted successfully ✅. We'll get back to you soon.
        </Modal.Body>
        <Modal.Footer>
          <button className="header-btn" onClick={() => setShowModal(false)}>
            Close <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Modal.Footer>
      </Modal>
            </div>
            </Col>
        </Row>
            </Container>
        </section>
        <section className="tesimonial-section">
            <Container>
                <div className="text-center test-head"><h2>Built on Trust. Chosen by Experts</h2></div>
                {isMobile ? (<Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
            >
                <SwiperSlide>
                <div className="cards">
                  <div><img src={testo} alt="" /></div>
                  <p>
                    We partnered with Schon Doorways for a 120-apartment premium
                    housing project...
                  </p>
                  <div className="person-container">
                    <img className="test-person" src={karan} alt="" />
                    <h3>
                      Karan Mehta <span>Director</span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="cards">
                  <div><img src={testo} alt="" /></div>
                  <p>
                    What sets Schon apart is their understanding of architectural vision...
                  </p>
                  <div className="person-container">
                    <img className="test-person" src={nikhil} alt="" />
                    <h3>
                      Nikhil Shetty <span>Principal Architect</span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="cards">
                  <div><img src={testo} alt="" /></div>
                  <p>
                    From consultation to installation, the experience with Schon Doorways
                    was seamless...
                  </p>
                  <div className="person-container">
                    <img className="test-person" src={anitha} alt="" />
                    <h3>
                      Anitha Rao <span>Homeowner</span>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          ) : (<Row className="test-row">
                    <Col sm={12} md={12} lg={6} xl={4}>
                    <div className="cards">
                        <div><img src={testo} alt="" /></div>
                        <p>We partnered with Schon Doorways for a 120-apartment premium housing project. Their scale of production, delivery timelines, and on-site coordination made them a reliable execution partner. It’s rare to find a vendor that delivers both product quality and project efficiency.</p>
                        <div className="person-container">
                            <img className="test-person" src={karan} alt="" />
                            <h3>Karan Mehta
                                <span>Director</span>
                            </h3>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={4}>
                    <div className="cards">
                        <div><img src={testo} alt="" /></div>
                        <p>What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.</p>
                        <div className="person-container">
                            <img className="test-person" src={nikhil} alt="" />
                            <h3>Nikhil Shetty
                                <span>Principal Architect</span>
                            </h3>
                        </div>
                    </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={4}>
                    <div className="cards">
                        <div><img src={testo} alt="" /></div>
                        <p>From consultation to installation, the experience with Schon Doorways was seamless. Their team helped us choose the right doors and windows for our villa, and the quality speaks for itself—solid, sleek, and truly premium. I finally feel like I’ve built a home that will last generations.</p>
                        <div className="person-container">
                            <img className="test-person" src={anitha} alt="" />
                            <h3>Anitha Rao
                                <span>Homeowner</span>
                            </h3>
                        </div>
                    </div>
                    </Col>
                </Row>
          )}
            </Container>
        </section>
        </>
    );
}

export default Contact;