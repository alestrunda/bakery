import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import Slider from 'react-slick'
import GoogleMapReact from 'google-map-react';
import Lightbox from 'react-images';

import Pane from '../components/Pane'
import SlickArrow from '../components/SlickArrow'
import Tabs from '../containers/Tabs'

const mainSliderSettings = {
	autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    fade: true,
    speed: 800
}

const productsSliderSettings = {
	slidesToShow: 3,
	slidesToScroll: 3,
	speed: 700,
	arrows: false,
	dots: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 650,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
}

const testimonialsSliderSettings = {
	speed: 1000,
	arrows: true,
	nextArrow: <SlickArrow className="slick-next"><FontAwesome name="chevron-right" /></SlickArrow>,
    prevArrow: <SlickArrow className="slick-prev"><FontAwesome name="chevron-left" /></SlickArrow>,
}

const IndexPage = () => (
	<div>
		<SlickArrow text="dfg" />
		<Slider className="slider-big slick-dots-dot" {...mainSliderSettings}>
			<div className="slider-big__slide">
				<picture>
					<source media="(max-width: 800px)" srcSet={require("../../assets/slider-big/1_800w.jpg")} />
					<img className="el-full" src={require("../../assets/slider-big/1.jpg")} alt="slide" />
				</picture>
				<div className="slider-big__content">
					<div className="container container--full">
						<div>
							<h2 className="heading-highlight m0 slick-anime slick-anime--heading1">Baked &amp; Crisp Cookies</h2>
						</div>
						<span className="heading-highlight-red m0 slick-anime slick-anime--heading2">whole wheat</span>
					</div>
				</div>
			</div>
			<div className="slider-big__slide">
				<picture>
					<source media="(max-width: 800px)" srcSet={require("../../assets/slider-big/2_800w.jpg")} />
					<img className="el-full" src={require("../../assets/slider-big/2.jpg")} alt="slide" />
				</picture>
				<div className="slider-big__content">
					<div className="container container--full">
						<div>
							<h2 className="heading-highlight m0 slick-anime slick-anime--heading1">Baked &amp; Crisp Cookies</h2>
						</div>
						<span className="heading-highlight-red m0 slick-anime slick-anime--heading2">whole wheat</span>
					</div>
				</div>
			</div>
			<div className="slider-big__slide">
				<picture>
					<source media="(max-width: 800px)" srcSet={require("../../assets/slider-big/3_800w.jpg")} />
					<img className="el-full" src={require("../../assets/slider-big/3.jpg")} alt="slide" />
				</picture>
				<div className="slider-big__content">
					<div className="container container--full">
						<div>
							<h2 className="heading-highlight m0 slick-anime slick-anime--heading1">Baked &amp; Crisp Cookies</h2>
						</div>
						<span className="heading-highlight-red m0 slick-anime slick-anime--heading2">whole wheat</span>
					</div>
				</div>
			</div>
			<div className="slider-big__slide">
				<picture>
					<source media="(max-width: 800px)" srcSet={require("../../assets/slider-big/4_800w.jpg")} />
					<img className="el-full" src={require("../../assets/slider-big/4.jpg")} alt="slide" />
				</picture>
				<div className="slider-big__content">
					<div className="container container--full">
						<div>
							<h2 className="heading-highlight m0 slick-anime slick-anime--heading1">Baked &amp; Crisp Cookies</h2>
						</div>
						<span className="heading-highlight-red m0 slick-anime slick-anime--heading2">whole wheat</span>
					</div>
				</div>
			</div>
		</Slider>

		<section className="section-content">
			<div className="container">
				<h2 className="heading-decoration">OUR LATEST BAKERY PRODUCTS</h2>
				<p className="heading-sub">
					Check some of our best products and feel the great passion for food
				</p>
				<div className="slider-products">
					<Slider className="slick-dots-dash slider--dots-out" {...productsSliderSettings}>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/1_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
								<span className="label-box label-box--yellow">New</span>
							</div>
						</div>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/2_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/3_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/4_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/1_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
								<span className="label-box label-box--yellow">New</span>
							</div>
						</div>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/2_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/3_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-products__slide">
							<div className="product-preview label-box-container">
								<img className="el-full" src={require("../../assets/products/4_thumb.jpg")} alt="product" />
								<div className="product-preview__hover">
									<div className="product-preview__hover-inner">
										<em>Croissants</em>
									</div>
									<div className="product-preview__hover-icons">
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="shopping-cart" /></a>
										<a href="#" className="link-hover-yellow ml10"><FontAwesome name="heart" /></a>
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</section>

		<section className="bg-testimonials">
			<div className="container">
				<Slider className="slick-arrows-1" {...testimonialsSliderSettings}>
					<div className="slide">
						<div className="testimonial">
							<div className="testimonial__img">
								<img className="image-round el-center" src={require("../../assets/testimonial.jpg")} alt="image" />
							</div>
							<div className="testimonial__content">
								<p>
									“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500’s...
								</p>                        
							</div>
						</div>
					</div>
					<div className="slide">
						<div className="testimonial">
							<div className="testimonial__img">
								<img className="image-round el-center" src={require("../../assets/testimonial.jpg")} alt="image" />
							</div>
							<div className="testimonial__content">
								<p>
									“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500’s...
								</p>                        
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</section>

		<section className="section-content section-content--bottom-small">
			<div className="container">
				<h2 className="heading-decoration">OUR MAIN SERVICES</h2>
				<p className="heading-sub">
					Our services are best in town, We provide best quality bread &amp; its products.
				</p>
				<div className="m30"></div>
				<div className="grid">
					<div className="grid__item grid__item--lg-span-3 grid__item--md-span-6">
						<div className="product-detail">
							<a className="product-detail__img-wrapper" href="#">
								<img className="product-detail__img img-responsive el-center" src={require("../../assets/services/1.jpg")} alt="image" />
							</a>
							<h4 className="heading-underline text-red">LOT OF BREAD</h4>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
							<a href="#" className="link-read-more">READ MORE <FontAwesome className="link-read-more__icon" name="chevron-right" /></a>
						</div>
					</div>
					<div className="grid__item grid__item--lg-span-3 grid__item--md-span-6">
						<div className="product-detail">
							<a className="product-detail__img-wrapper" href="#">
								<img className="product-detail__img img-responsive el-center" src={require("../../assets/services/2.jpg")} alt="image" />
							</a>
							<h4 className="heading-underline text-red">DELICIOUS LOAF</h4>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
							<a href="#" className="link-read-more">READ MORE <FontAwesome className="link-read-more__icon" name="chevron-right" /></a>
						</div>
					</div>
					<div className="grid__item grid__item--lg-span-3 grid__item--md-span-6">
						<div className="product-detail">
							<a className="product-detail__img-wrapper" href="#">
								<img className="product-detail__img img-responsive el-center" src={require("../../assets/services/3.jpg")} alt="image" />
							</a>
							<h4 className="heading-underline text-red">SWEETS N STUFF’s</h4>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
							<a href="#" className="link-read-more">READ MORE <FontAwesome className="link-read-more__icon" name="chevron-right" /></a>
						</div>
					</div>
					<div className="grid__item grid__item--lg-span-3 grid__item--md-span-6">
						<div className="product-detail">
							<a className="product-detail__img-wrapper" href="#">
								<img className="product-detail__img img-responsive el-center" src={require("../../assets/services/4.jpg")} alt="image" />
							</a>
							<h4 className="heading-underline text-red">CHEF’s SPECIALITY</h4>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
							<a href="#" className="link-read-more">READ MORE <FontAwesome className="link-read-more__icon" name="chevron-right" /></a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section-content bg-promote">
			<div className="container">
				<div className="promote">
					<h2 className="heading-huge text-yellow mb0">DIFFERENT TYPES OF PRODUCTS</h2>
					<div className="mb30">
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
						</p>
					</div>
					<Link to="/" className="button button--white">SEE All OUR PRODUCTS</Link>
				</div>
			</div>
		</section>

		<section className="section-content pb0">
			<div className="container">
				<h2 className="heading-decoration">FEATURED RECEIPES</h2>
				<div className="m20"></div>
				<Tabs>
					<Pane title="Sandwich Cake with Honey">
						<div className="tabs-component__tab">
							<div className="recipe-simple">
								<div className="recipe-simple__content">
									<p>
										"This cake was sent home from our children's school. It is the simplest, great tasting cake I've ever made. Great to make with the kids, especially for cupcakes."
									</p>
									<h4 className="mb10 mt25">
										<FontAwesome className="text-red text-bigger mr5" name="star" />
										Ingredients
									</h4>
									<p className="text-italic">
										1 cup white sugar<br />
										1/2 cup butter<br />
										2 eggs<br />
										2 teaspoons vanilla extract<br />
										1-1/2 cups all-purpose flour<br />
										1-3/4 teaspoons baking powder<br />
										1/2 cup milk
									</p>
								</div>
								<div className="recipe-simple__photo">
									<a className="lightbox" href="">
										<img className="el-full recipe-simple__img" src={require("../../assets/recipes/1_thumb.jpg")} alt="image" />
									</a>
									<div className="row-attrs">
										<div className="row-attrs__item">
											<span className="text-red-dark">PREP:</span><br />
											20 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">COOK:</span><br />
											30 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">READY IN:</span><br />
											50 mins
										</div>
									</div>
								</div>
							</div>
						</div>
					</Pane>
					<Pane title="Strawberry Cake">
						<div className="tabs-component__tab">
							<div className="recipe-simple">
								<div className="recipe-simple__content">
									<p>
										"This cake was sent home from our children's school. It is the simplest, great tasting cake I've ever made. Great to make with the kids, especially for cupcakes."
									</p>
									<h4 className="mb10 mt25">
										<FontAwesome className="text-red text-bigger mr5" name="star" />
										Ingredients
									</h4>
									<p className="text-italic">
										1 cup white sugar<br />
										1/2 cup butter<br />
										2 eggs<br />
										2 teaspoons vanilla extract<br />
										1-1/2 cups all-purpose flour<br />
										1-3/4 teaspoons baking powder<br />
										1/2 cup milk
									</p>
								</div>
								<div className="recipe-simple__photo">
									<a className="lightbox" href="../../assets/recipes/2.jpg">
										<img className="el-full recipe-simple__img" src={require("../../assets/recipes/2_thumb.jpg")} alt="image" />
									</a>
									<div className="row-attrs">
										<div className="row-attrs__item">
											<span className="text-red-dark">PREP:</span><br />
											20 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">COOK:</span><br />
											30 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">READY IN:</span><br />
											50 mins
										</div>
									</div>
								</div>
							</div>
						</div>
					</Pane>
					<Pane title="CheeseCake">
						<div className="tabs-component__tab" id="tabs-3">
							<div className="recipe-simple">
								<div className="recipe-simple__content">
									<p>
										"This cake was sent home from our children's school. It is the simplest, great tasting cake I've ever made. Great to make with the kids, especially for cupcakes."
									</p>
									<h4 className="mb10 mt25">
										<FontAwesome className="text-red text-bigger mr5" name="star" />
										Ingredients
									</h4>
									<p className="text-italic">
										1 cup white sugar<br />
										1/2 cup butter<br />
										2 eggs<br />
										2 teaspoons vanilla extract<br />
										1-1/2 cups all-purpose flour<br />
										1-3/4 teaspoons baking powder<br />
										1/2 cup milk
									</p>
								</div>
								<div className="recipe-simple__photo">
									<a className="lightbox" href="../../assets/recipes/3.jpg">
										<img className="el-full recipe-simple__img" src={require("../../assets/recipes/3_thumb.jpg")} alt="image" />
									</a>
									<div className="row-attrs">
										<div className="row-attrs__item">
											<span className="text-red-dark">PREP:</span><br />
											20 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">COOK:</span><br />
											30 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">READY IN:</span><br />
											50 mins
										</div>
									</div>
								</div>
							</div>
						</div>
					</Pane>
					<Pane title="Almond n Raisins Cake">
						<div className="tabs-component__tab" id="tabs-4">
							<div className="recipe-simple">
								<div className="recipe-simple__content">
									<p>
										"This cake was sent home from our children's school. It is the simplest, great tasting cake I've ever made. Great to make with the kids, especially for cupcakes."
									</p>
									<h4 className="mb10 mt25">
										<FontAwesome className="text-red text-bigger mr5" name="star" />
										Ingredients
									</h4>
									<p className="text-italic">
										1 cup white sugar<br />
										1/2 cup butter<br />
										2 eggs<br />
										2 teaspoons vanilla extract<br />
										1-1/2 cups all-purpose flour<br />
										1-3/4 teaspoons baking powder<br />
										1/2 cup milk
									</p>
								</div>
								<div className="recipe-simple__photo">
									<a className="lightbox" href="../../assets/recipes/4.jpg">
										<img className="el-full recipe-simple__img" src={require("../../assets/recipes/4_thumb.jpg")} alt="image" />
									</a>
									<div className="row-attrs">
										<div className="row-attrs__item">
											<span className="text-red-dark">PREP:</span><br />
											20 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">COOK:</span><br />
											30 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">READY IN:</span><br />
											50 mins
										</div>
									</div>
								</div>
							</div>
						</div>
					</Pane>
					<Pane title="Fruit n Nut Pie">
						<div className="tabs-component__tab" id="tabs-5">
							<div className="recipe-simple">
								<div className="recipe-simple__content">
									<p>
										"This cake was sent home from our children's school. It is the simplest, great tasting cake I've ever made. Great to make with the kids, especially for cupcakes."
									</p>
									<h4 className="mb10 mt25">
										<FontAwesome className="text-red text-bigger mr5" name="star" />
										Ingredients
									</h4>
									<p className="text-italic">
										1 cup white sugar<br />
										1/2 cup butter<br />
										2 eggs<br />
										2 teaspoons vanilla extract<br />
										1-1/2 cups all-purpose flour<br />
										1-3/4 teaspoons baking powder<br />
										1/2 cup milk
									</p>
								</div>
								<div className="recipe-simple__photo">
									<a className="lightbox" href="../../assets/recipes/5.jpg">
										<img className="el-full recipe-simple__img" src={require("../../assets/recipes/5_thumb.jpg")} alt="image" />
									</a>
									<div className="row-attrs">
										<div className="row-attrs__item">
											<span className="text-red-dark">PREP:</span><br />
											20 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">COOK:</span><br />
											30 mins
										</div>
										<div className="row-attrs__item">
											<span className="text-red-dark">READY IN:</span><br />
											50 mins
										</div>
									</div>
								</div>
							</div>
						</div>
					</Pane>
				</Tabs>
			</div>
		</section>

		<section className="section-content">
			<div className="container">
				<h2 className="heading-decoration">OUR SPECIAL CHEF’S</h2>
				<div className="grid grid--center">
					<div className="grid__item grid__item--lg-span-4 grid__item--md-span-6">
						<div className="person-box">
							<div className="person-box__img">
								<div className="person-box__border"></div>
								<img className="img-responsive el-center" src={require("../../assets/worker1.jpg")} alt="chef" />
							</div>
							<div className="person-box__content">
								<p className="person-box__heading">Chef. Michael</p>
								<p>
									Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab.
								</p>
							</div>
						</div>
					</div>
					<div className="grid__item grid__item--lg-span-4 grid__item--md-span-6">
						<div className="person-box">
							<div className="person-box__img">
								<div className="person-box__border"></div>
								<img className="img-responsive el-center" src={require("../../assets/worker2.jpg")} alt="chef" />
							</div>
							<div className="person-box__content">
								<p className="person-box__heading">Chef. Michael</p>
								<p>
									Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab.
								</p>
							</div>
						</div>
					</div>
					<div className="grid__item grid__item--lg-span-4 grid__item--md-span-6">
						<div className="person-box">
							<div className="person-box__img">
								<div className="person-box__border"></div>
								<img className="img-responsive el-center" src={require("../../assets/worker1.jpg")} alt="chef" />
							</div>
							<div className="person-box__content">
								<p className="person-box__heading">Chef. Michael</p>
								<p>
									Whether the flitting attendance of the one still and solitary jet had gradually worked upon Ahab.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<div className="map">
				<div className="map__inner">
					<div className="map__canvas">
						<GoogleMapReact
							className="map__canvas"
							defaultCenter={{lat: 40.715, lng: -73.999}}
							defaultZoom={12}
						>
						</GoogleMapReact>
					</div>
				</div>
				<div className="container container--md-clean">
					<div className="map__over box-orange">
						<h2 className="heading-big text-white heading-underline2">CONTACT US</h2>
						<form>
							<input className="input-text" type="text" placeholder="Your Name" />
							<input className="input-text" type="email" placeholder="Your Email" />
							<textarea className="input-text input-textarea" placeholder="Message"></textarea>
							<div className="text-center">
								<input className="button button--white" type="submit" value="Send message" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>

		<section className="section-content section-content--small bg-dark2 text-white overflow-hidden">
			<div className="container">
				<div className="grid grid--huge">
					<div className="grid__item grid__item--xl-span-6 text-huge">
						<h4 className="heading-mid text-yellow">About</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
					</div>
					<div className="grid__item grid__item--xl-span-6 grid__item--break-lg-35">
						<h4 className="heading-mid text-yellow">Newsletter</h4>
						<p>
							Give us your email, and we shall send regular updates for new stuff and events.
						</p>
						<form className="form-inline">
							<div className="form-inline__input">
								<input className="input-text" type="text" placeholder="Your email" />
							</div>
							<div className="form-inline__submit">
								<input className="button button--small button--full button--red" type="submit" value="Subscribe" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>

		<section className="section-content section-content--small">
			<div className="container">
				<h2 className="heading-decoration">OUR CLIENTS</h2>
				<div className="m20"></div>
				<div className="row-logos">
					<div className="row-logos__item">
						<img className="img-gray img-responsive el-center" width="100" src={require("../../assets/logos/js.svg")} alt="js" />
					</div>
					<div className="row-logos__item">
						<img className="img-gray img-responsive el-center" width="100" src={require("../../assets/logos/react.svg")} alt="react" />
					</div>
					<div className="row-logos__item">
						<img className="img-gray img-responsive el-center" width="100" src={require("../../assets/logos/sass.svg")} alt="sass" />
					</div>
					<div className="row-logos__item">
						<img className="img-gray img-responsive el-center" width="100" src={require("../../assets/logos/webpack.svg")} alt="webpack" />
					</div>
					<div className="row-logos__item">
						<img className="img-gray img-responsive el-center" width="100" src={require("../../assets/logos/wordpress.svg")} alt="wordpress" />
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default IndexPage
