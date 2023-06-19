import React from "react";
import Image from "../../utils/Image";
// import pic_homepage_banners_big from '../../styles/images/pic-homepage-banners-big.png'
import icon_arrow_right from '../../styles/Icons/icon-arrow-right.svg'
import category_icon_chandeliers from '../../styles/Icons/category-icon-chandeliers.svg'
import category_icon_floor_lamps from '../../styles/Icons/category-icon-floor-lamps.svg'
import category_icon_lamps from '../../styles/Icons/category-icon-lamps.svg'
import category_icon_light_bulbs from '../../styles/Icons/category-icon-light-bulbs.svg'
import category_icon_sconces from '../../styles/Icons/category-icon-sconces.svg'
import category_icon_table_lamps from '../../styles/Icons/category-icon-table-lamps.svg'
import icon_search from "../../styles/Icons/icon-search.svg";
// import icon_arrow_right_grey from "../../styles/Icons/icon-arrow-right-grey.svg";
import ChandeliersMain from "../chandeliers/ChandeliersMain";


class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-experemental">
                <div className="homepage-main-banners-div">
                    <div className="homepage-banners-div">
                        <div className="homepage-banners-big-div">
                            <div className="homepage-banners-big-pic">
                                <a href="/" className="">
                                    <button className="homepage-banners-big-btn">
                                            <div className="div">До каталогу</div>
                                    </button>
                                </a>
                                <button className="homepage-banners-big-arrow-wrapper">
                                    <Image image={icon_arrow_right} alt="search" className="vector-icon"/>
                                </button>
                            </div>
                            <div className="homepage-banners-big-slider">
                                <div className="rectangle-parent">
                                    <div className="frame-child" />
                                    <div className="frame-item" />
                                </div>
                                <div className="arrow-right-svgrepocom" />
                            </div>
                        </div>
                        <div className="homepage-banners-small-div">
                            <div className="homepage-banners-small">
                                <div className="homepage-banners-small-top">
                                    <a href="/" className="">
                                        <button className="homepage-banners-small-top-btn">
                                            <div className="div1">До каталогу</div>
                                        </button>
                                    </a>
                                </div>
                                <div className="homepage-banners-small-down">
                                    <a href="/" className="">
                                       <button className="homepage-banners-small-top-btn">
                                            <div className="div1">До каталогу</div>
                                       </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-category-main-div">
                    <div className="homepage-category-items-div">
                        <div className="homepage-category-items">
                            <a href="/" className="">
                            <button className="homepage-chandeliers-category">
                                <Image image={category_icon_chandeliers} alt="search" className="vector-icon"/>
                                <div className="div3">Люстри</div>
                            </button>
                            </a>
                            <a href="/" className="">
                            <button className="homepage-chandeliers-category">
                                <Image image={category_icon_floor_lamps} alt="search" className="vector-icon"/>
                                <div className="div3">Настільні лампи</div>
                            </button>
                            </a>
                            <a href="/" className="">
                            <button className="homepage-chandeliers-category">
                                <Image image={category_icon_lamps} alt="search" className="vector-icon"/>
                                <div className="div3">Настільні лампи</div>
                            </button>
                            </a>
                            <a href="/" className="">
                            <button className="homepage-chandeliers-category">
                                <Image image={category_icon_table_lamps} alt="search" className="vector-icon"/>
                                <div className="div3">Настільні лампи</div>
                            </button>
                            </a>
                            <a href="/" className="">
                            <button className="homepage-chandeliers-category">
                                <Image image={category_icon_sconces} alt="search" className="vector-icon"/>
                                <div className="div3">Настільні лампи</div>
                            </button>
                            </a>
                            <a href="/" className="">
                            <button className="homepage-chandeliers-category">
                                <Image image={category_icon_light_bulbs} alt="search" className="vector-icon"/>
                                <div className="div3">Настільні лампи</div>
                            </button>
                            </a>
                        </div>
                    </div>
                    <div className="homepage-category-title">
                        <div className="div9">Категорії</div>
                    </div>
                </div>
                <div className="homepage-goods-main-div">


                        <ChandeliersMain></ChandeliersMain>

                    {/*!!!!!!!!! на дороботці*/}
                    {/*<div className="homepage-goods-list-of-btns">*/}
                    {/*    <button className="homepage-goods-list-of-btns-not-applyed">  /!*homepage-goods-list-of-btns-applyed - натиснуто*!/*/}
                    {/*        <div className="">1</div>*/}
                    {/*    </button>*/}
                    {/*    <button className="homepage-goods-list-of-btns-not-applyed">*/}
                    {/*        <div className="">2</div>*/}
                    {/*    </button>*/}
                    {/*    <button className="homepage-goods-list-of-btns-not-applyed">*/}
                    {/*        <div className="">3</div>*/}
                    {/*    </button>*/}
                    {/*    <button className="homepage-goods-list-of-btns-be">*/}
                    {/*        <div className="">...</div>*/}
                    {/*    </button>*/}
                    {/*    <button className="homepage-goods-list-of-btns-not-applyed">*/}
                    {/*        <div className="">5</div>*/}
                    {/*    </button>*/}
                    {/*    <button className="homepage-goods-list-of-btns-ne">*/}
                    {/*        <div className="">Вперед</div>*/}
                    {/*        <Image image={icon_arrow_right_grey} alt="" className="arrow-right-svgrepocom-icon"/>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    <div className="homepage-goods-article">
                        <div className="div9">Товари</div>
                    </div>
                    <div className="homepage-goods-articlesearch-">
                        <div className="homepage-goods-filter-article">
                            <div className="div21">Фільтр</div>
                        </div>
                        <div className="navbar-search-input">
                                <input className="header-search-input" placeholder="Пошук..." id=""/>
                            <button className="search-button">
                                <Image image={icon_search} alt="search" className="header-search-icon"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default HomePage