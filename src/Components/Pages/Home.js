import React from "react";
import "../Styles/Home.css";

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="about-jukebox">
                <figure className="jukebox-figure-1">
                  <img src="https://cdnb.artstation.com/p/assets/images/images/033/672/617/large/hugh-trombley-jukebox-front.jpg?1610278378" alt="jukebox pic" />
                </figure>
                <article className="about-article">
                  <h2>What is JukeBox?</h2>
                  <p>JukeBox is a web application built to help music lovers who are in search of playlists and their favorite artists tour dates. Users can also find select vinyl records in the shop and make a purchase.</p>
                </article>
            </div>
            <div className="about-api">
                <article className="about-article">
                  <h2>How does it work?</h2>
                  <p>JukeBox uses the Spotify and Ticketmaster API to curate playlists based on the user's input as well as upcoming concerts. This web app uses a React front that is paired with a MongoDB backend. Stripe was incorporated in the record shop for purchaes.</p>
                </article>
                <figure className="spotify-api-figure">
                  <img src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="spotify logo" />
                </figure>
                <figure className="ticketmaster-api-figure">
                  <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/136AB/production/_116313597_ticketmaster.jpg" alt="ticketmaster logo" />
                </figure>
            </div>
        </div>
    );
}

export default HomePage;