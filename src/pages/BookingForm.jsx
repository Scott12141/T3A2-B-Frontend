import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function BookingForm(props){

    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bookingSize, setBookingSize] = useState("");
    const [specialRequirements, setSpecialRequirements] = useState("");
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    useEffect(() => {},[]);

    async function createBooking(){
        try{
            console.log(date, name, email, phoneNumber, bookingSize, specialRequirements);

            let result = await fetch(process.env.REACT_APP_BACKEND_URL + "/bookings/", 
            {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify({date: date, name: name, email: email, phoneNumber: phoneNumber, bookingSize: bookingSize, specialRequirements: specialRequirements})});
        
            let data = await result.json();

            console.log(data);

            setMessage(data.message)

            setTimeout(() => {
                navigate("/bookings");
            }, 3000)
            

        } catch (error) {
            console.error("Booking failed.", error.response.data.error);
            setMessage(error.response.data.error);
        }
    };


    return(
        <div className="createbookingbox">
            <h1>Make a booking.</h1>

                <label>Date: </label>
                <input type="text" name="dateInput"  id="dateInput" required value={date} onChange={(event) => setDate(event.target.value)} />

                <label>Name: </label>
                <input type="text" name="nameInput"  id="nameInput" required value={name} onChange={(event) => setName(event.target.value)} />
            
                <label>Email: </label>
                <input type="text" name="emailInput"  id="emailInput" required value={email} onChange={(event) => setEmail(event.target.value)} />
                
                <label>Phone Number: </label>
                <input type="text" name="phoneNumberInput"  id="phoneNumberInput" required value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />

                <label>Booking Size: </label>
                <input type="text" name="bookingSizeInput"  id="bookingSizeInput" value={bookingSize} onChange={(event) => setBookingSize(event.target.value)} />

                <label>Special requirements/Comments: </label>
                <input type="text" name="specialRequirementsInput"  id="specialRequirementsInput" value={specialRequirements} onChange={(event) => setSpecialRequirements(event.target.value)} />

                <button onClick={createBooking}>
                    Create Booking
                </button>
                {message && <p>{message}</p>}
        </div>
    );
};

