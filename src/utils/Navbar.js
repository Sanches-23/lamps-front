import React from 'react';

import Image from "./Image";
import icon_MCQ from "../styles/Icons/icon-МСQ.svg";
import icon_basket from "../styles/Icons/icon-basket.svg";
import icon_search from "../styles/Icons/icon-search.svg";


const Navbar = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <a href="/" className="header__logo-link">
                        <Image image={icon_MCQ} alt="MCQ" className="header__logo-pic"/>
                    </a>
                </div>

                <div className="">
                    <button>


                        <Image image={icon_search} alt="search" className=""/>
                    </button>
                </div>

                <div className="">
                    <div className="">
                        <a href="/#" className="">
                            <Image image={icon_basket} alt="basket" className=""/>
                        </a>
                    </div>
                </div>

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

        </header>
    );
}

export default Navbar;