import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/info">Info</Nav.Link>
                    <Nav.Link as={Link} to="/candidatos">Candidata/os</Nav.Link>
                    <Nav.Link as={Link} to="/album">Album</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}