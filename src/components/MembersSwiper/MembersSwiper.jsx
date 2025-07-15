import React, {useEffect} from "react";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

function MembersSwiper() {
        useEffect(() => {
        // eslint-disable-next-line no-unused-vars
        const swiper = new Swiper('.slider__wrapper', {
        loop: true, 
        grabCursor: true,
        spaceBetween: 30,

        pagination:{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Crucial for responsiveness:
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
        });

    }, []); 
    return (
        <div className="members__all" id="homePageMembersSwiper">
            <img src="/src/assets/memback.jpg" alt="" className="members__img" />
            <div className="members__section">
                <div className="title">
                    <h2>Board Members</h2>
                </div>
            </div>
            <div className="memeber__body">
                <div className="memeber__container swiper">
                    <div className="slider__wrapper">
                        <div className="card__list swiper-wrapper">
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Dr. Zaid Sabe Eleish</h2>
                                <p className="user__details">General Practitioner (Family Medicine Consultant)</p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Mr. Ahmad Alaqqad</h2>
                                <p className="user__details">Senior Urology Trainee</p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Mr. Taher Faydi</h2>
                                <p className="user__details">Country advisor (Jordan) for the Royal College of Surgeons</p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Dr. Rakan Khalifah</h2>
                                <p className="user__details">Consultant in Emergency Medicine</p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Dr. Tariq Altal</h2>
                                <p className="user__details"></p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Dr. Haitham Tumeh</h2>
                                <p className="user__details"></p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Dr. Ghaith Gsous</h2>
                                <p className="user__details"></p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor2.avif" alt="" className="user__img" />
                                <h2 className="user__name">Dr. Khalid AlJboor</h2>
                                <p className="user__details"></p>
                                <button hidden className="message__button">Message</button>
                            </div>
                            <div className="card__item swiper-slide">
                                <img src="/src/assets/doctor1.jpeg" alt="" className="user__img" />
                                <h2 className="user__name">Dr. Hiba Shanti</h2>
                                <p className="user__details">General Practitioner (Family Medicine Consultant)</p>
                                <button hidden className="message__button">Message</button>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MembersSwiper;