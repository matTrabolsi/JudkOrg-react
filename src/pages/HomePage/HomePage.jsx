import React, {useEffect} from "react";
import Swiper from "swiper";
import MembersSwiper from "../../components/MembersSwiper/MembersSwiper";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function HomePage() {


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if(entry.isIntersecting){
                    entry.target.classList.add('show');
                } else{
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.card');
        hiddenElements.forEach((el) => observer.observe(el));


    }, []); 
    return (
        <main className="main">
            <div id="app-content">
                <div className="video__container">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="background__video"
                    >
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                    <div className="content">
                        <h1>WELCOME TO JDUK</h1>
                        <p>
                            A professional association dedicated to supporting and advancing
                            the careers of Jordanian doctors in the UK.
                        </p>
                    </div>
                </div>
                <div className="blog__section">
                    <div className="title">
                        <h2>News & Activities</h2>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <div className="image__section">
                                <img src="/src/assets/card1.jpeg" alt="" />
                            </div>
                            <div className="card__content">
                                <h3></h3>
                                <p>
                                    Chronic Diarrhea: What Are You Missing?
                                    <br />
                                    Join Gastro SpR Dr. Deeb Zahran for a session about diagnostic
                                    frameworks and evidence based management.
                                    <br />
                                    <br />
                                    📍 Zoom <br />
                                    🗓️ Sat, June 21 | 2 PM GMT
                                    <br />
                                    📜 Certificates provided
                                    <br />
                                    <br />
                                    <a href="https://t.co/eOyUPvGPJ6">Link</a>
                                </p>
                            </div>
                        </div>
                        <div className="card inline">
                            <div className="image__section inline__image">
                                <img src="/src/assets/card2.jpeg" alt="" />
                            </div>
                            <div className="card__content">
                                <h3></h3>
                                <p>
                                    Starting Internal Medicine training can be a steep learning
                                    curve — and not just medically. Join us for the session "Road
                                    to success: How to navigate your way through IMT with ease".
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    🕐 Time: 2PM
                                    <br />
                                    🗓️ Date: Saturday May 10th, 2025
                                    <br />
                                    📍 Venue: Zoom
                                    <br />
                                    <br />
                                    <a href="https://t.co/U7wIie6yeS">Link</a>
                                </p>
                            </div>
                        </div>
                        <div className="card inline">
                            <div className="image__section inline__image">
                                <img src="/src/assets/card3.jpeg" alt="" />
                            </div>
                            <div className="card__content">
                                <h3></h3>
                                <p>
                                    We are thrilled to invite medical students and doctors
                                    interested in pursuing speciality training in the UK to join
                                    us for our “Become A Trainee 2025” Conference.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    🕐 Time: 09:00 - 16:00 (GMT)
                                    <br />
                                    🗓️ Date: 23/2/2025
                                    <br />
                                    📍 Venue: Zoom
                                    <br />
                                    <br />
                                    <a href="https://t.co/k9Nq38FED5">Registration Link</a>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="image__section">
                                <img src="/src/assets/card4.jpeg" alt="" />
                            </div>
                            <div className="card__content">
                                <h3></h3>
                                <p>
                                    It is our pleasure to invite you to the Jordanian Doctors in
                                    the UK Association (JDUK) Second Annual Scientific Conference,
                                    taking place online on August 25th & 26th, 2024.
                                    <br />
                                    <br />
                                    🕐 Time: 09:00 - 16:00 (GMT)
                                    <br />
                                    🗓️ Date: 23/2/2025
                                    <br />
                                    <br />
                                    <a href="https://app.medall.org/event-listings/jordanian-doctors-in-the-united-kingdom-jduk-second-international-conference">
                                        Registration Link
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <MembersSwiper />

        </main>
        
        
    );
}

export default HomePage;