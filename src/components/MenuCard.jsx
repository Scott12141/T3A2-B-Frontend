import Card from 'react-bootstrap/Card';

function MenuCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageUrl} style={{maxHeight:350, maxWidth: 300}}/>
      <Card.Body>
        <Card.Title><strong>{props.name}</strong></Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;