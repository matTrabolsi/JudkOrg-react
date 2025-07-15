import React from "react";

function MissionPage() {
    return (
        <main className="main">
            <div id="app-content">
                <div className="about__container">
                    <div className="about__heading">
                        <h1>Our Mission</h1>
                    </div>
                    <div className="wrapper">
                        <div className="about__content">
                            <h2>Empowering Jordanian Doctors in the UK</h2>
                            <p>
                                Established in 2023, the Association of
                                Jordanian Doctors in the UK is a dynamic
                                association dedicated to providing ongoing
                                support and guidance to Jordanian doctors in
                                the United Kingdom. As a non-profit
                                unincorporated association, JDUK comprises
                                medical professionals from diverse specialties,
                                united in the mission of assisting members in
                                advancing their careers and realizing their
                                professional aspirations. Through collaborative
                                efforts, our goal is to enhance the opportunities
                                and professional journey of Jordanian doctors
                                within the UK's healthcare industry.
                            </p>
                            <a href="https://buy.stripe.com/test_00waEQ3gS3QRdlB6oO8Ra00" className="about__btn">Join Us Today</a>
                        </div>
                        <div className="about__image">
                            <img src="/doctor.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MissionPage;