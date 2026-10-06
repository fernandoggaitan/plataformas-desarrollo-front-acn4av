import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';

export default function Album() {

  const [fotos, setFotos] = useState([]);
  const [numero, setNumero] = useState(1);

  useEffect(() => {

    getFotos();

  }, [numero]);

  const getFotos = async() => {

    try{

        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${numero}`);

        if (!response.ok) {
            throw new Error('Error al obtener la lista de fotos');
        }

        const data = await response.json();

        setFotos(data);

    }catch(error){
        alert(error);
    }

  }

  const handleNumero = (e) => {
    setNumero(e.target.value);
  }

  return (
    <>
      <h2 className="mb-4 text-center">Álbum de Fotos #{numero}</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Número </Form.Label>
            <Form.Control type="text" value={numero} onChange={handleNumero} style={ {maxWidth: "50px"} } />
        </Form.Group>
      </Form>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {fotos.map((f) => (
          <Col key={f.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img 
                variant="top" 
                src={f.thumbnailUrl} 
                alt={f.title}
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="h6 text-capitalize">
                  {f.title}
                </Card.Title>                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </>
  );
};