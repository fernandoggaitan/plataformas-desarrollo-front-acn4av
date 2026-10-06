import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../img/90.jpg'
import CandidatoItem from './CandidatoItem';


export default function CandidatosLista() {

    return (
        <>
            <h2> Lista de candidata/os </h2>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <CandidatoItem 
                        img="https://randomuser.me/api/portraits/women/90.jpg"
                        nombre="Sofía"
                    />
                </Col>  
                <Col>
                    <CandidatoItem 
                        img="https://randomuser.me/api/portraits/men/49.jpg"
                        nombre="Pablo"
                    />
                </Col>                     
                <Col>
                    <CandidatoItem 
                        img="https://randomuser.me/api/portraits/women/61.jpg"
                        nombre="Valeria"
                    />
                </Col>  
            </Row>
        </>
    )

}