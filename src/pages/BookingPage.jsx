import MakeBookingButton from "../components/MakeBooking";
import ViewBookingButton from "../components/ViewBookings";

export default function BookingPage(props){

    

    return (
        <div className="bookingmain">
            <div>
                <h1>Book a table.</h1>
                <MakeBookingButton />
            </div>
            <div>
                <h1>View Bookings.</h1>
                <ViewBookingButton />
            </div>
            
        </div>
        
    )
}