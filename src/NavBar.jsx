import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" data-bs-theme="light" bg="info" className="mb-3">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/form1">
              useFormik
            </Nav.Link>
            <Nav.Link as={NavLink} to="/form2">
              Formik Component
            </Nav.Link>
            <Nav.Link as={NavLink} to="/form3">
              Yup Validation for Components
            </Nav.Link>
            <Nav.Link as={NavLink} to="/form4">
              Yup Validation for useFormik
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reuse">
              Reuse Components
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
