import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import christmas from "../assets/christmas.jpg";

function ChristmasSpecial() {
  return (
    <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src={christmas} />
      <Card.Body>
        <Card.Title><strong><u>Christmas Special</u></strong></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item><strong><u>$85 per person (minimum of 4)</u></strong></ListGroup.Item>
      <ListGroup.Item> <strong><u>Entrees to share</u></strong></ListGroup.Item>
      <ListGroup.Item>Glazed smoked ham</ListGroup.Item>
      <ListGroup.Item>King prawns with a chilli lime mayonnaise</ListGroup.Item>
      <ListGroup.Item>Baked Camembert</ListGroup.Item>
      <ListGroup.Item> <strong><u>Main of your choice</u></strong></ListGroup.Item>
      <ListGroup.Item>Roast pork with crackling</ListGroup.Item>
      <ListGroup.Item>Roast turkey with cranberry sauce</ListGroup.Item>
      <ListGroup.Item>Each accompanied by, rosemary potatoes, heirloom carrots, broccolini and honey roasted pumpkin</ListGroup.Item>
      <ListGroup.Item> <strong><u>Tasting plate consisting of;</u></strong></ListGroup.Item>
      <ListGroup.Item>Mini plum pudding with custard</ListGroup.Item>
      <ListGroup.Item>Mini trifle</ListGroup.Item>
      <ListGroup.Item>Mini pavlova with berry compote</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
   

export default ChristmasSpecial;