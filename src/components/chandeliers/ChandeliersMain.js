import React from 'react';
import {DefaultAPIInstance} from "../../api";
import ChandeliersItem from "./ChandeliersItem";
// import ChandeliersFilter from "./ChandeliersFilter";
// import Image from "../utils/Image";
// import arrow from "../../styles/img/icons/red__arrow.svg";
import chunkify from "../../utils/Chunkify";

const ChandeliersMain = () => {
    // const [filter, setFilter] = React.useState('')
    const [nextURL, setNextURL] = React.useState('')
    const [designsLeft, setChandeliersLeft] = React.useState([])
    const [designsRight, setChandeliersRight] = React.useState([])
    const [isPagination, setIsPagination] = React.useState(true)

    React.useEffect(() => {
        DefaultAPIInstance.get("/products/?")
            .then((response) => {

                updateChandeliers(response.data.results)

                if (response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/products/?', ''))
                    setIsPagination(true)
                } else {
                    setIsPagination(false)
                }
            })
            .catch(e => {
                console.log(e)
            });
    }); /*, [filter]*/

    const fetchNext = () => {
        DefaultAPIInstance.get("/products/?" + nextURL)
            .then((response) => {

                updateChandeliers(response.data.results)

                if (response.data.next !== null) {
                    setNextURL(response.data.next.replace('http://127.0.0.1:8000/api/v1/products/?', ''))
                } else {
                    setIsPagination(false)
                }
            })
            .catch(e => {
                console.log(e)
            });
    }

    const updateChandeliers = (data) => {
        const chunks = chunkify(data, 2, true)

        console.log(chunks[0])
        console.log(chunks[1])

        if (chunks[0]) {
            setChandeliersLeft(current => [...current, ...chunks[0]])
        } else {
            setChandeliersLeft(current => [...current, ...[]])
        }

        if (chunks[1]) {
            setChandeliersRight(current => [...current, ...chunks[1]])
        } else {
            setChandeliersRight(current => [...current, ...[]])
        }

    }

    const makeFilter = async (filterString) => {
        await setChandeliersLeft([])
        await setChandeliersRight([])
        // await setFilter(filterString)
    }

    return (
        <section className="ready-design">

            {/*<ChandeliersFilter onFilterChange={makeFilter}/>*/}

            <div className="ready-furniture-bg"></div>

            <div className="">
                <div className="">
                    <div className="">

                        <div className="">

                            {designsLeft.map(item => (<ChandeliersItem key={item.id} item={item}/>))}

                        </div>

                        <div className="">

                            {designsRight.map(item => (<ChandeliersItem key={item.id} item={item}/>))}

                        </div>

                    </div>


                    <div onClick={fetchNext} className=""
                         style={{visibility: isPagination ? 'visible' : 'hidden'}}>
                        <button className="" type="button">
                            <span>переглянути більше</span>
                            {/*<Image image={arrow}/>*/}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ChandeliersMain