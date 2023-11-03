import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./login.css";


function Signup() {
    const navigate = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4006/signup", {
                email,
                password
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                navigate("/home", { state: { id: email } });
            }
        } catch (error) {
            alert("Error: Wrong details");
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h1>Signup</h1>
            <form className="login-form" onSubmit={submit}>
                <input className="login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="login-button" type="submit">Signup</button>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link className="large-link" to="/">Login Page</Link>
        </div>
    );
}

export default Signup;
