import React from "react";
//import Product from "./Product";
import { ProductContext } from "../../context/products";
import { Link } from 'react-router-dom'


export default function ProductList() {

  const { featured } = React.useContext(ProductContext);

  return (
    <>
        <section class="container">

<div class="discounts-wrap">
            <h3 class="component-ttl"><span>Special offer</span></h3>

            {
        featured.map(post => (
            <div class="flexslider discounts-list">
                <ul class="slides">

             

                    <li class="discounts-i">
                        <a href="product.html" class="discounts-i-img">
                            <img src={post.image} alt="Similique delectus"/>
                        </a>
                        <h3 class="discounts-i-ttl">
                            <a href="product.html">{post.title || "default title"}</a>
                        </h3>
                        <p class="discounts-i-price">
                            <b>${post.price || 0}</b> <del>$155</del>
                        </p>
                    </li>
                  

                </ul>

                 <div class="discounts-info">
                <p>Special offer!<br/>Limited time only</p>
                <a href="catalog-list.html">Shop now</a>

            </div>
            </div>
              ))}

           

        </div>

    </section>
 
    </>
  );


}


