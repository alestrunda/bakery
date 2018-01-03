import React from 'react'

const Testimonial = (props) => (
    <div className="testimonial">
        <div className="testimonial__img">
            <img className="image-round el-center" src={props.imageSrc} alt="image" />
        </div>
        <div className="testimonial__content">
            <div dangerouslySetInnerHTML={{ __html: props.html }} />
        </div>
    </div>
)

export default Testimonial