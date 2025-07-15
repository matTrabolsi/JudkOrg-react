import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <div className="footer__icons">
                    <a target="_blank" href="mailto:info@jduk.org" className="footer__icon-link">
                        <i className="ri-mail-send-line"></i>
                    </a>
                    <a target="_blank" href="https://x.com/jduk_official" className="footer__icon-link">
                        <i className="ri-twitter-x-fill"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/jduk_official/" className="footer__icon-link">
                        <i className="ri-instagram-fill"></i>
                    </a>
                </div>
            </div>
            <div className="footer__details">
                <h2 className="footer__title">JDUK</h2>
                <p className="footer__description">
                    Established in 2023, with the aim of providing guidance & support to Jordanian doctors working in the UK.<br />
                    London, England
                </p>
            </div>
            <div className="footer__print">JDUK. All rights reserved.</div>
        </footer>
    );
}

export default Footer;