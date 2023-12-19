// eslint-disable-next-line no-unused-vars
import { useContext,  useEffect,  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { AuthContext } from '../components/AuthenticationContext';


export default function LogInPage(props){

    // eslint-disable-next-line no-unused-vars
    const [jwt, setJwt] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    //const { setToken } = useContext(AuthContext);
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        console.log("JWT value is:" + {jwt})
    }, [jwt]);

    async function login(){
        try {
            console.log(email, password);

            let result = await fetch(process.env.REACT_APP_BACKEND_URL + "/users/login", {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify({email: email, password: password})});
        
            let data = await result.json();

            console.log(data)

            setJwt(data.jwt)
            localStorage.setItem("token", data.jwt)

            setMessage(data.message)

            setTimeout(() => {
                navigate("/bookings");
            }, 3000)

        } catch(error) {
            console.error("Authentication failed:", error);
            //setJwt(null);
            //localStorage.removeItem("jwt");
            if (error.result && error.result.data) {
                setErrorMessage(error.result.data);
            } else {
                setErrorMessage("An unexpected error occured. Please try again.")
            }
        }    
    };

    return (
        <div className="loginbox">

            {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}{" "}

            <label>Email: </label>
            <input type="text" name="emailInput"  id="emailInput" value={email} onChange={(event) => setEmail(event.target.value)} />
            
            <label>Password: </label>
            <input type="password" name="passwordInput"  id="passwordInput" value={password} onChange={(event) => setPassword(event.target.value)} />

            <button onClick={login}>
                Log In
            </button>
            
            <div>
                If you are not already a registered user you can create a new account <Link to="/users/createaccount">here!</Link>
            </div>

            <div>
                {message && <p>{message}</p>}
            </div>

        </div>
    );
}