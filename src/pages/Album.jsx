import { Row, Col, Card, Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { useState, useEffect } from 'react';

export default function Album() {

  const [albumId, setAlbumId] = useState(1);
  const [lista, setLista] = useState([]);
  const [isCargando, setIsCargando] = useState(false);

  useEffect( () => {
    getLista();
  }, [albumId] );

  const getLista = async() => {

    setIsCargando(true);

    try{
      
      const respuesta = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

      if(!respuesta.ok){
        throw new Error("Error al intentar cargar el álbum de fotos");
      }

      const json = await respuesta.json();

      setLista(json);

    }catch(error){
      alert(error);
    }finally{
      setIsCargando(false);
    }

  }

  const handleAlbumId = (e) => {
    const value = Number(e.target.value);
    setAlbumId(value);
  }

  if( isCargando ){
    return (
      <Alert variant="warning">
        Cargando, por favor espere...
      </Alert>
    )
  }

  return (
    <>
      <h2 className="mb-4 text-center">Álbum de Fotos </h2>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> Número </Form.Label>
            <Form.Control type="number" value={albumId} onChange={handleAlbumId} style={ {maxWidth: "70px"} } />
        </Form.Group>
      </Form>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {
          lista.map( item => (
            <Col key={item.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img 
                  variant="top" 
                  src={ item.thumbnailUrl }
                  alt={ item.title }
                  style={{ height: '150px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title className="h6 text-capitalize">
                    { item.title }
                  </Card.Title>                
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
      
    </>
  );
};