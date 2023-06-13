import React from 'react';
import Image from "../../../utils/Image";
// import Slider from "react-slick";

class ChandeliersRelated extends React.Component {
    render() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 300,
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     swipeToSlide: true,
        //     centerMode: true,
        //     variableWidth: true,
        //     adaptiveHeight: true,
        //     arrows: false,
        // }
        return (
            <div className="">
                <section className="">

                    <div className="">
                        <h2 className="">Схожі проекти</h2>
                    </div>

                    {/*<Slider {...settings} className="variable-width dots_slick">*/}
                        <div className="">
                        {this.props.related &&(
                            this.props.related.map(item => (
                                <a key={item.id} href={"/products/" + item.slug} className="">
                                    <div className="">
                                        <Image image={item.main_photo}/>
                                    </div>
                                    <p>{item.title}</p>
                                </a>
                            ))
                        )}
                        </div>
                    {/*</Slider>*/}

                </section>
            </div>
        )
    }
}

export default ChandeliersRelated