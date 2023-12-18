import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BookingCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>Booking Date: {props.date}</ListGroup.Item>
                <ListGroup.Item>Booking Name: {props.name}</ListGroup.Item>
                <ListGroup.Item>Booking Email: {props.email}</ListGroup.Item>
                <ListGroup.Item>Booking Phone Number: {props.phoneNumber}</ListGroup.Item>
                <ListGroup.Item>Booking Size: {props.bookingSize}</ListGroup.Item>
                <ListGroup.Item>Special Requirements/Comments: {props.specialRequirements}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
  );
}

export default BookingCard;