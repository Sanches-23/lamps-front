import React, {useState} from 'react';

import OrderMain from "../components/order/OrderMain";
import Image from "./Image";
import icon_MCQ from "../styles/Icons/icon-МСQ.svg";
import icon_basket from "../styles/Icons/icon-basket.svg";
import icon_search from "../styles/Icons/icon-search.svg";

const Navbar = () => {
    return (
        <div className="header-navbar">
            <button className="header-navbar-icon-logo-div">
                <div className="header-navbar-icon-logo">
                    <div className="header-navbar-div"></div>
                        <a href="/" className="header-navbar-header__logo-link">
                         <Image image={icon_MCQ} alt="MCQ" className="header-navbar-header__logo-pic"/>
                        </a>
                </div>
            </button>
            <div className="header-navbar-elements">
                <div className="header-navbar-search-input">
                    <input className="header-search-input" placeholder="Пошук..." id=""/> {/*!!!!!!!!!!!!!!!!!!!1*/}
                    <button className="header-search-button">
                        <Image image={icon_search} alt="search" className="header-search-icon"/>
                    </button>
                </div>


                <button className="">
                    <a href="/order" className=""> {/*!!!!!!!!!!!!!!!!!!!!11*/}
                        <Image image={icon_basket} alt="basket" className="header-navbar-icon-basket"/>
                    </a>
                </button>




            </div>
        </div>
    );
}

export default Navbar;