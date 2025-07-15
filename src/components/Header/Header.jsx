import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Make sure Link is imported

function Header() {
    const dropdownRef = useRef(null); // Ref for the dropdown item

    useEffect(() => {
        const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close'),
            navLinks = document.querySelectorAll('.nav__link');

        /* Menu show */
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });
        }

        /* Menu hidden */
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        }

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        });

        window.addEventListener("scroll", function () {
            const logo = document.getElementById("logo__scroll");
            const logoTitle = document.getElementById("title__scroll");
            if (window.scrollY > 50) {
                logo.classList.add("shrink");
                logoTitle.classList.add("shrink__title");
            } else {
                logo.classList.remove("shrink");
                logoTitle.classList.remove("shrink__title");
            }
        });

        // This handles closing dropdowns when clicking outside
        document.addEventListener('click', (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dropdownRef.current.classList.remove('active');
            }
        });

        // Cleanup function for useEffect
        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', () => {
                    navMenu.classList.add('show-menu');
                });
            }
            if (navClose) {
                navClose.removeEventListener('click', () => {
                    navMenu.classList.remove('show-menu');
                });
            }
            navLinks.forEach(link => {
                link.removeEventListener('click', () => {
                    navMenu.classList.remove('show-menu');
                });
            });
            window.removeEventListener("scroll", () => { });
            document.removeEventListener('click', () => { });
        };

    }, []);

    const toggleAboutUsDropdown = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (dropdownRef.current) {
            dropdownRef.current.classList.toggle('active');
        }
    };

    return (
        <header className="header" id="header">
            <div className="container logo__section">
                <Link to="/">
                    <img id="logo__scroll" src="/logo.jpeg" className="logo" alt="Association Logo" />
                </Link>
                <Link to="/" id="title__scroll" className="logo__title">
                    The Association of Jordanian Doctors in the United Kingdom
                </Link>
                {/* SVG for Jordan flag */}
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="52" viewBox="0 0 32 32">
                    <path fill="#fff" d="M1 11H31V21H1z"></path>
                    <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path>
                    <path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#357942"></path>
                    <path d="M2.316,26.947l13.684-10.947L2.316,5.053c-.803,.732-1.316,1.776-1.316,2.947V24c0,1.172,.513,2.216,1.316,2.947Z" fill="#be2a2c"></path>
                    <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                    <path d="M6.787,13.276l-.621,1.577-1.617-.494,.844,1.466-1.402,.956,1.681,.255-.127,1.689,1.243-1.147,1.251,1.147-.127-1.689,1.673-.255-1.394-.956,.844-1.466-1.617,.494-.629-1.577Z" fill="#fff"></path>
                    <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
                {/* SVG for UK flag */}
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="52" viewBox="0 0 32 32">
                    <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
                    <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path>
                    <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path>
                    <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path>
                    <path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path>
                    <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                    <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                    <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
                    <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect>
                    <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path>
                    <path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path>
                    <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
                    <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
                </svg>
            </div>
            <nav className="nav container">
                <a href="#" className="nav__toggle"></a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="/" className="nav__link">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav__item nav__item--has-dropdown" ref={dropdownRef}> {/* Add ref here */}
                            <a className="nav__link1" onClick={toggleAboutUsDropdown}> {/* Call the dedicated function */}
                                <span>
                                    About us <i className="ri-arrow-down-s-line dropdown-icon"></i>
                                </span>
                            </a>
                            <ul className="nav__dropdown">
                                <li>
                                    <Link to="/mission" className="nav__link nav__dropdown-link">
                                        <span>Our Mission</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/members" className="nav__link nav__dropdown-link">
                                        <span>Meet the Team</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__item">
                            <Link to="/news" className="nav__link">
                                <span>News & Activities</span>
                            </Link>
                        </li>
                        <li hidden className="nav__item nav__item--has-dropdown">
                            <a className="nav__link1" onClick={() => { /* Toggle dropdown visibility */ }}>
                                <span>
                                    Conference<i className="ri-arrow-down-s-line dropdown-icon"></i>
                                </span>
                            </a>
                            <ul className="nav__dropdown">
                                <li>
                                    <Link to="/conference2023" className="nav__link nav__dropdown-link">
                                        <span>Conference 2023</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/conference2024" className="nav__link nav__dropdown-link">
                                        <span>Conference 2024</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__item">
                            <Link to="/conference" className="nav__link">
                                <span>Conference</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="/electives" className="nav__link">
                                <span>Electives</span>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <a href="https://buy.stripe.com/test_00waEQ3gS3QRdlB6oO8Ra00" className="nav__link" target="_blank" rel="noopener noreferrer">
                                <span>Join us now</span>
                            </a>
                        </li>
                        <li className="nav__item" hidden>
                            <Link to="/contact" className="nav__link">
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-large-line"></i>
                    </div>
                    <div className="nav__social1">
                        <a target="_blank" href="https://x.com/jduk_official" className="nav__social-link" rel="noopener noreferrer">
                            <i className="ri-twitter-x-fill"></i>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/jduk_official/" className="nav__social-link" rel="noopener noreferrer">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="mailto:info@jduk.org" target="_blank" className="nav__social-link" rel="noopener noreferrer">
                            <i className="ri-mail-send-line"></i>
                            <span>info@jduk.org</span>
                        </a>
                    </div>
                </div>
                <div className="nav__social">
                    <a target="_blank" href="https://x.com/jduk_official" className="nav__social-link" rel="noopener noreferrer">
                        <i className="ri-twitter-x-fill"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/jduk_official/" className="nav__social-link" rel="noopener noreferrer">
                        <i className="ri-instagram-fill"></i>
                    </a>
                    <a href="mailto:info@jduk.org" target="_blank" className="nav__social-link" rel="noopener noreferrer">
                        <i className="ri-mail-send-line"></i>
                        <span>info@jduk.org</span>
                    </a>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;