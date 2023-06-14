import React from 'react';

// import Image from "./Image";
// import logo_footer from "../../styles/img/logo-footer.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header">
                <div className="div">Контакти:</div>
                <div className="div1">Графік:</div>
            </div>
            <div className="footer-column-header">
                <div className="rectangle-parent">
                    <div className="frame-child" />
                    <div className="email">Телефон</div>
                </div>
                <div className="rectangle-parent">
                    <div className="frame-child" />
                    <div className="email">Адреса</div>
                </div>
                <div className="rectangle-parent">
                    <div className="frame-child" />
                    <div className="email">Email</div>
                </div>
            </div>
            <div className="div4">
                <p className="p">{`Робочі години: з 6:00 по 18:00. `}</p>
                <p className="p">Робочі дні: Вт, Ср, Пт, Сб, Нд.</p>
                <p className="p2">Вихідні: Пн, Чт.</p>
            </div>
            <div className="footer-column-info">
                <div className="footer-contacts">
                    <div className="email">+380 (96) 790 9797</div>
                    <div className="email">+380 (96) 468 7601</div>
                </div>
                <div className="div7">Вулиця Геологів 1, Хмельницький</div>
                <div className="email">Pasechnik23.2002@gmail.com</div>
            </div>
        </div>
    );
}

export default Footer;