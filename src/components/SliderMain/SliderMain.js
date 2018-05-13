import React from 'react'
import Slider from 'react-slick'
import { withPrefix } from 'gatsby-link'

class SliderMain extends React.Component {
  constructor() {
    super()
    fetch('http://localhost:8080/api/slides')
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({ slides: response })
      })
      .catch(reject => {
        this.setState({ error: 'No slides found' })
      })
  }

  state = {
    slides: [],
    error: '',
  }

  render() {
    const slides = this.state.slides.map(slide => (
      <div key={slide._id} className="slider-big__slide">
        <picture>
          <source
            media="(max-width: 800px)"
            srcSet={withPrefix('slider-big/' + slide.img_small)}
          />
          <img className="el-full" src={withPrefix('slider-big/' + slide.img_big)} alt="slide" />
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
    return (
      <div>
        {this.state.error && (
          <p className="mt50 mb0 text-center text-red text-bold text-big">
            {this.state.error}
          </p>
        )}
        {slides && <Slider {...this.props}>{slides}</Slider>}
      </div>
    )
  }
}

export default SliderMain
