import MakeBookingButton from "../components/MakeBooking";
import ViewBookingButton from "../components/ViewBookings";

export default function BookingPage(props){

    

    return (
        <div className="home-section">
            <div className="bookingmain">
                <div className="bookdivs">
                    <h1>Book a table.</h1>
                    <MakeBookingButton />
                </div>
                <div className="bookdivs">
                    <h1>View Bookings.</h1>
                    <ViewBookingButton />
                </div>
            </div>
        </div>
        
    )
}