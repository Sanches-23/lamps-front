import React from 'react';
import Image from "../../utils/Image";

import { useCookies } from "react-cookie";


export default function ChandeliersItem ({item})  {
    const [cookies, setCookie] = useCookies(['cart']);
    //
    // render() {
        return (
                <div className="homepage-goods-single-view1">
                    <div className="homepage-goods-single-pic-icon">
                        <a href={"/products/"+item.slug} className="">
                            <Image image={item.main_photo} alt={'products'} className=""/>
                        </a>
                    </div>
                    <div className="homepage-goods-single-view-pri">
                        <div className="homepage-div21">
                            <span className="homepage-span">{`Ціна: `}</span>
                            <span className="homepage-span4">{item.base_price} грн</span>
                        </div>
                    </div>
                    <div className="homepage-goods-single-view-nam">
                        <div className="homepage-goods-single-view-nam1">
                            <div className="homepage-div22">Товар {item.title} </div>
                        </div>
                        <div className="homepage-goods-single-view-ava">
                            <div className="homepage-div23">{item.availability ? 'У наявності' : 'Немає на складі'}</div>
                        </div>
                    </div>
                    <button className="homepage-goods-single-view-btn" onClick={() => {
                        let cart = cookies['cart']
                        cart.push(item)
                        setCookie('cart', cart)
                    }}>
                        <div className="homepage-div24">В кошик</div>
                    </button>
                </div>
        )
    // }
}

// export default ChandeliersItem