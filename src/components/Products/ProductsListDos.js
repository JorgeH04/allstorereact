//import React from "react";
//import Product from "./Prod";
import { Link } from "react-router-dom";
//import BotonLike from '../BotonLike';
import { toggleLike } from '../../Helpers/post-helpers';
import React, { useState } from 'react';
import PropTypes from "prop-types";



export default function ProductList({ title, products }) {
  return (

	<div class="section-cont">
	<div class="prod-items section-items">

         {products.map(item => {
              return <Product key={item._id} {...item} />;
        })}

		
	</div>
	</div>
 

  );
}



function Product({ 
  image, 
  title, 
  _id, 
  price,
})


  {
  return (

    <div class="prod-i">
		<div class="prod-i-top">
			<a class="prod-i-img">
               <img src={image } alt="Sunt temporibus velit"/></a>
						
                   <Link to={`products/${_id}`} className="prod-i-buy">
                        detalles
                   </Link>
					<p class="prod-i-properties-label"><i class="fa fa-info"></i></p>

					<div class="prod-i-properties">
							
					</div>
					</div>
					<h3>
						<a href="product.html">{title || "default title"}</a>
					</h3>
					<p class="prod-i-price">
						<b>${price || 0}</b>
			       </p>
	</div>



  
  );
}
Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};