import React, { useState } from "react";
import "../Styles/LandingPage.css";
import { validateEmail } from "../../utils/helpers";

const LandingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    console.log(inputType, target.id);

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
      console.log(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    } else if (!name || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    } else {
      setErrorMessage("");
    }

    alert(`Thank you for submitting your message, ${name}`);
    setName("");
    setEmail("");
    setMessage("");
    window.open(`mailto:${email}`);
  };
    return (
        <div className="landing-container">
                <p className="bio-container">
                    Hi! My name is Carl Logerie and I am a full stack software engineer. I recently graduated from the Rutgers Coding Bootcamp and wanted to test my skills by building a web application from scratch. As a music lover, I wanted to build a web app that curates playlists and tour dates of an artist that was searched. This web app also features a record store where users can purchase vinyl records and leave reviews if they have an account. If you have any questions about this web application or want to get in contact feel free to send me a message below!
                </p>
            <div className="contact-container">
                <form onSubmit={handleFormSubmit}>
                    <input placeholder="Name" type="text" name="name" value={name} onChange={handleInputChange} />
                    <input placeholder="Email" type="text" name="email" value={email} onChange={handleInputChange}  />
                    <textarea  placeholder="Message" name="message" id="" cols="30" rows="10" value={message} onChange={handleInputChange}></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            {errorMessage && (
                <div className="error-message">
                  <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default LandingPage;