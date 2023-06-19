import React from 'react';
import {DefaultAPIInstance} from "../../api";
import ChandeliersItem from "./ChandeliersItem";
import ChandeliersFilter from "./ChandeliersFilter";
// import * as Console from "console";


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
            <ChandeliersFilter onFilterChange={makeFilter}/>
            <div id="Container">
                <div className="homepage-goods-mix">
                         {Chandeliers.map(item => (<ChandeliersItem key={item.id} item={item}/>))}
                </div>
            </div>
        </section>
    )
}

export default ChandeliersMain;