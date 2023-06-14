import React from 'react';

// import Image from "./Image";
// import logo_footer from "../../styles/img/logo-footer.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header">
                <div className="footer-div">Контакти:</div>
                <div className="footer-div1">Графік:</div>
            </div>
            <div className="footer-column-header">
                <div className="footer-rectangle-parent">
                    <div className="footer-frame-child" />
                    <div className="footer-email">Телефон</div>
                </div>
                <div className="footer-rectangle-parent">
                    <div className="footer-frame-child" />
                    <div className="footer-email">Адреса</div>
                </div>
                <div className="footer-rectangle-parent">
                    <div className="footer-frame-child" />
                    <div className="footer-email">Email</div>
                </div>
            </div>
            <div className="footer-div4">
                <p className="footer-p">{`Робочі години: з 6:00 по 18:00. `}</p>
                <p className="footer-p">Робочі дні: Вт, Ср, Пт, Сб, Нд.</p>
                <p className="footer-p2">Вихідні: Пн, Чт.</p>
            </div>
            <div className="footer-column-info">
                <div className="footer-contacts">
                    <div className="footer-email">+380 (96) 790 9797</div>
                    <div className="footer-email">+380 (96) 468 7601</div>
                </div>
                <div className="footer-div7">Вулиця Геологів 1, Хмельницький</div>
                <div className="footer-email">Pasechnik23.2002@gmail.com</div>
            </div>
        </div>
    );
}

export default Footer;