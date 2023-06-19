import React from 'react';

import Image from "../../utils/Image";
// import ChandeliersMain from "./ChandeliersMain";

class ChandeliersItem extends React.Component {
    render() {
        return (
                <div className="homepage-goods-single-view1">
                    <div className="homepage-goods-single-pic-icon">
                        <a href={"/products/"+this.props.item.slug} className="">
                            <Image image={this.props.item.main_photo} alt={'products'} className=""/>
                        </a>
                    </div>
                    <div className="homepage-goods-single-view-pri">
                        <div className="homepage-div21">
                            <span className="homepage-span">{`Ціна: `}</span>
                            <span className="homepage-span4">{this.props.item.base_price} грн</span>
                        </div>
                    </div>
                    <div className="homepage-goods-single-view-nam">
                        <div className="homepage-goods-single-view-nam1">
                            <div className="homepage-div22">Товар {this.props.item.title} </div>
                        </div>
                        <div className="homepage-goods-single-view-ava">
                            <div className="homepage-div23">{this.props.item.availability ? 'У наявності' : 'Немає на складі'}</div>
                        </div>
                    </div>
                    <button className="homepage-goods-single-view-btn">
                        <div className="homepage-div24">В кошик</div>
                    </button>
                </div>
        )
    }
}

export default ChandeliersItem