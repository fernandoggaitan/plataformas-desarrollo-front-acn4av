import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../img/90.jpg'
import CandidatoItem from './CandidatoItem';

import { useState } from 'react';

const candidatos = [
    {
        ID: 1,
        nombre: "Sofía",
        imagen: "https://randomuser.me/api/portraits/women/90.jpg",
        votos: 5
    },
    {
        ID: 2,
        nombre:"Pablo",
        imagen: "https://randomuser.me/api/portraits/men/49.jpg",
        votos: 3   
    },
    {
        ID: 3,
        nombre: "Valeria",
        imagen: "https://randomuser.me/api/portraits/women/61.jpg",
        votos: 2
    }
];


export default function CandidatosLista() {

    const [cantidad_votos, setCantidadVotos] = useState(0);

    const handleVotos = (votos_viejo, votos_nuevo) => {
        setCantidadVotos(cantidad_votos - votos_viejo + votos_nuevo);
    }

    return (
        <>
            <h2> Lista de candidata/os </h2>
            <p> Cantidad de votos: {cantidad_votos} </p>
            <Row xs={1} md={3} className="g-4">

                {
                    candidatos.map( c => (
                        <Col key={c.ID}>
                            <CandidatoItem 
                                img={c.imagen}
                                nombre={c.nombre}
                                onChangeVotos={handleVotos}
                            />
                        </Col>
                    ))
                }
                             
            </Row>
        </>
    )

}