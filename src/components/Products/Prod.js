//import React from "react";
import { Link } from "react-router-dom";
import BotonLike from './BotonLike';
import { toggleLike } from '../../Helpers/post-helpers';
import React, { useState } from 'react';

// impt
import PropTypes from "prop-types";
//import img from "../../assets/mainBcg.jpeg";
 //export default function Product({ task, actualizarPost, mostrarError, usuario, title, _id, price, estalike, numLikes }) {
  // const {
   // image, 
   //  title, 
   //  _id, 
   //  price,
   //  estaLike,   
    // numLikes
  // } = task;


export default function Product({ 
  image, 
  title, 
  _id, 
  price,
 estaLike,   
  numLikes,
 // task,
   
}) 




  {
  return (
    <article className="product">
      <div className="img-container">
      <img src={image } alt={title || "default title"} />

        <Link to={`products/${_id}`} className="btn btn-primary product-link">
          detalles
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title || "default title"}</p>
        <p className="product-price">${price || 0}</p>
      </div>
      <BotonLike  like={estaLike}/>

    </article>
  );
}
Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};


