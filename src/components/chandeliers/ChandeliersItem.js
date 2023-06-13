import React from 'react';

import Image from "../../utils/Image";

class ChandeliersItem extends React.Component {
    render() {
        return (
            <div className="">
                <div className="">
                    <Image image={this.props.item.main_photo} alt={'products'}/>
                </div>
                <div className="ready-design__box">
                    <a href={"/products/"+this.props.item.slug} className="">
                        <p>{this.props.item.title}</p>
                        <p>{this.props.item.description}</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default ChandeliersItem