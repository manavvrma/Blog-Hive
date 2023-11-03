import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./login.css";


function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4006/login", {
                email,
                password
            });

            if (response.data === "exist") {
                history.push("/Home", { id: email });
            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Error: Wrong details");
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={submit}>
                <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="login-button" type="submit">Login</button>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link className="large-link" to="/signup">Signup Page</Link>
        </div>
    );
}

export default Login;
