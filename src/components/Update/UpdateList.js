//import React from "react";
//import Product from "./Prod";
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { UpdateContext } from "../../context/update";


function Update({ 
  image, 
  title, 
  _id, 
  price
   
}) {

  const {  deletePost } = React.useContext(
    UpdateContext
  );
  
  return (
<>
                

   
    <article className="product">
      <div className="img-container">
      <img src={image } alt={title || "default title"} />

      </div>
      <div className="product-footer">
        <p className="product-title">{title || "default title"}</p>
        <p className="product-price">${price || 0}</p>
      </div>
      <button onClick={() => deletePost(_id)} className="btn light-blue darken-4">
                 <i className="btn btn-danger">delete</i> 
      </button>
      <button onClick={() => this.editPost(title._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                 <i className="btn btn-danger">edit</i>
     </button>

    </article>
       
  </>
  );
}

Update.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};

export default function UpdateList({ title, update }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
       {update.map(item => {
          return <Update key={item._id} {...item} />;
        })}
      </div>
    </section>
  );
}