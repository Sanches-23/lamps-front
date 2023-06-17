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
import icon_basket from "../../styles/Icons/icon-basket.svg";
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

                                    {/*<img*/}
                                    {/*    className="homepage-banners-big-arrow-icon"*/}
                                    {/*    alt=""*/}
                                    {/*    src="/homepage-bannersbigarrow.svg"*/}
                                    {/*/>*/}
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
                    <div className="homepage-line-goods" />
                    <div className="homepage-goods-filter-div">
                        <div className="homepage-goods-filter-value-di">
                            <div className="wrapper">
                                <div className="div10">Ціна, грн.</div>
                            </div>
                            <div className="frame-parent">

                                {/*<input className="rectangle-group" placeholder="Пошук..."*/}
                                {/*       id=""/>*/}
                                <div className="rectangle-group">
                                    <div className="frame-inner" />
                                    <div className="div11">
                                        <span>Від</span>
                                        <span className="span">{` `}</span>
                                        <span className="span1">50</span>
                                    </div>
                                </div>
                                <div className="rectangle-container">
                                    <div className="frame-inner" />
                                    <div className="div12">
                                        <span>До</span>
                                        <span className="span2">{` `}</span>
                                        <span className="span1">100</span>
                                    </div>
                                </div>
                            </div>
                            {/*<img*/}     {/*ПОВЗУНОК*/}
                            {/*    className="homepage-goods-filter-value-di-child"*/}
                            {/*    alt=""*/}
                            {/*    src="/frame-17.svg"*/}
                            {/*/>*/}
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div13">Стилі</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                <Image image={icon_arrow_right} alt="search" className=""/>
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div13">Тип приміщення</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div13">Колір плафонів і підвісок</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div13">Тип плафону</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div13">Кількість ламп</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div18">Форма світильника</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div18">Тип джерела світла</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                        <div className="homepage-goods-filter-category">
                            <div className="container">
                                <div className="div18">Матеріал арматури</div>
                            </div>
                            <button className="arrow-right-svgrepocom1">
                                {/*<img className="vector-icon2" alt="" src="/vector2.svg" />*/}
                            </button>
                        </div>
                    </div>

                    <div className="homepage-goods-list">




                        <div className="homepage-goods-list-of-3-items">
                            <div className="homepage-goods-single-view">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic@2x.png"*/}
                                {/*/>*/}
                                {/*<Image image={category_icon_chandeliers} alt="search" className=""/>*/}

                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic1@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic2@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                        </div>
                        <div className="homepage-goods-list-of-3-items">
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic1@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic2@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                        </div>
                        <div className="homepage-goods-list-of-3-items">
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic1@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic2@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                        </div>
                        <div className="homepage-goods-list-of-3-items">
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic1@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic2@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                        </div>
                        <div className="homepage-goods-list-of-3-items">
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic1@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                            <div className="homepage-goods-single-view1">
                                {/*<img*/}
                                {/*    className="homepage-goods-single-pic-icon"*/}
                                {/*    alt=""*/}
                                {/*    src="/homepage-goods-singlepic2@2x.png"*/}
                                {/*/>*/}
                                <div className="homepage-goods-single-view-pri">
                                    <div className="div21">
                                        <span>{`Ціна: `}</span>
                                        <span className="span4">1000 грн</span>
                                    </div>
                                </div>
                                <div className="homepage-goods-single-view-nam">
                                    <div className="homepage-goods-single-view-nam1">
                                        <div className="div22">Товар “Назва”</div>
                                    </div>
                                    <div className="homepage-goods-single-view-ava">
                                        <div className="div23">У наявності</div>
                                    </div>
                                </div>
                                <button className="homepage-goods-single-view-btn">
                                    <div className="div24">В кошик</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-goods-list-of-btns">
                        <button className="homepage-goods-list-of-btns-1">
                            <div className="div81">{`1 `}</div>
                        </button>
                        <button className="homepage-goods-list-of-btns-2">
                            <div className="div81">2</div>
                        </button>
                        <button className="homepage-goods-list-of-btns-3">
                            <div className="div83">
                                <span className="span19">3</span>
                                <span className="span20">{` `}</span>
                            </div>
                        </button>
                        <button className="homepage-goods-list-of-btns-be">
                            <div className="div84">...</div>
                        </button>
                        <button className="homepage-goods-list-of-btns-4">
                            <div className="div85">4</div>
                        </button>
                        <button className="homepage-goods-list-of-btns-ne">
                            <div className="div86">
                                <span className="span19">Вперед</span>
                                <span className="span20">{` `}</span>
                            </div>
                            {/*<img*/}
                            {/*    className="arrow-right-svgrepocom-icon"*/}
                            {/*    alt=""*/}
                            {/*    src="/arrowright-svgrepocom.svg"*/}
                            {/*/>*/}
                        </button>
                    </div>
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

export default Base