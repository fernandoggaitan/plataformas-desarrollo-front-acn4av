import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';
import { Button } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";

export default function Menu() {

    const {is_logueado, logout} = useAuth();

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/info">Info</Nav.Link>
                    <Nav.Link as={Link} to="/candidatos">Candidata/os</Nav.Link>
                    <Nav.Link as={Link} to="/album">Album</Nav.Link>
                    {
                        (is_logueado) ?
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                <Button onClick={handleLogout} variant='danger'> Cerrar sesión </Button>
                            </>
                        :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                                      
                </Nav>
            </Container>
        </Navbar>

    );
}