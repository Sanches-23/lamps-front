import React from 'react';

// import Image from "./Image";
// import logo_footer from "../../styles/img/logo-footer.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__item footer__contacts">
                    <h3 className="">Контакти</h3>
                    <a href="src/components/utils/Footer#!">Телефон</a>
                    <a href="src/components/utils/Footer#!">Адреса</a>
                    <a href="src/components/utils/Footer#!">Email</a>
                </div>
                <div className="footer__item footer__schedule">
                    <h3 className="">Графік</h3>
                    <p>Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit, sead eaiusnod teanpor incidunt ut laborea eat dolorea nagna aliqua.</p>
                </div>

                {/*<div className="">*/}
                {/*    <a href="mailto:mukomela.oleg@gmail.com">mukomela.oleg@gmail.com</a>*/}
                {/*    <div className="">*/}
                {/*        <a href="tel:380678672400">+380678672400</a>*/}
                {/*        <a href="tel:380973402568">+380973402568</a>*/}
                {/*    </div>*/}
                {/*    <p>вул. Трудова 29, Хмельницький</p>*/}
                {/*</div>*/}
            </div>
        </footer>
    );
}

export default Footer;