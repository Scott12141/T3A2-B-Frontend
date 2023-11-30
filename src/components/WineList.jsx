import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function WineList(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} style={{maxHeight:350, maxWidth: 300}}/>
      <Card.Body>
        <Card.Title><strong>{props.colour}</strong></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
          <ListGroup.Item><u>{props.glass}</u></ListGroup.Item>
          <ListGroup.Item><u>{props.bottle}</u></ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Title><strong>Seclection of wines:</strong></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.type1}</ListGroup.Item>
          <ListGroup.Item>{props.type2}</ListGroup.Item>
          <ListGroup.Item>{props.type3}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default WineList;