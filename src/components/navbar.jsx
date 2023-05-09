import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  const navigate = useNavigate();
  
  const handleLinkClick = () => {
    navigate("/");
    document.querySelector(".navbar-toggler").click();
  }
  
  return (
    <Navbar className="navbar fixed-top" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand className="nav-brand" as={Link} to="/">
          AMA-AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} className="navLink" to="/about" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} className="navLink" to="/contact" onClick={handleLinkClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}