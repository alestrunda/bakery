import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'
import Slider from 'react-slick'
import GoogleMapReact from 'google-map-react'
import Lightbox from 'react-images'

import ArticlePreview from '../components/ArticlePreview'
import Pane from '../components/Pane'
import PersonBox from '../components/PersonBox'
import ProductPreview from '../components/ProductPreview'
import Recipe from '../components/Recipe'
import SlickArrow from '../components/SlickArrow'
import Tabs from '../containers/Tabs'
import Testimonial from '../components/Testimonial'

const mainSliderSettings = {
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  fade: true,
  speed: 800,
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
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const testimonialsSliderSettings = {
  speed: 1000,
  arrows: true,
  nextArrow: (
    <SlickArrow className="slick-next">
      <FontAwesome name="chevron-right" />
    </SlickArrow>
  ),
  prevArrow: (
    <SlickArrow className="slick-prev">
      <FontAwesome name="chevron-left" />
    </SlickArrow>
  ),
}

const IndexPage = ({ data }) => {
  const tabsRecipes = data.recipes.edges.map(({ node }, index) => {
    return (
      <Pane key={node.id} title={node.frontmatter.title}>
        <div className="tabs-component__tab">
          <Recipe
            recipe={{
              ingredients: node.frontmatter.ingredients,
              text: node.html,
              timePrep: parseInt(node.frontmatter.timePrep),
              timeCook: parseInt(node.frontmatter.timeCook),
              imageSrc:
                node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src,
            }}
          />
        </div>
      </Pane>
    )
  })

  const workers = data.people.edges.map(({ node }, index) => {
    return (
      <div
        key={node.id}
        className="grid__item grid__item--lg-span-4 grid__item--md-span-6"
      >
        <PersonBox
          name={node.frontmatter.name}
          title={node.frontmatter.title}
          html={node.html}
          imageSrc={
            node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
          }
        />
      </div>
    )
  })

  const testimonialSlides = data.testimonials.edges.map(({ node }, index) => {
    return (
      <div key={node.id} className="slide">
        <Testimonial
          html={node.html}
          imageSrc={
            node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
          }
        />
      </div>
    )
  })

  const productSlides = data.products.edges.map(({ node }, index) => {
    return (
      <div key={node.id} className="slider-products__slide">
        <ProductPreview
          label={node.frontmatter.label}
          urlLike={node.frontmatter.urlLike}
          urlShop={node.frontmatter.urlShop}
          title={node.frontmatter.title}
          link={node.fields.slug}
          imageSrc={
            node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
          }
        />
      </div>
    )
  })

  const servicesColumns = data.services.edges.map(({ node }, index) => {
    return (
      <div
        key={node.id}
        className="grid__item grid__item--lg-span-3 grid__item--md-span-6"
      >
        <ArticlePreview
          title={node.frontmatter.title}
          excerpt={node.excerpt}
          link={node.fields.slug}
          imageSrc={
            node.frontmatter.imageSrc.childImageSharp.responsiveSizes.src
          }
        />
      </div>
    )
  })

  return (
    <div>
      <Slider className="slider-big slick-dots-dot" {...mainSliderSettings}>
        <div className="slider-big__slide">
          <picture>
            <source
              media="(max-width: 800px)"
              srcSet={require('../../assets/slider-big/1_800w.jpg')}
            />
            <img
              className="el-full"
              src={require('../../assets/slider-big/1.jpg')}
              alt="slide"
            />
          </picture>
          <div className="slider-big__content">
            <div className="container container--full">
              <div>
                <h2 className="heading-highlight m0 slick-anime slick-anime--heading1">
                  Baked &amp; Crisp Cookies
                </h2>
              </div>
              <span className="heading-highlight-red m0 slick-anime slick-anime--heading2">
                whole wheat
              </span>
            </div>
          </div>
        </div>
        <div className="slider-big__slide">
          <picture>
            <source
              media="(max-width: 800px)"
              srcSet={require('../../assets/slider-big/2_800w.jpg')}
            />
            <img
              className="el-full"
              src={require('../../assets/slider-big/2.jpg')}
              alt="slide"
            />
          </picture>
          <div className="slider-big__content">
            <div className="container container--full">
              <div>
                <h2 className="heading-highlight m0 slick-anime slick-anime--heading1">
                  Baked &amp; Crisp Cookies
                </h2>
              </div>
              <span className="heading-highlight-red m0 slick-anime slick-anime--heading2">
                whole wheat
              </span>
            </div>
          </div>
        </div>
        <div className="slider-big__slide">
          <picture>
            <source
              media="(max-width: 800px)"
              srcSet={require('../../assets/slider-big/3_800w.jpg')}
            />
            <img
              className="el-full"
              src={require('../../assets/slider-big/3.jpg')}
              alt="slide"
            />
          </picture>
          <div className="slider-big__content">
            <div className="container container--full">
              <div>
                <h2 className="heading-highlight m0 slick-anime slick-anime--heading1">
                  Baked &amp; Crisp Cookies
                </h2>
              </div>
              <span className="heading-highlight-red m0 slick-anime slick-anime--heading2">
                whole wheat
              </span>
            </div>
          </div>
        </div>
        <div className="slider-big__slide">
          <picture>
            <source
              media="(max-width: 800px)"
              srcSet={require('../../assets/slider-big/4_800w.jpg')}
            />
            <img
              className="el-full"
              src={require('../../assets/slider-big/4.jpg')}
              alt="slide"
            />
          </picture>
          <div className="slider-big__content">
            <div className="container container--full">
              <div>
                <h2 className="heading-highlight m0 slick-anime slick-anime--heading1">
                  Baked &amp; Crisp Cookies
                </h2>
              </div>
              <span className="heading-highlight-red m0 slick-anime slick-anime--heading2">
                whole wheat
              </span>
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
            <Slider
              className="slick-dots-dash slider--dots-out"
              {...productsSliderSettings}
            >
              {productSlides}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-testimonials">
        <div className="container">
          <Slider className="slick-arrows-1" {...testimonialsSliderSettings}>
            {testimonialSlides}
          </Slider>
        </div>
      </section>

      <section className="section-content section-content--bottom-small">
        <div className="container">
          <h2 className="heading-decoration">OUR MAIN SERVICES</h2>
          <p className="heading-sub">
            Our services are best in town, We provide best quality bread &amp;
            its products.
          </p>
          <div className="m30" />
          <div className="grid">{servicesColumns}</div>
        </div>
      </section>

      <section className="section-content bg-promote">
        <div className="container">
          <div className="promote">
            <h2 className="heading-huge text-yellow mb0">
              DIFFERENT TYPES OF PRODUCTS
            </h2>
            <div className="mb30">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </p>
            </div>
            <Link to="/products/" className="button button--white">
              SEE All OUR PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      <section className="section-content pb0">
        <div className="container">
          <h2 className="heading-decoration">FEATURED RECIPES</h2>
          <div className="m20" />
          <Tabs>{tabsRecipes}</Tabs>
          <div className="text-center">
            <Link to="/recipes/" className="button button--small button--brown">
              All recipes
            </Link>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="container">
          <h2 className="heading-decoration">OUR SPECIAL CHEF’S</h2>
          <div className="grid grid--center">{workers}</div>
        </div>
      </section>

      <section>
        <div className="map">
          <div className="map__inner">
            <div className="map__canvas">
              <GoogleMapReact
                className="map__canvas"
                defaultCenter={{ lat: 40.715, lng: -73.999 }}
                defaultZoom={12}
              />
            </div>
          </div>
          <div className="container container--md-clean">
            <div className="map__over box-orange">
              <h2 className="heading-big text-white heading-underline2">
                CONTACT US
              </h2>
              <form>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="input-text"
                  type="email"
                  placeholder="Your Email"
                />
                <textarea
                  className="input-text input-textarea"
                  placeholder="Message"
                />
                <div className="text-center">
                  <input
                    className="button button--white"
                    type="submit"
                    value="Send message"
                  />
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
            </div>
            <div className="grid__item grid__item--xl-span-6 grid__item--break-lg-35">
              <h4 className="heading-mid text-yellow">Newsletter</h4>
              <p>
                Give us your email, and we shall send regular updates for new
                stuff and events.
              </p>
              <form className="form-inline">
                <div className="form-inline__input">
                  <input
                    className="input-text"
                    type="text"
                    placeholder="Your email"
                  />
                </div>
                <div className="form-inline__submit">
                  <input
                    className="button button--small button--full button--red"
                    type="submit"
                    value="Subscribe"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-content section-content--small">
        <div className="container">
          <h2 className="heading-decoration">OUR CLIENTS</h2>
          <div className="m20" />
          <div className="row-logos">
            <div className="row-logos__item">
              <img
                className="img-gray img-responsive el-center"
                width="100"
                src={require('../../assets/logos/js.svg')}
                alt="js"
              />
            </div>
            <div className="row-logos__item">
              <img
                className="img-gray img-responsive el-center"
                width="100"
                src={require('../../assets/logos/react.svg')}
                alt="react"
              />
            </div>
            <div className="row-logos__item">
              <img
                className="img-gray img-responsive el-center"
                width="100"
                src={require('../../assets/logos/sass.svg')}
                alt="sass"
              />
            </div>
            <div className="row-logos__item">
              <img
                className="img-gray img-responsive el-center"
                width="100"
                src={require('../../assets/logos/webpack.svg')}
                alt="webpack"
              />
            </div>
            <div className="row-logos__item">
              <img
                className="img-gray img-responsive el-center"
                width="100"
                src={require('../../assets/logos/wordpress.svg')}
                alt="wordpress"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query IndexPageQueries {
    recipes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/recipes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            ingredients
            timePrep
            timeCook
            imageSrc {
              childImageSharp {
                responsiveSizes(maxWidth: 500) {
                  src
                }
              }
            }
          }
          html
        }
      }
    }
    people: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/people/" } }
      sort: { fields: [frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            title
            imageSrc {
              childImageSharp {
                responsiveSizes(maxWidth: 500) {
                  src
                }
              }
            }
          }
          html
        }
      }
    }
    products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            urlLike
            urlShop
            label
            imageSrc {
              childImageSharp {
                responsiveSizes(maxWidth: 500) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            imageSrc {
              childImageSharp {
                responsiveSizes(maxWidth: 500) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 120)
        }
      }
    }
    testimonials: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            imageSrc {
              childImageSharp {
                responsiveSizes(maxWidth: 260) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
