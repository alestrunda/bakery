import React from 'react'
import Lightbox from 'react-image-lightbox'
import className from 'classnames'
import PropTypes from 'prop-types'

class ImageLightbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  handleImgPreviewClick = () => {
    this.setState({ isOpen: true })
  }

  handleImgPreviewClick = () => {
    this.setState({ isOpen: true })
  }

  handlePrevRequest = () => {
    this.setState({
      photoIndex: (photoIndex + fullImages.length - 1) % fullImages.length,
    })
  }

  handleNextRequest = () => {
    this.setState({
      photoIndex: (photoIndex + 1) % fullImages.length,
    })
  }

  render() {
    const { fullImages, previewImages, classNameImg } = this.props
    const { photoIndex, isOpen } = this.state

    return (
      <div>
        <img
          className={className('img-responsive cursor-pointer', classNameImg)}
          alt=""
          src={previewImages[0]}
          onClick={this.handleImgPreviewClick}
        />

        {isOpen && (
          <Lightbox
            mainSrc={fullImages[photoIndex]}
            nextSrc={
              fullImages.length > 1
                ? fullImages[(photoIndex + 1) % fullImages.length]
                : ''
            }
            prevSrc={
              fullImages.length > 1
                ? fullImages[
                    (photoIndex + fullImages.length - 1) % fullImages.length
                  ]
                : ''
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={this.handlePrevRequest}
            onMoveNextRequest={this.handleNextRequest}
          />
        )}
      </div>
    )
  }
}

ImageLightbox.propTypes = {
  fullImages: PropTypes.array,
  previewImages: PropTypes.array,
  classNameImg: PropTypes.string,
}

export default ImageLightbox
