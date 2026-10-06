import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

export default function CandidatoItem( {img, nombre, onChangeVotos} ){

    const [votos, setVotos] = useState(0);

    const sumar = () => {
        const votos_nuevo = votos + 1;

        //Evento para avisar al componete padre.
        onChangeVotos(votos, votos_nuevo);

        setVotos(votos_nuevo);
    }

    const restar = () => {
        const votos_nuevo = votos - 1;

        //Evento para avisar al componete padre.
        onChangeVotos(votos, votos_nuevo);

        setVotos(votos_nuevo);
    }

    const handleVotos = (e) => {
        const votos_nuevo = Number(e.target.value);

        //Evento para avisar al componete padre.
        onChangeVotos(votos, votos_nuevo);

        setVotos(votos_nuevo);
    }

    return (
        <Card>
            <Card.Img style={{ maxWidth: '128px' }} variant="top" src={ img } />
            <Card.Body>
                <Card.Title> { nombre } </Card.Title>
                <Button onClick={sumar} variant="success" className='m-1'> + </Button>
                <Button disabled={votos < 1} onClick={restar} variant="danger" className='m-1'> - </Button>
                <Form.Control type="number" value={votos} onChange={handleVotos} />
            </Card.Body>
        </Card>
    )

}