import React from 'react';

// import Image from "./Image";
// import logo_footer from "../../styles/img/logo-footer.svg";

const Footer = () => {
    return (
        // <footer className="footer">
        //     <div className="footer__wrapper">
        //         <div className="footer__item footer__contacts">
        //             <h3 className="">Контакти</h3>
        //             <a href="src/components/utils/Footer#!">Телефон</a>
        //             <a href="src/components/utils/Footer#!">Адреса</a>
        //             <a href="src/components/utils/Footer#!">Email</a>
        //         </div>
        //         <div className="footer__item footer__schedule">
        //             <h3 className="">Графік</h3>
        //             <p>Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit, sead eaiusnod teanpor incidunt ut laborea eat dolorea nagna aliqua.</p>
        //         </div>
        //
        //         {/*<div className="">*/}
        //         {/*    <a href="mailto:mukomela.oleg@gmail.com">mukomela.oleg@gmail.com</a>*/}
        //         {/*    <div className="">*/}
        //         {/*        <a href="tel:380678672400">+380678672400</a>*/}
        //         {/*        <a href="tel:380973402568">+380973402568</a>*/}
        //         {/*    </div>*/}
        //         {/*    <p>вул. Трудова 29, Хмельницький</p>*/}
        //         {/*</div>*/}
        //     </div>
        // </footer>

        //HOMEPAGE
        // <footer className="frameFooter">
        //     <div className="wrapper87">
        //         <div className="div107">Контакти:</div>
        //     </div>
        //     <div className="wrapper88">
        //         <div className="div107">Графік:</div>
        //     </div>
        //     <div className="frameParent42">
        //         <div className="rectangleParent18">
        //             <div className="frameChild20"/>
        //             <div className="email">Телефон</div>
        //         </div>
        //         <div className="rectangleParent18">
        //             <div className="frameChild20"/>
        //             <div className="email">Адреса</div>
        //         </div>
        //         <div className="rectangleParent18">
        //             <div className="frameChild20"/>
        //             <div className="email">Email</div>
        //         </div>
        //     </div>
        //     <div className="frameParent43">
        //         <div className="wrapper7">
        //             <div className="email">+380 (50) 5215 987</div>
        //         </div>
        //         <div className="wrapper7">
        //             <div className="email">+380 (50) 5215 987</div>
        //         </div>
        //     </div>
        //     <div className="div113">Вулиця Назва 1, Хмельницький</div>
        //     <div className="nazvagmailcom">nazva@gmail.com</div>
        //     <div className="loreanIpsunDolor">
        //         Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit, sead
        //         eaiusnod teanpor incidunt ut laborea eat dolorea nagna aliqua.
        //     </div>
        // </footer>

        <footer className="footer">
            <div className="footer-header">
                <div className="div">Контакти:</div>
                <div className="div1">Графік:</div>
            </div>
            <div className="footer-column-header">
                <div className="rectangle-parent">
                    <div className="frame-child"></div>
                    <div className="email">Телефон</div>
                </div>
                <div className="rectangle-parent">
                    <div className="frame-child"></div>
                    <div className="email">Адреса</div>
                </div>
                <div className="rectangle-parent">
                    <div className="frame-child"></div>
                    <div className="email">Email</div>
                </div>
            </div>
            <div className="div4">
                <p className="p">Робочі години: з 6:00 по 18:00.</p>
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
        </footer>

    );
}

export default Footer;