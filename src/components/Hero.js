import React from "react";

export default function Hero({ children }) {
  return (
    <section class="container">
    <div class="fr-slider-wrap">
    <div class="fr-slider">
        <ul class="slides">
            <li>
                <img src="img/slider/slide1.jpg" alt=""/>
                <div class="fr-slider-cont">
                    <h3>MEGA SALE -30%</h3>
                    <p>Winter collection for women's. <br/>We all have choices for you. Check it out!</p>
                    <p class="fr-slider-more-wrap">
                        <a class="fr-slider-more" href="#">View collection</a>
                    </p>
                </div>
            </li>
            <li>
                <img src="img/slider/slide1.jpg" alt=""/>
                <div class="fr-slider-cont">
                    <h3>NEW COLLECTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>Aliquam consequuntur dolorem doloribus fuga harum</p>
                    <p class="fr-slider-more-wrap">
                        <a class="fr-slider-more" href="#">Shopping now</a>
                    </p>
                </div>
            </li>
            <li>
                <img src="img/slider/slide1.jpg" alt=""/>
                <div class="fr-slider-cont">
                    <h3>SUMMER TRENDS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>Aliquam consequuntur dolorem doloribus fuga harum</p>
                    <p class="fr-slider-more-wrap">
                        <a class="fr-slider-more" href="#">Start shopping</a>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</div>
</section>

  );
}
