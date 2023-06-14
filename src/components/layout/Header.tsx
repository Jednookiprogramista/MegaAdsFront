import React, {SyntheticEvent, useContext, useState} from "react";
import './Header.css'
import {Btn} from "../common/Btn";
import {SearchContext} from "../../contexts/search.contexts";
import {Link} from "react-router-dom";

export const Header = () => {
    const [inputVal, setInputVal] = useState('');
    const {search, setSearch} = useContext(SearchContext);

    const setSearchFromLocalState = (e: SyntheticEvent)=> {
        e.preventDefault();
        setSearch(inputVal);
    }

    return (

        <header>
            <Link to={'/'} style={{textDecoration: "none"}}>
            <h1 >
                <strong>Great</strong> advertisements
            </h1>
            </Link>

            <Btn  to="/add" text="Add advertisement"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/><Btn text="Search"/>
            </form>
        </header>
    )
}