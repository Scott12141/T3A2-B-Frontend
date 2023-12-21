import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAccount(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    useEffect(() => {console.log("User Created")},[]);

    async function create(){
        try{
            console.log(email, name, phoneNumber, address);

            let result = await fetch(process.env.REACT_APP_BACKEND_URL + "/users/", 
            {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify({email: email, password: password, name: name, phoneNumber: phoneNumber, address: address})});
        
            let data = await result.json();

            console.log(data);

            setMessage(data.message)

            setTimeout(() => {
                navigate("/users");
            }, 3000)
            

        } catch (error) {
            console.error("Creation failed, Email already in use.", error.response.data.error);
            setMessage(error.response.data.error);
        }
    };


    return(
        <div className="home-section-create">
            <div className="createaccountbox">

                <h1>Create Your Account.</h1>

                    <div className="createformbox">
                        <label>Email: </label>
                        <input type="text" name="emailInput"  id="emailInput" required value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div className="createformbox">
                        <label>Password: </label>
                        <input type="password" name="passwordInput"  id="passwordInput" required value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className="createformbox">
                        <label>Name: </label>
                        <input type="text" name="nameInput"  id="nameInput" required value={name} onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div className="createformbox">
                        <label>Phone Number: </label>
                        <input type="text" name="phoneNumberInput"  id="phoneNumberInput" required value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                    </div>

                    <div className="createformbox-address">
                        <label>Address: </label>
                        <input type="text" name="addressInput"  id="addressInput" value={address} onChange={(event) => setAddress(event.target.value)} />
                    </div>

                    <button onClick={create}>
                        Create Account
                    </button>
                    {message && <p>{message}</p>}
            </div>
        </div>
    );
};