import React from 'react'
import Lightbox from 'react-image-lightbox'
import className from 'classnames'

class ImageLightbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { fullImages, previewImages } = this.props
    const { photoIndex, isOpen } = this.state

    return (
      <div>
        <img
            className={className("img-responsive cursor-pointer", this.props.className)}
            alt=""
            src={previewImages[0]}
            onClick={() => this.setState({ isOpen: true })}
        />

        {isOpen && (
          <Lightbox
            mainSrc={fullImages[photoIndex]}
            nextSrc={fullImages[(photoIndex + 1) % fullImages.length]}
            prevSrc={fullImages[(photoIndex + fullImages.length - 1) % fullImages.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + fullImages.length - 1) % fullImages.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % fullImages.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default ImageLightbox