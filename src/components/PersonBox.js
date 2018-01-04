import React from 'react'
import PropTypes from 'prop-types';

const PersonBox = (props) => (
    <div className="person-box">
        <div className="person-box__img">
            <div className="person-box__border" />
            <img className="img-responsive el-center" src={props.imageSrc} alt={props.name} />
        </div>
        <div className="person-box__content">
            <p className="person-box__heading">{`${props.title} ${props.name}`}</p>
            <div dangerouslySetInnerHTML={{ __html: props.html }} />
        </div>
    </div>
)

PersonBox.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    html: PropTypes.string,
};

export default PersonBox