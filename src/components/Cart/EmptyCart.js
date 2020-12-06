import React from "react";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (


    <section class="container stylization maincont">


    <ul class="b-crumbs">
        <li>
            <a href="index.html">
                Home
            </a>
        </li>
        <li>
            <span>Cart</span>
        </li>
    </ul>
    <h1 class="main-ttl"><span>Carro vacío</span></h1>

      <Link to="/list" className="btn btn-primary">
        a llenarlo
      </Link>
 

</section>
 






  );
}
