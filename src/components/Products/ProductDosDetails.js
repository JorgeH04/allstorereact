import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
export default function ProductDetails() {
  const { _id } = useParams();
  const history = useHistory();

  const { products } = React.useContext(ProductContext);
  const { addToCart } = React.useContext(CartContext);
  const product = products.find(item => item._id === _id);
  if (products.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = product;
    return (

      <main>
	<section class="container">


		<ul class="b-crumbs">
			<li>
				<a href="index.html">
					Home
				</a>
			</li>
			<li>
				<a href="catalog-list.html">
					Catalog
				</a>
			</li>
			<li>
				<a href="catalog-list.html">
					Women
				</a>
			</li>
			<li>
				<span>Aperiam nihil veniam</span>
			</li>
		</ul>




		
		<h1 class="main-ttl"><span>{title}</span></h1>
		<div class="prod-wrap">

			<div class="prod-slider-wrap">
				<div class="prod-slider">
					<ul class="prod-slider-car">
						<li>
							<a data-fancybox-group="product" class="fancy-img" href={image }>
								<img src={image } alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="<%= produno.imagedos %>">
								<img src={image } alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="<%= produno.imagetres %>">
								<img src={image } alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-fancybox-group="product" class="fancy-img" href="http://placehold.it/500x722">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
					</ul>
				</div>
				<div class="prod-thumbs">
					<ul class="prod-thumbs-car">
						<li>
							<a data-slide-index="0" href="#">
								<img src={image } alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="1" href="#">
								<img src={image } alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="2" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="3" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="4" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="5" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="6" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
						<li>
							<a data-slide-index="7" href="#">
								<img src="http://placehold.it/500x722" alt=""/>
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="prod-cont">
				<div class="prod-cont-txt">

                {description}

 				</div>
				
				<p class="prod-actions">
						<p class="item_current_price"></p>
				</p>
				<div class="prod-skuwrap">
					<p class="prod-skuttl">Color</p>
					<ul class="prod-skucolor">
						<li class="active">
							<img src="/img/color/blue.jpg" alt=""/>
						</li>
						<li>
							<img src="/img/color/red.jpg" alt=""/>
						</li>
						<li>
							<img src="img/color/green.jpg" alt=""/>
						</li>
						<li>
							<img src="img/color/yellow.jpg" alt=""/>
						</li>
						<li>
							<img src="img/color/purple.jpg" alt=""/>
						</li>
					</ul>
					<p class="prod-skuttl">CLOTHING SIZES</p>
					<div class="offer-props-select">
						<p>XL</p>
						<ul>
							<li><a href="#">XS</a></li>
							<li><a href="#">S</a></li>
							<li><a href="#">M</a></li>
							<li class="active"><a href="#">XL</a></li>
							<li><a href="#">L</a></li>
							<li><a href="#">4XL</a></li>
							<li><a href="#">XXL</a></li>
						</ul>
					</div>
				</div>
				<div class="prod-info">
					<p class="prod-price">
						<b class="item_current_price">$ {price}  </b>
					</p>
					
					<p class="prod-addwrap">
            <button class="prod-add" rel="nofollow"
             onClick={() => {
              addToCart(product);
              history.push("/cart");
            }}
            >
            Agregar al carro
            </button>
					</p>
				</div>
				<ul class="prod-i-props">
					<li>
						<b>SKU</b> 05464207
					</li>
					<li>
						<b>Material</b> Nylon
					</li>
					<li>
						<b>Pattern Type</b> Solid
					</li>
					<li>
						<b>Wash</b> Colored
					</li>
					<li>
						<b>Style</b> Sport
					</li>
					<li>
						<b>Color</b> Blue
					</li>
					<li>
						<b>Gender</b> Unisex
					</li>
					<li>
						<b>Rain Cover</b> No
					</li>
					<li>
						<b>Exterior</b> Solid Bag
					</li>
					<li><a href="#" class="prod-showprops">All Features</a></li>
				</ul>
			</div>

 			

		</div>

 
 		<div class="prod-related">
			<h2><span>Related products</span></h2>
			<div class="prod-related-car" id="prod-related-car">
				<ul class="slides">


				
					<li class="prod-rel-wrap">
						<div class="prod-rel">
							<a href="product.html" class="prod-rel-img">
								<img src="http://placehold.it/378x300" alt="Sunt temporibus velit"/>
							</a>
							<div class="prod-rel-cont">
								<h3><a href="product.html">Sunt temporibus velit</a></h3>
								<p class="prod-rel-price">
									<b>$115</b>
								</p>
								<div class="prod-rel-actions">
									<a title="Wishlist" href="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></a>
									<a title="Compare" href="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></a>
									<p class="prod-i-addwrap">
										<a title="Add to cart" href="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></a>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<a href="product.html" class="prod-rel-img">
								<img src="http://placehold.it/300x394" alt="Harum illum incidunt"/>
							</a>
							<div class="prod-rel-cont">
								<h3><a href="product.html">Harum illum incidunt</a></h3>
								<p class="prod-rel-price">
									<b>$130</b>
								</p>
								<div class="prod-rel-actions">
									<a title="Wishlist" href="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></a>
									<a title="Compare" href="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></a>
									<p class="prod-i-addwrap">
										<a title="Add to cart" href="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></a>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<a href="product.html" class="prod-rel-img">
								<img src="http://placehold.it/300x303" alt="Reprehenderit rerum"/>
							</a>
							<div class="prod-rel-cont">
								<h3><a href="product.html">Reprehenderit rerum</a></h3>
								<p class="prod-rel-price">
									<b>$210</b>
								</p>
								<div class="prod-rel-actions">
									<a title="Wishlist" href="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></a>
									<a title="Compare" href="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></a>
									<p class="prod-i-addwrap">
										<a title="Add to cart" href="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></a>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<a href="product.html" class="prod-rel-img">
								<img src="http://placehold.it/300x588" alt="Quae quasi adipisci alias"/>
							</a>
							<div class="prod-rel-cont">
								<h3><a href="product.html">Quae quasi adipisci alias</a></h3>
								<p class="prod-rel-price">
									<b>$85</b>
								</p>
								<div class="prod-rel-actions">
									<a title="Wishlist" href="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></a>
									<a title="Compare" href="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></a>
									<p class="prod-i-addwrap">
										<a title="Add to cart" href="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></a>
									</p>
								</div>
							</div>
						</div>

					</li>
					<li class="prod-rel-wrap">
						<div class="prod-rel">
							<a href="product.html" class="prod-rel-img">
								<img src="http://placehold.it/300x416" alt="Maxime molestias necessitatibus nobis"/>
							</a>
							<div class="prod-rel-cont">
								<h3><a href="product.html">Maxime molestias necessitatibus nobis</a></h3>
								<p class="prod-rel-price">
									<b>$95</b>
								</p>
								<div class="prod-rel-actions">
									<a title="Wishlist" href="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></a>
									<a title="Compare" href="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></a>
									<p class="prod-i-addwrap">
										<a title="Add to cart" href="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></a>
									</p>
								</div>
							</div>
						</div>



						<div class="prod-rel">
							<a href="product.html" class="prod-rel-img">
								<img src="http://placehold.it/300x480" alt="Facilis illum"/>
							</a>
							<div class="prod-rel-cont">
								<h3><a href="product.html">Facilis illum</a></h3>
								<p class="prod-rel-price">
									<b>$150</b>
								</p>
								<div class="prod-rel-actions">
									<a title="Wishlist" href="#" class="prod-rel-favorites"><i class="fa fa-heart"></i></a>
									<a title="Compare" href="#" class="prod-rel-compare"><i class="fa fa-bar-chart"></i></a>
									<p class="prod-i-addwrap">
										<a title="Add to cart" href="#" class="prod-i-add"><i class="fa fa-shopping-cart"></i></a>
									</p>
								</div>
							</div>
						</div>

					</li>
				</ul>
			</div>
		</div>
 
	</section>
</main>
       
    );
  }
}
 