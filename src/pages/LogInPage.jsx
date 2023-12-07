import { useEffect, useState } from 'react';


export default function LogInPage(props){

    const [jwt, setJwt] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("JWT value is:" + {jwt})
    }, [jwt]);

    async function login(){
        console.log(email, password);

        let result = await fetch(process.env.REACT_APP_BACKEND_URL + "/users/login", {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify({email: email, password: password})});
    
        let data = await result.json();

        console.log(data)

        setJwt(data)
    }

    return (
        <div className="loginbox">

            <form className="loginform"> 
                <label>Email: </label>
                <input type="text" name="emailInput"  id="emailInput" value={email} onChange={(event) => setEmail(event.target.value)} />
                
                <label>Password: </label>
                <input type="password" name="passwordInput"  id="passwordInput" value={password} onChange={(event) => setPassword(event.target.value)} />

                <button onClick={login}>
                    Log In
                </button>
            </form>

            <div>
                If you are not already a registered user you can create a new account <a href="/users/createaccount">here!</a>
            </div>


        </div>
    );
}