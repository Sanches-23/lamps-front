import React from 'react';

// import Image from "./Image";
// import logo from "../../styles/img/logo.svg";
// import shopping_bag from "../../styles/img/icons/shopping-bag.png";

const Navbar = () => {
    return (
        <header className="">
            <div className="">
                <div className="">
                    <a href="/" className="">
                        {/*<Image image={logo} alt="StudioKuhon"/>*/}
                    </a>
                    <div className="">
                        <span></span>
                    </div>
                    <div className="">
                        <a href="src/components/utils/Navbar#!" className="">
                            {/*<Image image={shopping_bag} alt="shopping"/>*/}
                        </a>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__list">
                            <li>
                                <a href="/" className="header__link">Головна</a>
                            </li>
                            <li>
                                <a href="/chandeliers" className="">Люстри</a>
                            </li>
                            <li>
                                <a href="/about" className="">Про нас</a>
                            </li>
                            <li className="">
                                <a href="src/components/utils/Navbar#!" className="">Замовлення</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;