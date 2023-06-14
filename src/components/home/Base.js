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
// import PromoSlider from "./PromoSlider";
// import PromoSlider from "./PromoSlider.js";


class Base extends React.Component {
    render() {
        return (
            // <div>
            //     <section>
            //         <div class='div-text'>
            //             <h1>ААААААААААААААААА</h1>
            //         </div>
            //     </section>
            // </div>
            <div className="homepage-top">
                <div className="homepage-top-main">
                    <div className="homepage-main-banners-div">
                        <div className="homepage-banners-div">
                            <div className="homepage-banners-big-div">
                                <div className="homepage-banners-big-pic">
                                    <button className="homepage-banners-big-btn">
                                        <div className="div">До каталогу</div>
                                    </button>
                                    <button className="homepage-banners-big-arrow-btn">
                                        <Image image={icon_arrow_right} alt="pic" className="homepage-banners-big-arrow-icon"/>
                                    </button>
                                </div>
                                <div className="homepage-banners-big-slider-di">
                                    <div className="homepage-banners-big-slider">
                                        <div className="homepage-banners-big-slider-bt" />
                                        <div className="homepage-banners-big-slider-li" />
                                    </div>
                                    <div className="arrow-right-svgrepocom" />
                                </div>
                            </div>
                            <div className="homepage-banners-small-div">
                                <div className="homepage-banners-small">
                                    <div className="homepage-banners-small-top">
                                        <button className="homepage-banners-small-top-btn">
                                            <div className="div1">До каталогу</div>
                                        </button>
                                    </div>
                                    <div className="homepage-banners-small-down">
                                        <button className="homepage-banners-small-top-btn">
                                            <div className="div1">До каталогу</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-category-main-div">
                        <div className="homepage-category-items-div">
                            <div className="homepage-category-items">
                                <button className="homepage-chandeliers-category">
                                    <Image image={category_icon_chandeliers} alt="pic" className="strokes-icon"/>
                                    <div className="div3">Люстри</div>
                                </button>
                                <button className="homepage-table-lamps-category">
                                    <Image image={category_icon_floor_lamps} alt="pic" className="vector-icon"/>
                                    <div className="div3">Настільні лампи</div>
                                </button>
                                <button className="homepage-floor-lamps-category">
                                    <Image image={category_icon_lamps} alt="pic" className="lamp-svgrepo-com-1-icon"/>
                                    <div className="div3">Настільні лампи</div>
                                </button>
                                <button className="homepage-lamps-category">
                                    <Image image={category_icon_light_bulbs} alt="pic" className="floor-lamp-svgrepo-com-icon"/>
                                    <div className="div3">Настільні лампи</div>
                                </button>
                                <button className="homepage-sconces-category">
                                    <Image image={category_icon_sconces} alt="pic" className="vector-icon1"/>
                                    <div className="div3">Настільні лампи</div>
                                </button>
                                <button className="homepage-light-bulbs-category">
                                    <Image image={category_icon_table_lamps} alt="pic" className="group-icon"/>
                                    <div className="div3">Настільні лампи</div>
                                </button>
                            </div>
                        </div>
                        <div className="homepage-category-title-div">
                            <div className="div9">Категорії</div>
                        </div>
                    </div>
                </div>
                <div className="homepage-line-goods" />
            </div>



        )
    }
}

export default Base