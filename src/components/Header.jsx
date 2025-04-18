import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/44.png'

function Header() {
  const navLinkStyle = {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
    fontSize: "0.95rem",
    letterSpacing: "0.02em",
    padding: "0.5rem 1rem",
    transition: "all 0.3s ease",
    textTransform: "uppercase"
  };

  const navbarStyle = {
    backgroundColor: "#ff7a3d",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
  };

  return (
    <Navbar expand="lg" style={navbarStyle} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} width={120} alt="Logo" style={{ filter: "brightness(1.1)" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="https://kartcentral.cloud/" 
              style={navLinkStyle}
              className="nav-link-hover"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="https://kartcentral.cloud/shop/" 
              style={navLinkStyle}
              className="nav-link-hover"
            >
              Store
            </Nav.Link>
            <Nav.Link 
              href="https://kartcentral.cloud/contact/" 
              style={navLinkStyle}
              className="nav-link-hover"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;