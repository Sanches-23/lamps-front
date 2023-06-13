import React from 'react';

import Image from "./Image";
import icon_MC from "../styles/Icons/icon-МС.svg";
// import icon_MC from "src/styles/Icons/icon-МС.svg";
// import icon_MC from "src/styles/Icons/icon-МС.svg";
// import icon_MC from "src/styles/Icons/icon-МС.svg";

const Navbar = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__logo">
                    <a href="/" className="header__logo-link">
                        <Image image={icon_MC} alt="MCQ" className="header__logo-pic"/>
                    </a>

                    <div className="">

                    </div>
                    {/*<nav className="header__menu">*/}
                    {/*    <ul className="header__list">*/}
                    {/*        <li>*/}
                    {/*            <a href="/" className="header__link">Головна</a>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <a href="/chandeliers" className="">Люстри</a>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <a href="/about" className="">Про нас</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="">*/}
                    {/*            <a href="src/components/utils/Navbar#!" className="">Замовлення</a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                </div>
            </div>
        </header>
    );
}

export default Navbar;