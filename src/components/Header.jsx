import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/44.png';
import { motion } from 'framer-motion';

function Header() {
  const navLinkStyle = {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
    padding: "0.75rem 1.25rem",
    transition: "all 0.3s ease",
    textTransform: "uppercase",
    position: "relative",
    display: "inline-block",
    marginLeft: "0.5rem"
  };

  const navbarStyle = {
    background: "linear-gradient(135deg, #6b46c1 0%, #805ad5 100%)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(107, 70, 193, 0.15)",
    padding: "1rem 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  };

  const logoStyle = {
    filter: "brightness(1.2) contrast(1.1)",
    transition: "all 0.3s ease",
    transform: "scale(1)",
    marginRight: "1rem"
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };

  const togglerStyle = {
    border: "none",
    padding: "0.25rem",
    backgroundColor: "transparent",
    marginLeft: "auto"
  };

  const navLinksContainerStyle = {
    display: "flex",
    alignItems: "center"
  };

  return (
    <Navbar expand="lg" style={navbarStyle} variant="dark" sticky="top" className="navbar-glass">
      <Container style={containerStyle}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="navbar-brand-container"
        >
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <motion.img
              src={Logo}
              width={110}
              alt="Logo"
              style={logoStyle}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Navbar.Brand>
        </motion.div>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={togglerStyle}
          className="custom-toggler"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={navLinksContainerStyle}>
            {[
              { href: "https://kartcentral.cloud/", text: "Home" },
              { href: "https://kartcentral.cloud/shop/", text: "Store" },
              { href: "https://kartcentral.cloud/contact/", text: "Contact" }
            ].map((link, index) => (
              <motion.div
                key={link.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                className="nav-link-container"
              >
                <Nav.Link
                  href={link.href}
                  style={navLinkStyle}
                  className="nav-link-hover"
                >
                  {link.text}
                  <motion.div
                    className="link-underline"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;