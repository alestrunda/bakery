import React from 'react'
import Slider from 'react-slick'
import { withPrefix } from 'gatsby-link'

const SLIDES = [
  {
    img_big: '1.jpg',
    img_small: '1_800w.jpg',
    subtitle: 'Cupcakes',
    title: 'Decicilous',
  },
  {
    img_big: '2.jpg',
    img_small: '2_800w.jpg',
    subtitle: 'Maple Syrup',
    title: 'Pancakes',
  },
  {
    img_big: '3.jpg',
    img_small: '3_800w.jpg',
    subtitle: 'Chocolate',
    title: 'Biscuits',
  },
  {
    img_big: '4.jpg',
    img_small: '4_800w.jpg',
    title: 'Fair Prices',
  },
]

class SliderMain extends React.Component {
  render() {
    const slides = SLIDES.map((slide) => (
      <div key={slide.img_big} className="slider-big__slide">
        <picture>
          <source
            media="(max-width: 800px)"
            srcSet={withPrefix('slider-big/' + slide.img_small)}
          />
          <img
            className="el-full"
            src={withPrefix('slider-big/' + slide.img_big)}
            alt="slide"
          />
        </picture>
        <div className="slider-big__content">
          <div className="container container--full">
            <div>
              <h2 className="heading-highlight m0 slick-anime slick-anime--heading1">
                {slide.title}
              </h2>
            </div>
            {slide.subtitle && (
              <span className="heading-highlight-red m0 slick-anime slick-anime--heading2">
                {slide.subtitle}
              </span>
            )}
          </div>
        </div>
      </div>
    ))

    return <div>{slides && <Slider {...this.props}>{slides}</Slider>}</div>
  }
}

export default SliderMain
