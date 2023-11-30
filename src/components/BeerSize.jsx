import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import glasses from "../assets/glasses.jpg"


function BeerSize() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={glasses} style={{maxHeight:450, maxWidth: 300}}/>
        <Card.Body>
          <Card.Title style={{textAlign: 'inherit'}}><strong>Order beer in the following sizes:</strong></Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Pony (125ml) -$5.50</ListGroup.Item>
          <ListGroup.Item>Pot (285ml) -$8</ListGroup.Item>
          <ListGroup.Item>Schooner (425ml) -$13</ListGroup.Item>
          <ListGroup.Item>Pint (570ml) -$16</ListGroup.Item>
          <ListGroup.Item>Jug (1140ml) -$28</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
  
  export default BeerSize;