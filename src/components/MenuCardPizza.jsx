import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import pizza from "../assets/pizza.jpg"

function MenuCardPizza() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza} style={{maxHeight:350, maxWidth: 300}}/>
      <Card.Body>
        <Card.Title><strong>Wood Fired Pizza</strong></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>BBQ Chicken - $22</ListGroup.Item>
        <ListGroup.Item>Prosciutto and Mozzarella - $22</ListGroup.Item>
        <ListGroup.Item>Goats cheese and caramelised onion - $22</ListGroup.Item>
        <ListGroup.Item>Pulled Pork - $22</ListGroup.Item>
        <ListGroup.Item>Garlic & Herb - $20</ListGroup.Item>
        <ListGroup.Item>Basil & Sun Dried Tomato - $22"</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default MenuCardPizza;