import React from 'react';
import PropTypes from 'prop-types';

const Pane = (props) => {
    return <div>{props.children}</div>
}

Pane.propTypes = {
    children: PropTypes.element.isRequired
};

export default Pane;
