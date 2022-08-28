import React from "react";
import "../Styles/Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="signin-container">
            <div className="signin-form-container">
                <h2>Signin</h2>
                <input placeholder="Username" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="text" />
                <button id="signin-btn" type="submit">Signin</button>
                <div className="guest-portal">
                    <p>Don't have an account?</p> 
                    <Link to="/signup">
                        <div className="signup">Signup</div>
                    </Link>
                    <p>Or continue as guest</p>
                        <Link to="/dashboard">
                            <div className="guest">Guest</div>
                        </Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;