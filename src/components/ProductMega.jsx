import { useState } from "react";
import { Nav } from "react-bootstrap";

function ProductMega() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("doors");

  const menuData = {
    doors: ["Bi Fold Aluminium Doors", "Corner Sliding Aluminium Doors", "Slide and Fold Aluminium Doors","Ventilation Aluminium Doors","Casement Aluminium Doors","French Aluminium Doors","Premium Sliding Aluminium Doors"],
    windows: ["Aluminium Awning Windows", "Aluminium Casement Windows", "Aluminium Fixed Windows","Aluminium Sliding Windows","Tilt and Turn Aluminium Windows","Vertical Sliding Aluminium Windows"],
    railings: ["Luxury Decorative Glass Railings","Aluminium Plain Glass Railings"],
    glasses: ["Double Glazing Units DGU Luxury Wall Decor","Floor to Ceiling Tinted Mirror Panelling"],
    cubicles: ["Stainless Steel Shower Cubicles","Framed Shower Cubicles","Frameless Shower Cubicles"],
  };

  return (
    <div
      className="mega-wrapper"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ position: "relative" }} // important
    >
      {/* The nav link */}
      <Nav.Link className="mega-link dropdown-toggle">Product</Nav.Link>

      {/* Mega menu */}
      {show && (
        <div className="mega-menu">
          <div className="mega-left">
            <h6
                id="#door"
              className={active === "doors" ? "active" : ""}
              onMouseEnter={() => setActive("doors")}
            >
              Doors
            </h6>
            <h6
              className={active === "windows" ? "active" : ""}
              onMouseEnter={() => setActive("windows")}
            >
              Windows
            </h6>
            <h6
              className={active === "railings" ? "active" : ""}
              onMouseEnter={() => setActive("railings")}
            >
              Railings
            </h6>
            <h6
              className={active === "glasses" ? "active" : ""}
              onMouseEnter={() => setActive("glasses")}
            >
              Glasses
            </h6>
            <h6
              className={active === "cubicles" ? "active" : ""}
              onMouseEnter={() => setActive("cubicles")}
            >
              Cubicles
            </h6>
          </div>

          <div className="mega-right">
            <ul>
              {menuData[active].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductMega;
