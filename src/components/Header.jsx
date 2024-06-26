import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/44.png'

function Header() {
  return (
    
    <Navbar expand="lg" style={{backgroundColor: "#ff7a3d"}} data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} width={120} alt="" />
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://kartcentral.store/">Home</Nav.Link>
                <Nav.Link href="https://kartcentral.store/shop-2/">Store </Nav.Link>
                <Nav.Link href="https://kartcentral.store/about/">About </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;