import { useState } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from "react-bootstrap";
function HoverDropdown({ title, children, id }) {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      title={title}
      id={id}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
    </NavDropdown>
  );
}

export default HoverDropdown;
