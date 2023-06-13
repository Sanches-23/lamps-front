import React from 'react';
import {useParams} from "react-router-dom";
import {useAsync} from 'react-async-hook';
import ChandeliersRelated from "./ChandeliersRelated";
import {DefaultAPIInstance} from "../../../api";
import Image from "../../../utils/Image";


const fetchChandeliers = async slug =>
    (await DefaultAPIInstance.get(`/products/slug/${slug}/`));

const ChandeliersSingleItem = () => {
    let params = useParams();
    const design = useAsync(fetchChandeliers, [params.slug]);

    return (
        <>{
            design.result && (<>
                <section className="">
                    <div className="">
                        <h1 className="">{design.result.data.title}</h1>
                        <div className="">
                            <div className="">
                                <Image image={design.result.data.main_photo} alt={'room'}/>
                            </div>
                            {/*{design.result.data.gallery && (design.result.data.gallery.map(item => (*/}
                            {/*        <div key={item.url} className="">*/}
                            {/*            <Image image={item.url} alt={'room'}/>*/}
                            {/*        </div>*/}
                            {/*    ))*/}
                            {/*)}*/}
                        </div>
                        <div className="">
                            <h2>Характеристика</h2>
                            <div className="">
                                <div className="">

                                    {design.result.data.description.split(/\r?\n/).map(item => (
                                        <p key={item}>{item}</p>
                                    ))}

                                </div>
                                <div className="">
                                    <button type="" className="">додати до колекції</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ChandeliersRelated related={design.result.data.related}/>
            </>)
        }
        </>
    )
}

export default ChandeliersSingleItem