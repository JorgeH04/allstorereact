import React from "react";
import { CartContext } from "../../context/cart";
//import { UserContext } from "../context/user";
import EmptyCart from "../../components/Cart/EmptyCart";
import CartItem from "../../components/Cart/CartItem";
import { Link } from "react-router-dom";
// import {UserContext} from '../context/user'
import PayPalButton from "./PayPalButton"

export default function Cart({ usuario }) {
  const { cart, total } = React.useContext(CartContext);
 // const { user } = React.useContext(UserContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="cart-items section">
      <h2>Tu carro</h2>
      {cart.map(item => {
        return <CartItem key={item._id} {...item} />;
      })}
      <h2>total : $ {total}</h2>
      {usuario ? (
      <PayPalButton total={total}/>

      ) : (
        <Link to="/login" className="btn btn-primary btn-block">
          login
        </Link>
      )}
                

    </section>
  );
}
//<Link to="/checkout" className="btn btn-primary btn-block">
//checkout
//</Link>