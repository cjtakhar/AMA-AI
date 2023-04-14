import 'bootstrap/dist/css/bootstrap.min.css';
import  { Navbar, Nav }  from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar className="navbar fixed-top" expand="lg">
            <div className="container-fluid">
                <Navbar.Brand className="nav-brand" href="/AMA-AI">AMA-AI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="navLink" href="/AMA-AI/about">About</Nav.Link>
                        <Nav.Link className="navLink" href="/AMA-AI/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
