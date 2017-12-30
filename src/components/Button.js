import React from 'react'

class Button extends React.Component {
    state = {
        active: false
    }

    handleClick = (e) => {
        this.props.onClick && this.props.onClick()
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <button onClick={this.handleClick} className={this.props.className}>
                {this.props.children}
            </button>
        )
    }
}

export default Button