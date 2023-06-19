import React from 'react';
import {DefaultAPIInstance} from "../../api";
import ChandeliersItem from "./ChandeliersItem";
import ChandeliersFilter from "./ChandeliersFilter";
// import Image from "../../utils/Image";
// import icon_arrow_right from "../../styles/Icons/icon-arrow-right.svg";

const ChandeliersMain = () => {
    const [filter, setFilter] = React.useState('')
    const [Chandeliers, setChandeliers] = React.useState([])

    React.useEffect(() => {
        DefaultAPIInstance.get("/products/?")
            .then((response) => {
                setChandeliers(current => [...current, ...response.data])
            })
            .catch(e => {console.log(e)});
    }, [filter]);

    const makeFilter = async (filterString) => {
        await setChandeliers([])
        await setFilter(filterString)
    }

    return (
        <section className="">
            <div className="homepage-line-goods" />

            <ChandeliersFilter onFilterChange={makeFilter}/>

            <div className="homepage-goods-list">
                <div id="Container">
                    <div className="homepage-goods-mix">
                             {Chandeliers.map(item => (<ChandeliersItem key={item.id} item={item}/>))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChandeliersMain;