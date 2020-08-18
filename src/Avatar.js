import React from "react";
import image from "./img/1.jpg";
import "./css/style.css";

export default function Avatar({size="s" , type="sqaure", xy="30x30"} ) {

/* const {size="s" , type="sqaure"}= props */
  return (
    <div className="card">
      <div className="image">
        <img className={`${size} ${type}`} src={image} alt="spa-components" />
      </div>
      <div className="content">
        <p>Size <b>{size.toUpperCase()}</b> with <b>{xy.toUpperCase()}</b> </p>
        <p>Type : <b>{type.toUpperCase()}</b> </p>
      </div>
    </div>
  );
}
