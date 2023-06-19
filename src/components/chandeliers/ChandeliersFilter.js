import React from 'react';
import Image from "../../utils/Image";
import icon_arrow_right from "../../styles/Icons/icon-arrow-right.svg";
// import ChandeliersItem from "./ChandeliersItem";

class ChandeliersFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // styles: [],
            // colors: [],
            is_remote: [],
            availability: []
        };
        // this.styleHandler = this.styleHandler.bind(this)
        // this.colorHandler = this.colorHandler.bind(this)
        this.is_remoteHandler = this.is_remoteHandler.bind(this)
        this.availabilityHandler = this.availabilityHandler.bind(this)
    }

    handleStateChange = () => {
        let url = "&"
        Object.entries(this.state).forEach(
            ([key, value]) => {
                url += key+"="
                for (const item of value) {
                    url += item+","
                }
                url += '&'
            }
        )
        this.props.onFilterChange(url)
    }

    // async styleHandler(e) {
    //     const name = e.target.name
    //
    //     await this.setState((prevState) => ({
    //         styles: prevState.styles.includes(name)
    //             ? prevState.styles.filter((item) => item !== name)
    //             : [...prevState.styles, name]
    //     }), this.handleStateChange);
    // }

    // async colorHandler(e) {
    //     const name = e.target.name
    //
    //     await this.setState((prevState) => ({
    //         colors: prevState.colors.includes(name)
    //             ? prevState.colors.filter((item) => item !== name)
    //             : [...prevState.colors, name]
    //     }), this.handleStateChange);
    // }

    async is_remoteHandler(e) {
        const name = e.target.name
        await this.setState((prevState) => ({
            is_remote: prevState.is_remote.includes(name)
                ? prevState.is_remote.filter((item) => item !== name)
                : [...prevState.is_remote, name],
        }), this.handleStateChange);
    }

    async availabilityHandler(e) {
        const name = e.target.name
        await this.setState((prevState) => ({
            availability: prevState.availability.includes(name)
                ? prevState.availability.filter((item) => item !== name)
                : [...prevState.availability, name],
        }), this.handleStateChange);
    }
    // async handleHandler(e) {
    //     const name = e.target.name
    //
    //     await this.setState((prevState) => ({
    //         handles: prevState.handles.includes(name)
    //             ? prevState.handles.filter((item) => item !== name)
    //             : [...prevState.handles, name]
    //     }), this.handleStateChange);
    // }

     render() {

         return (
            <div className="">

                <div className="homepage-goods-filter-div">
                    <div className="homepage-goods-filter-value-di">
                        <div className="wrapper">
                            {/*<div className="div10">Ціна, грн.</div>*/}
                        </div>
                    </div>
                    <div className="homepage-goods-filter-category">
                        <div className="container">
                            <div className="homepage-div13">Віддалене керування</div>
                        </div>
                        <button className="arrow-right-svgrepocom1">
                            <Image image={icon_arrow_right} alt="search" className=""/>
                        </button>
                    </div>
                    <ul className="show-sorting">
                        <li className="">
                            <input type="checkbox" className="" id="true" name="true"
                                   value="1" onClick={this.is_remoteHandler}/>
                            <label htmlFor="true"
                                   className="">true</label>
                        </li>
                        <li className="">
                            <input type="checkbox" className="" id="false" name="false"
                                   value="2" onClick={this.is_remoteHandler}/>
                            <label htmlFor="false" className="">false</label>
                        </li>
                    </ul>

                    <div className="homepage-goods-filter-category">
                        <div className="container">
                            <div className="homepage-div13">В наявності</div>
                        </div>
                        <button className="arrow-right-svgrepocom1">
                            <Image image={icon_arrow_right} alt="search" className=""/>
                        </button>
                    </div>
                    <ul className="">
                        <li className="">
                            <input type="checkbox" className="" id="true" name="true"
                                   value="3" onClick={this.availabilityHandler}/>
                            <label htmlFor="true"
                                   className="">true</label>
                        </li>
                        <li className="">
                            <input type="checkbox" className="" id="false" name="false"
                                   value="4" onClick={this.availabilityHandler}/>
                            <label htmlFor="false" className="">false</label>
                        </li>
                    </ul>

                </div>


                <div className="ready-design__choice">
                    <h1 className="ready-design__title main-title">люстри</h1>

                    <div className="btns-sorting">
                        {/*<button className="btn-sorting">Стилі</button>*/}
                        {/*<button className="btn-sorting">Кольорова гама</button>*/}
                        {/*<button className="btn-sorting">Віддалене керування</button>*/}
                        {/*<button className="btn-sorting">Тип ручок</button>*/}
                    </div>

                    <div className="design-sorting">

                        {/*<ul className="show-sorting">*/}
                        {/*    <li className="show-sorting__item">*/}
                        {/*        <input type="checkbox" className="custom-checkbox" id="loft" name="Loft" value="1" onClick={this.styleHandler}/>*/}
                        {/*        <label htmlFor="loft" className="style-label custom-checkbox-label-1">Loft</label>*/}
                        {/*    </li>*/}
                        {/*    <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="bachelor" name="Bachelor"*/}
                        {/*                value="2" onClick={this.styleHandler}/>*/}
                        {/*         <label htmlFor="bachelor"*/}
                        {/*               className="style-label custom-checkbox-label-2">Bachelor</label>*/}
                        {/*     </li>*/}
                        {/*    <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="provence" name="Provence"*/}
                        {/*                value="3" onClick={this.styleHandler}/>*/}
                        {/*         <label htmlFor="provence"*/}
                        {/*                className="style-label custom-checkbox-label-3">Provence</label>*/}
                        {/*     </li>*/}
                        {/*     <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="scandinavian" name="Scandinavian"*/}
                        {/*                value="4" onClick={this.styleHandler}/>*/}
                        {/*         <label htmlFor="scandinavian"*/}
                        {/*                className="style-label custom-checkbox-label-4">Scandinavian</label>*/}
                        {/*     </li>*/}
                        {/*     <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="modern" name="Modern" value="5" onClick={this.styleHandler}/>*/}
                        {/*         <label htmlFor="modern" className="style-label custom-checkbox-label-5">Modern</label>*/}
                        {/*     </li>*/}
                        {/*     <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="hi-tech" name="Hi-Tech"*/}
                        {/*                value="6" onClick={this.styleHandler}/>*/}
                        {/*         <label htmlFor="hi-tech" className="style-label custom-checkbox-label-6">Hi-Tech</label>*/}
                        {/*     </li>*/}
                        {/*     <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="Mediterranian"*/}
                        {/*                name="Mediterranian" value="7" onClick={this.styleHandler}/>*/}
                        {/*         <label htmlFor="mediterranian"*/}
                        {/*                className="style-label custom-checkbox-label-7">Mediterranian</label>*/}
                        {/*     </li>*/}
                        {/*</ul>*/}

                        {/*<ul className="show-sorting">*/}
                        {/*     <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="dark" name="Темна" value="8" onClick={this.colorHandler}/>*/}
                        {/*         <label htmlFor="dark" className="style-label custom-checkbox-label-8">Темна</label>*/}
                        {/*     </li>*/}
                        {/*     <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="light" name="Світла" value="9" onClick={this.colorHandler}/>*/}
                        {/*         <label htmlFor="light" className="style-label custom-checkbox-label-9">Світла</label>*/}
                        {/*     </li>*/}
                        {/*     <li className="show-sorting__item">*/}
                        {/*         <input type="checkbox" className="custom-checkbox" id="colored" name="Кольорова"*/}
                        {/*                value="10" onClick={this.colorHandler}/>*/}
                        {/*         <label htmlFor="colored"*/}
                        {/*                className="style-label custom-checkbox-label-10">Кольорова</label>*/}
                        {/*     </li>*/}
                        {/* </ul>*/}

                        {/*<ul className="show-sorting">*/}
                        {/*    <li className="">*/}
                        {/*        <input type="checkbox" className="custom-checkbox" id="true" name="true"*/}
                        {/*               value="true" onClick={this.is_remoteHandler}/>*/}
                        {/*        <label htmlFor="true"*/}
                        {/*               className="">true</label>*/}
                        {/*    </li>*/}
                        {/*    <li className="">*/}
                        {/*        <input type="checkbox" className="custom-checkbox" id="false" name="false"*/}
                        {/*               value="false" onClick={this.is_remoteHandler}/>*/}
                        {/*        <label htmlFor="false" className="">false</label>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}

                         {/*<ul className="show-sorting">*/}
                         {/*    <li className="">*/}
                         {/*        <input type="checkbox" className="custom-checkbox" id="true-is_remoteHandler" name="є"*/}
                         {/*               value="true" onClick={this.is_remoteHandler}/>*/}
                         {/*        <label htmlFor="true"*/}
                         {/*               className="">є</label>*/}
                         {/*    </li>*/}
                         {/*    <li className="">*/}
                         {/*        <input type="checkbox" className="custom-checkbox" id="false-is_remoteHandler" name="нема"*/}
                         {/*               value="false" onClick={this.is_remoteHandler}/>*/}
                         {/*        <label htmlFor="false" className="">нема</label>*/}
                         {/*    </li>*/}
                         {/*</ul>*/}



                         {/*<ul className="show-sorting">*/}
                         {/*    <li className="show-sorting__item">*/}
                         {/*      <input type="checkbox" className="custom-checkbox" id="standard" name="Стандартні"*/}
                         {/*               value="14" onClick={this.handleHandler}/>*/}
                         {/*        <label htmlFor="standard"*/}
                         {/*               className="style-label custom-checkbox-label-14">Стандартні</label>*/}
                         {/*    </li>*/}
                         {/*    <li className="show-sorting__item">*/}
                         {/*        <input type="checkbox" className="custom-checkbox" id="integrated" name="Інтегровані"*/}
                         {/*               value="15" onClick={this.handleHandler}/>*/}
                         {/*        <label htmlFor="integrated"*/}
                         {/*               className="style-label custom-checkbox-label-15">Інтегровані</label>*/}
                         {/*    </li>*/}
                         {/*</ul>*/}

                     </div>

                     {/*<div className="option__bg basket__bg"></div>*/}

                </div>
            </div>
        )
    }
}

export default ChandeliersFilter