import React from "react";
import './kafelek.css'

const Kafelek = (props) => (
    <div className="kafelek">
        <img src={props.source}></img>
        <div className="data">
            <h2>{props.title}</h2>
            <p>odcień: {props.shade}</p>
            <p><b>Cena {props.price}</b></p>
            <p className="tag"><b>{props.tag}</b></p>
            <button>dodaj do koszyka</button>
        </div>


    </div>
);


export default Kafelek;