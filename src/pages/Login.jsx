import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

import { useState } from 'react';

//Api.
import { loginRequest } from '../api/auth.api';

export default function Login(){

    const {login} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async(e) => {
        e.preventDefault();

        setLoading(true);

        try{

            //Consumos el API.
            const data = await loginRequest(email, contrasena);
            //Iniciamos sesión y guardamos el accessToken
            login(data.acccessToken);
            //Redireccionamos a "/dashboard"
            navigate("/dashboard");

        }catch(error){

            alert("Error al intentar iniciar sesión");

        }finally{
            setLoading(false);
        }

    }

    return (
        <>
            <h1 className="mb-4 text-center"> Inicie sesión </h1>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su correo electrónico' />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={contrasena} onChange={(e) => setContrasena(e.target.value)} type="password" placeholder='Ingrese su contraseña' />
                    </Col>
                </Form.Group>
                <Button disabled={loading} type='submit' onClick={handleLogin} variant='primary'> Iniciar sesión </Button>
            </Form>
        </>
    )

}