import React, { useContext } from "react";
import { ProductContext } from "../../context/products";
export default function Filters() {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted
  } = useContext(ProductContext);
  return (

 <>
   
   
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
          <span>Women</span>
        </li>
      </ul>
      <h1 class="main-ttl"><span>Women</span></h1>
       <div class="section-sb">
   
         <div class="section-sb-current">
          <h3><a href="catalog-list.html">Women <span id="section-sb-toggle" class="section-sb-toggle"><span class="section-sb-ico"></span></span></a></h3>
          <ul class="section-sb-list" id="section-sb-list">
            <li class="categ-1">
              <a href="catalog-list.html">
                <span class="categ-1-label">Knitwear</span>
              </a>
            </li>
            <li class="categ-1">
              <a href="catalog-list.html">
                <span class="categ-1-label">Dresses</span>
              </a>
            </li>
            <li class="categ-1 has_child">
              <a href="catalog-list.html">
                <span class="categ-1-label">Bags</span>
                <span class="section-sb-toggle"><span class="section-sb-ico"></span></span>
              </a>
              <ul>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Shoulder Bags</span>
                  </a>
                </li>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Falabella</span>
                  </a>
                </li>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Becks</span>
                  </a>
                </li>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Clutches</span>
                  </a>
                </li>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Travel Bags</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="categ-1 has_child">
              <a href="catalog-list.html">
                <span class="categ-1-label">Accessories</span>
                <span class="section-sb-toggle"><span class="section-sb-ico"></span></span>
              </a>
              <ul>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Sunglasses</span>
                  </a>
                </li>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Tech Cases</span>
                  </a>
                </li>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Jewelry</span>
                  </a>
                </li>
                <li class="categ-2">
                  <a href="catalog-list.html">
                    <span class="categ-2-label">Stella</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="categ-1">
              <a href="catalog-list.html">
                <span class="categ-1-label">Coats & Jackets</span>
              </a>
            </li>
          </ul>
        </div>
     
        <div class="section-filter">
          <button id="section-filter-toggle" class="section-filter-toggle" data-close="Hide Filter" data-open="Show Filter">
            <span>Show Filter</span> <i class="fa fa-angle-down"></i>
          </button>
          <div class="section-filter-cont">
            
            <div class="section-filter-item">
              <p class="section-filter-ttl">Style <i class="fa fa-angle-down"></i></p>
              <div class="section-filter-fields">
                <p class="section-filter-field">
                  <input id="section-filter-checkbox2-1" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox2-1">Work</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox2-2" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox2-2">Vintage</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox2-3" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox2-3">Cute</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox2-4" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox2-4">Novelty</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox2-5" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox2-5">Brief</label>
                </p>
              </div>
            </div>
            <div class="section-filter-item opened">
              <p class="section-filter-ttl">Material <i class="fa fa-angle-down"></i></p>
              <div class="section-filter-fields">
                <p class="section-filter-field">
                  <input id="section-filter-checkbox3-1" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox3-1">Cotton</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox3-2" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox3-2">Spandex</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox3-3" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox3-3">Polyester</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox3-4" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox3-4">Acetate</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox3-5" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox3-5">Microfiber</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox3-6" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox3-6">Silk</label>
                </p>
                <p class="section-filter-field">
                  <input id="section-filter-checkbox3-7" value="on" type="checkbox"/>
                  <label class="section-filter-checkbox" for="section-filter-checkbox3-7">Fur</label>
                </p>
              </div>
            </div>
            
            
          
            <div class="section-filter-buttons">
              <input class="btn btn-themes" id="set_filter" name="set_filter" value="Apply filter" type="button"/>
              <input class="btn btn-link" id="del_filter" name="del_filter" value="Reset" type="button"/>
            </div>
          </div>
        </div>
   
      </div>
   
     
   
   
     
   
      <div class="qview-modal">
        <div class="prod-wrap">
          <a href="product.html">
            <h1 class="main-ttl">
              <span>Reprehenderit adipisci</span>
            </h1>
          </a>
          <div class="prod-slider-wrap">
            <div class="prod-slider">
              <ul class="prod-slider-car">
                <li>
                  <a data-fancybox-group="popup-product" class="fancy-img" href="http://placehold.it/500x525">
                    <img src="http://placehold.it/500x525" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-fancybox-group="popup-product" class="fancy-img" href="http://placehold.it/500x591">
                    <img src="http://placehold.it/500x591" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-fancybox-group="popup-product" class="fancy-img" href="http://placehold.it/500x525">
                    <img src="http://placehold.it/500x525" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-fancybox-group="popup-product" class="fancy-img" href="http://placehold.it/500x722">
                    <img src="http://placehold.it/500x722" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-fancybox-group="popup-product" class="fancy-img" href="http://placehold.it/500x722">
                    <img src="http://placehold.it/500x722" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-fancybox-group="popup-product" class="fancy-img" href="http://placehold.it/500x722">
                    <img src="http://placehold.it/500x722" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-fancybox-group="popup-product" class="fancy-img" href="http://placehold.it/500x722">
                    <img src="http://placehold.it/500x722" alt=""/>
                  </a>
                </li>
              </ul>
            </div>
            <div class="prod-thumbs">
              <ul class="prod-thumbs-car">
                <li>
                  <a data-slide-index="0" href="#">
                    <img src="http://placehold.it/500x525" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-slide-index="1" href="#">
                    <img src="http://placehold.it/500x591" alt=""/>
                  </a>
                </li>
                <li>
                  <a data-slide-index="2" href="#">
                    <img src="http://placehold.it/500x525" alt=""/>
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
              </ul>
            </div>
          </div>
   
   
   
          <div class="prod-cont">
            <p class="prod-actions">
              <a href="#" class="prod-favorites"><i class="fa fa-heart"></i> Add to Wishlist</a>
              <a href="#" class="prod-compare"><i class="fa fa-bar-chart"></i> Compare</a>
            </p>
            <div class="prod-skuwrap">
              <p class="prod-skuttl">Color</p>
              <ul class="prod-skucolor">
                <li class="active">
                  <img src="img/color/blue.jpg" alt=""/>
                </li>
                <li>
                  <img src="img/color/red.jpg" alt=""/>
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
              <p class="prod-skuttl">Sizes</p>
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
                <b class="item_current_price">$238</b>
              </p>
              <p class="prod-qnt">
                <input type="text" value="1"/>
                <a href="#" class="prod-plus"><i class="fa fa-angle-up"></i></a>
                <a href="#" class="prod-minus"><i class="fa fa-angle-down"></i></a>
              </p>
              <p class="prod-addwrap">
                <a href="#" class="prod-add">Add to cart</a>
              </p>
            </div>
            <ul class="prod-i-props">
              <li>
                <b>SKU</b> 05464207
              </li>
              <li>
                <b>Manufacturer</b> Mayoral
              </li>
              <li>
                <b>Material</b> Cotton
              </li>
              <li>
                <b>Pattern Type</b> Print
              </li>
              <li>
                <b>Wash</b> Colored
              </li>
              <li>
                <b>Style</b> Cute
              </li>
              <li>
                <b>Color</b> Blue, Red
              </li>
              <li><a href="#" class="prod-showprops">All Features</a></li>
            </ul>
          </div>
        </div>
      </div>
     
      </>
  );
}
