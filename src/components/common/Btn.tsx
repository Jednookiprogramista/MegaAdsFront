import React from 'react';

import './Btn.css'
import {Link} from "react-router-dom";
interface  Props {
    text: string;
    to?:string
}

export const Btn =(props:Props) => (
    props.to
    ? <Link  className="btn" to={props.to}>{props.text} </Link>
    : <button>{props.text}</button>
)