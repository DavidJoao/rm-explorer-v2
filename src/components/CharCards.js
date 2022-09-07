import { Card, ListGroup } from 'react-bootstrap'

function CharCards( {image, name, gender, species, status} ){
    return(
    <Card style={{ width: '18rem', padding:'2%', margin:'3% auto 3% auto', backgroundColor:"rgba(255,255,255,0.6)", boxShadow:'0px 1px 31px 4px rgba(79,194,132,0.82)', border:'2px solid rgba(79,194,132,0.82)'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>{gender}</ListGroup.Item>
        <ListGroup.Item>{species}</ListGroup.Item>
        <ListGroup.Item>{status}</ListGroup.Item>
        </ListGroup>
    </Card>
    )
}

export default CharCards