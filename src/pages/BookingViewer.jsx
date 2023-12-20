// import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import ReturnHomeButton from "../components/ReturnHome";
import { Col, Container, Row } from "react-bootstrap";
import BookingCard from "../components/BookingCard";

export default function BookingViewer(props){

    const [bookingResults, setbookingResults] = useState([]);

    useEffect(() => {
        console.log("Fetching booking data....");

        async function apiRequest(){
            let response = await fetch(process.env.REACT_APP_BACKEND_URL + "/bookings/all")

            let responseData = await response.json();

            setbookingResults(responseData.bookings);

            console.log(responseData)
        }
        
        apiRequest();

    }, []);

    return (
        <div className="home-section">
            <h1>Booking Viewer</h1>
            
            <Container fluid className="mx-auto">
                <h2><u>TMDB Dining Reservations</u></h2>
                <Row >
                    {bookingResults.map(result => {
                        return <Col className="my-2">
                        <BookingCard key={result.id} 
                        date={result.date}
                        name={result.name}
                        email={result.email}
                        phoneNumber={result.phoneNumber}
                        bookingSize={result.bookingSize}
                        specialRequirements={result.specialRequirements} 
                         />
                        </Col>
                })}
                </Row>
                
            </Container>
            
            <div className="button-row">
                <ReturnHomeButton />

            </div>
            
        </div>
    )
}