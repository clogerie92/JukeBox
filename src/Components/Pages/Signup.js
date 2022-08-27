import React from "react";
import "../Styles/Signup.css";
import { Link } from "react-router-dom";


const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h2>Signup</h2>
                <input placeholder="Username" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="text" />
                <button id="signup-btn" type="submit">Signup</button>
                <div className="signin-portal">
                    <div className="signin-option">
                        <p>Already have an account?</p>
                        <Link to="/signin"><button type="submit">Signin</button></Link>
                    </div>
                    <div className="guest-option">
                        <p>Or continue as guest</p>
                        <Link to="/dashboard"><button type="submit">Guest</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;