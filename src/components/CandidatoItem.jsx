import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CandidatoItem( {img, nombre} ){

    return (
        <Card>
            <Card.Img style={{ maxWidth: '128px' }} variant="top" src={ img } />
            <Card.Body>
                <Card.Title> { nombre } </Card.Title>
                <Button variant="success" className='m-1'> + </Button>
                <Button variant="danger" className='m-1'> - </Button>
            </Card.Body>
        </Card>
    )

}