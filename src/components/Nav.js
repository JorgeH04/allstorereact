import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faUser } from '@fortawesome/free-regular-svg-icons';
//import CartLink from "../../Cart/CartLink"; <div><CartLink /></div>  
import CartLink from "../components/Cart/CartLink"; 
import Main from '../components/Main';



export default function Nav({ usuario, logout }) {
  return (






   

    <Main>



<header class="header">

<div class="header_top">
    <div class="container">
        <ul class="contactinfo nav nav-pills">
            <li>
                <i class='fa fa-phone'></i> +7 777 123 1575
            </li>
            <li>
                <i class="fa fa-envelope"></i> admin@real-web.pro
            </li>
        </ul>
        <ul class="social-icons nav navbar-nav">
            <li>
                <a href="http://facebook.com" rel="nofollow" target="_blank">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href="http://google.com" rel="nofollow" target="_blank">
                    <i class="fa fa-google-plus"></i>
                </a>
            </li>
            <li>
                <a href="http://twitter.com" rel="nofollow" target="_blank">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="http://vk.com" rel="nofollow" target="_blank">
                    <i class="fa fa-vk"></i>
                </a>
            </li>
            <li>
                <a href="http://instagram.com" rel="nofollow" target="_blank">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
        </ul>		</div>
</div>

<div class="header-middle">
    <div class="container header-middle-cont">
        <div class="toplogo">
            <Link to="/">
                <img src="img/logo.png" alt="AllStore - MultiConcept eCommerce Template"/>
            </Link>
           
        </div>
        <div class="shop-menu">
            <ul>

                <li>
                    <a href="wishlist.html">
                        <i class="fa fa-heart"></i>
                        <span class="shop-menu-ttl">Wishlist</span>
                        (<span id="topbar-favorites">1</span>)
                    </a>
                </li>

                <li>
                    <a href="compare.html">
                        <i class="fa fa-bar-chart"></i>
                        <span class="shop-menu-ttl">Compare</span> (5)
                    </a>
                </li>

                <li class="topauth">
                <i class="fa fa-lock"></i> 
                       {usuario ?  

                       
                       <BotonLogout logout={logout} />
                       :

                       <Link to="/login" class="shop-menu-ttl"> 
                       Iniciar Sesión</Link> 

                       } 
                 </li>

                <li>
                    <div class="h-cart">
                        <a >
                            <i class="fa fa-shopping-cart"></i>
                            <span class="shop-menu-ttl"><CartLink /></span>
                            
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="header-bottom">
    <div class="container">
        <nav class="topmenu">

            <div class="topcatalog">
                <a class="topcatalog-btn" href="catalog-list.html"><span>All</span> catalog</a>
                <ul class="topcatalog-list">
                    <li>
                        <a href="catalog-list.html">
                            Women
                        </a>
                        <i class="fa fa-angle-right"></i>
                        <ul>
                            <li>
                                 <Link to="/products">Productos</Link>
                            </li>
                            <li>
                                 <Link to="/productdos">Productos</Link>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Bags
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Shoulder Bags
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Falabella
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Becks
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Clutches
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Travel Bags
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Accessories
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sunglasses
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Tech Cases
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Jewelry
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Stella
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Coats & Jackets
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="catalog-list.html">
                            Men
                        </a>
                        <i class="fa fa-angle-right"></i>
                        <ul>
                            <li>
                                <a href="catalog-list.html">
                                    Jackets & Blazers
                                </a>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Pants & Shorts
                                </a>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Accessories
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Bags
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sunglasses
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Other Accessories
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Suiting
                                </a>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Shirts
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="catalog-list.html">
                            Kids
                        </a>
                        <i class="fa fa-angle-right"></i>
                        <ul>
                            <li>
                                <a href="catalog-list.html">
                                    Girls
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Outerwear
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            T-Shirts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Blouses & Shirts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Pants & Shorts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sleepwear & Underwear
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Skirts
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Boys
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Shoes & Accessories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Jumpers & Cardigans
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Shirts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Outerwear
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Swimwear
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Baby
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Baby Sets
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Dresses & All-In-One
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Pants & Shorts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Shoes & Accessories
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            T-shirts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Outerwear
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="catalog-list.html">
                            Shoes
                        </a>
                        <i class="fa fa-angle-right"></i>
                        <ul>
                            <li>
                                <a href="catalog-list.html">
                                    Women
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Elyse
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Odette
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Brody
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Flats
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sandals
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Men
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Casual Shoes
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sneakers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sandals
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Boots
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Mules & Clogs
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Children's
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            Girls
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Boys
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="catalog-list.html">
                                    Baby Shoe
                                </a>
                                <i class="fa fa-angle-right"></i>
                                <ul>
                                    <li>
                                        <a href="catalog-list.html">
                                            First Walkers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sneakers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Boots
                                        </a>
                                    </li>
                                    <li>
                                        <a href="catalog-list.html">
                                            Sandals & Clogs
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <button type="button" class="mainmenu-btn">Menu</button>

            <ul class="mainmenu">
                <li>
                    <a href="index.html" class="active">
                        Home
                    </a>
                </li>
                <li class="menu-item-has-children">
                    <a href="catalog-list.html">
                        Catalog <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="catalog-list.html">
                                Catalog List - Style 1
                            </a>
                        </li>
                        <li>
                            <a href="catalog-list-2.html">
                                Catalog List - Style 2
                            </a>
                        </li>
                        <li>
                            <a href="catalog-gallery.html">
                                Catalog Gallery - Style 1
                            </a>
                        </li>
                        <li>
                            <a href="catalog-gallery-2.html">
                                Catalog Gallery - Style 2
                            </a>
                        </li>
                        <li>
                            <a href="catalog-table.html">
                                Catalog Table
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <a href="product.html">
                        Product <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="product.html">
                                Product - Style 1 (Slider)
                            </a>
                        </li>
                        <li>
                            <a href="product-2.html">
                                Product - Style 2 (Scroll)
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                   <Link to="/about">Nosotros</Link>
                </li>
                <li class="menu-item-has-children">
                    <a href="blog.html">
                        Blog <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="blog.html">
                                Blog - Style 1
                            </a>
                        </li>
                        <li>
                            <a href="blog-2.html">
                                Blog - Style 2
                            </a>
                        </li>
                        <li>
                            <a href="post.html">
                                Single Post
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <a href="#">
                        Pages <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="contacts.html">
                                Contacts
                            </a>
                        </li>
                        <li>
                            <a href="cart.html">
                                Cart
                            </a>
                        </li>
                        <li>
                            <a href="auth.html">
                                Authorization
                            </a>
                        </li>
                        <li>
                            <a href="compare.html">
                                Compare
                            </a>
                        </li>
                        <li>
                            <a href="wishlist.html">
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="404.html">
                                Error 404
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="mainmenu-more">
                    <span>...</span>
                    <ul class="mainmenu-sub"></ul>
                </li>
            </ul>

            <div class="topsearch">
                <a id="topsearch-btn" class="topsearch-btn" href="#"><i class="fa fa-search"></i></a>
                <form class="topsearch-form" action="#">
                    <input type="text" placeholder="Search products"/>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

        </nav>		</div>
</div>

</header>
</Main>

  );
}




  


function BotonLogout({ logout }) {
    return (
      <button className="Perfil__boton-logout" onClick={logout}>
        Logout
      </button>
    );
  }
  