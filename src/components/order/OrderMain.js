import React from 'react';
// import OrderItem from "./OrderItem";
import Image from "../../utils/Image";
import icon_trash from "../../styles/Icons/icon-trash.svg"
import icon_change_left from "../../styles/Icons/icon-basket_goods-item-change-left.svg"
import icon_change_right from "../../styles/Icons/icon-basket_goods-item-change-right.svg"
import icon_basket_close from "../../styles/Icons/icon-basket_close-btn.svg"
import pic_ex from "../../styles/Icons/category-icon-chandeliers.svg"


class OrderMain extends React.Component {
    render() {
        return (
            <div className="homepage-goods-copycopy">
                <div className="basket">
                    <div className="basket-article">
                        <div className="busket-div">Корзина</div>
                        <button className="basket-close-btn-div">
                            {/*<img className="vector-icon" alt="" src="/vector.svg" />*/}
                            <Image image={icon_basket_close} alt="basket" className=""/>
                        </button>
                    </div>
                    <div className="basket-submit-div">
                        <div className="basket-submit-value">
                            <div className="busket-div">
                                <span>9 500</span>
                                <span className="span"> грн</span>
                            </div>
                        </div>
                        <button className="basket-submit-btn">
                            <div className="busket-div2">Замовити</div>
                        </button>
                    </div>
                    <div className="busket-div3">Продовжити покупки</div>
                    <div className="basket-goods-item-main-div">
                        <div className="basket-goods-item-div">
                            <div className="basket-goods-item">
                                <div className="basket-goods-item-pic-div">
                                    <Image image={pic_ex} alt="basket" className=""/>
                                </div>
                                <div className="basket-goods-item-namearticle">
                                    <div className="busket-div4">Товар “Назва”</div>
                                    <div className="busket-div4">Артикул: AB-1234/1</div>
                                </div>
                                <div className="basket-goods-item-change-div">
                                    <button className="basket-goods-item-change-left">
                                        <Image image={icon_change_left} alt="basket" className=""/>
                                    </button>
                                    <div className="basket-goods-item-change-count">
                                        <div className="busket-div5">1</div>
                                    </div>
                                    <button className="basket-goods-item-change-left">
                                        <Image image={icon_change_right} alt="basket" className=""/>
                                    </button>
                                </div>
                                <div className="basket-goods-item-info">
                                    <div className="basket-goods-item-info-price">
                                        <div className="busket-div6">Ціна:</div>
                                    </div>
                                    <div className="basket-goods-item-info-value">
                                        <div className="busket-div">
                                            <span>4 750</span>
                                            <span className="span1"> грн</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="basket-goods-item-trash-btn">
                                    <Image image={icon_trash} alt="basket" className=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basket-goods-item-main-div1">
                        <div className="basket-goods-item-div">
                            <div className="basket-goods-item">
                                <div className="basket-goods-item-pic-div">
                                    <Image image={pic_ex} alt="basket" className=""/>
                                </div>
                                <div className="basket-goods-item-namearticle1">
                                    <div className="busket-div4">Товар “Назва”</div>
                                    <div className="busket-div4">Артикул: AB-1234/1</div>
                                </div>
                                <div className="basket-goods-item-change-div">
                                    <button className="basket-goods-item-change-left">
                                        <Image image={icon_change_left} alt="basket" className=""/>
                                    </button>
                                    <div className="basket-goods-item-change-count">
                                        <div className="busket-div5">1</div>
                                    </div>
                                    <button className="basket-goods-item-change-left">
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-left-child"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/rectangle-134.svg"*/}
                                        {/*/>*/}
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-right-icon1"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/basket-goodsitemchangerightbtn1.svg"*/}
                                        {/*/>*/}
                                        <Image image={icon_change_right} alt="basket" className=""/>

                                    </button>
                                </div>
                                <div className="basket-goods-item-info">
                                    <div className="basket-goods-item-info-price">
                                        <div className="busket-div6">Ціна:</div>
                                    </div>
                                    <div className="basket-goods-item-info-value">
                                        <div className="busket-div">
                                            <span>4 750</span>
                                            <span className="span1"> грн</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="basket-goods-item-trash-btn">
                                    {/*<img*/}
                                    {/*    className="trash-svgrepocom-icon"*/}
                                    {/*    alt=""*/}
                                    {/*    src="/trash-svgrepocom.svg"*/}
                                    {/*/>*/}
                                    <Image image={icon_trash} alt="basket" className=""/>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basket-goods-item-main-div2">
                        <div className="basket-goods-item-div">
                            <div className="basket-goods-item">
                                <div className="basket-goods-item-pic-div">
                                    {/*<img*/}
                                    {/*    className="basket-goods-item-pic-icon"*/}
                                    {/*    alt=""*/}
                                    {/*    src="/basket-goodsitempic@2x.png"*/}
                                    {/*/>*/}
                                    <Image image={pic_ex} alt="basket" className=""/>

                                </div>
                                <div className="basket-goods-item-namearticle">
                                    <div className="busket-div4">Товар “Назва”</div>
                                    <div className="busket-div4">Артикул: AB-1234/1</div>
                                </div>
                                <div className="basket-goods-item-change-div">
                                    <button className="basket-goods-item-change-left">
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-left-child"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/rectangle-133.svg"*/}
                                        {/*/>*/}
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-left-icon"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/basket-goodsitemchangeleftbtn.svg"*/}
                                        {/*/>*/}
                                        <Image image={icon_change_left} alt="basket" className=""/>

                                    </button>
                                    <div className="basket-goods-item-change-count">
                                        <div className="busket-div5">1</div>
                                    </div>
                                    <button className="basket-goods-item-change-left">
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-left-child"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/rectangle-134.svg"*/}
                                        {/*/>*/}
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-right-icon"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/basket-goodsitemchangerightbtn.svg"*/}
                                        {/*/>*/}
                                        <Image image={icon_change_right} alt="basket" className=""/>

                                    </button>
                                </div>
                                <div className="basket-goods-item-info">
                                    <div className="basket-goods-item-info-price">
                                        <div className="busket-div6">Ціна:</div>
                                    </div>
                                    <div className="basket-goods-item-info-value">
                                        <div className="busket-div">
                                            <span>4 750</span>
                                            <span className="span1"> грн</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="basket-goods-item-trash-btn">
                                    {/*<img*/}
                                    {/*    className="trash-svgrepocom-icon"*/}
                                    {/*    alt=""*/}
                                    {/*    src="/trash-svgrepocom1.svg"*/}
                                    {/*/>*/}
                                    <Image image={icon_trash} alt="basket" className=""/>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basket-goods-item-main-div3">
                        <div className="basket-goods-item-div">
                            <div className="basket-goods-item">
                                <div className="basket-goods-item-pic-div">
                                    {/*<img*/}
                                    {/*    className="basket-goods-item-pic-icon"*/}
                                    {/*    alt=""*/}
                                    {/*    src="/basket-goodsitempic@2x.png"*/}
                                    {/*/>*/}
                                    <Image image={pic_ex} alt="basket" className=""/>

                                </div>
                                <div className="basket-goods-item-namearticle">
                                    <div className="busket-div4">Товар “Назва”</div>
                                    <div className="busket-div4">Артикул: AB-1234/1</div>
                                </div>
                                <div className="basket-goods-item-change-div">
                                    <button className="basket-goods-item-change-left">
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-left-child"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/rectangle-133.svg"*/}
                                        {/*/>*/}
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-left-icon"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/basket-goodsitemchangeleftbtn.svg"*/}
                                        {/*/>*/}
                                        <Image image={icon_change_left} alt="basket" className=""/>

                                    </button>
                                    <div className="basket-goods-item-change-count">
                                        <div className="busket-div5">1</div>
                                    </div>
                                    <button className="basket-goods-item-change-left">
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-left-child"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/rectangle-134.svg"*/}
                                        {/*/>*/}
                                        {/*<img*/}
                                        {/*    className="basket-goods-item-change-right-icon1"*/}
                                        {/*    alt=""*/}
                                        {/*    src="/basket-goodsitemchangerightbtn2.svg"*/}
                                        {/*/>*/}
                                        <Image image={icon_change_right} alt="basket" className=""/>
                                    </button>
                                </div>
                                <div className="basket-goods-item-info">
                                    <div className="basket-goods-item-info-price">
                                        <div className="busket-div6">Ціна:</div>
                                    </div>
                                    <div className="basket-goods-item-info-value">
                                        <div className="busket-div">
                                            <span>4 750</span>
                                            <span className="span1"> грн</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="basket-goods-item-trash-btn">
                                    {/*<img*/}
                                    {/*    className="trash-svgrepocom-icon"*/}
                                    {/*    alt=""*/}
                                    {/*    src="/trash-svgrepocom1.svg"*/}
                                    {/*/>*/}
                                    <Image image={icon_trash} alt="basket" className=""/>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderMain;